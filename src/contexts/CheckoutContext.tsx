import { ReactNode, createContext, useRef, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { addAddress } from "../lib/addAddress";
import { addOrder } from "../lib/addOrder";
import { validateEntries } from "../lib/validateEntries";
import { AuthContext } from "./AuthContext";
import { Address } from "../types";

export const CheckoutContext = createContext({} as CheckoutContext)

export default function CheckoutProvider({ children }: { children: ReactNode }) {
    const {
        user,
        userData
    } = useContext(AuthContext)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isError, setIsError] = useState(false)
    const [sameAddresses, setSameAddress] = useState(false)

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    const navigate = useNavigate()

    const shippingAddressRefs = {
        firstName: useRef<HTMLInputElement>(null),
        lastName: useRef<HTMLInputElement>(null),
        addressLineOne: useRef<HTMLInputElement>(null),
        addressLineTwo: useRef<HTMLInputElement>(null),
        addressLineThree: useRef<HTMLInputElement>(null),
        city: useRef<HTMLInputElement>(null),
        state: useRef<HTMLInputElement>(null),
        zip: useRef<HTMLInputElement>(null)
    }

    const billingAddressRefs = {
        firstName: useRef<HTMLInputElement>(null),
        lastName: useRef<HTMLInputElement>(null),
        addressLineOne: useRef<HTMLInputElement>(null),
        addressLineTwo: useRef<HTMLInputElement>(null),
        addressLineThree: useRef<HTMLInputElement>(null),
        city: useRef<HTMLInputElement>(null),
        state: useRef<HTMLInputElement>(null),
        zip: useRef<HTMLInputElement>(null)
    }

    const paymentRefs = {
        cardNumber: useRef<HTMLInputElement>(null),
        expiration: useRef<HTMLInputElement>(null),
        cvv: useRef<HTMLInputElement>(null),
    }

    const toggleBilling = (isSame: boolean) => {
        for (const [key, value] of Object.entries(billingAddressRefs)) {
            const field = key as keyof Address

            if (value?.current) {
                value.current.value = 
                    isSame ? shippingAddressRefs[field].current?.value || '' :
                    ''
            }
        }

        setSameAddress(isSame)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsSubmitting(true)

        if (!validateEntries(shippingAddressRefs) || !validateEntries(billingAddressRefs) || !validateEntries(paymentRefs)) {
            return setIsError(true)
        }

        try {
            const shippingAddressId = await addAddress({
                line_one: shippingAddressRefs.addressLineOne.current?.value,
                line_two: shippingAddressRefs.addressLineTwo.current?.value,
                line_three: shippingAddressRefs.addressLineThree.current?.value,
                city: shippingAddressRefs.city.current?.value,
                state: shippingAddressRefs.state.current?.value,
                zip: shippingAddressRefs.zip.current?.value
            })

            if (shippingAddressId < 0) {
                console.log('shipping error')
                return setIsError(true)
            }

            const billingAddressId = sameAddresses ?
                shippingAddressId : 
                await addAddress({
                    line_one: billingAddressRefs.addressLineOne.current?.value,
                    line_two: billingAddressRefs.addressLineTwo.current?.value,
                    line_three: billingAddressRefs.addressLineThree.current?.value,
                    city: billingAddressRefs.city.current?.value,
                    state: billingAddressRefs.state.current?.value,
                    zip: billingAddressRefs.zip.current?.value
                })

            if (billingAddressId < 0) {
                console.log('billing error')
                return setIsError(true)
            }

            const order = {
                shipping_address: shippingAddressId,
                billing_address: billingAddressId,
                products: cart.map(item => ({
                    productId: item.product.id,
                    quantity: item.quantity
                })),
                total: cartTotal,
                user_id: user?.id || null
            }

            const orderId = await addOrder(order, user, userData)

            if (orderId < 0) {
                return setIsError(true)
            }

            navigate(`/confirmation?orderId=${orderId}`)

            emptyCart()

        } catch (e) {
            setIsError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    const value = {
        shippingAddressRefs,
        billingAddressRefs,
        paymentRefs,
        toggleBilling,
        handleSubmit,
        isSubmitting,
        isError
    }

    return (
        <CheckoutContext.Provider value={value}>
            {children}
        </CheckoutContext.Provider>
    )
}