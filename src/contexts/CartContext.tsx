import { createContext, ReactNode, useEffect, useMemo, useReducer } from "react"
import { reducer, initialCart } from "./cartReducer"
import { sumDollars, sumCents, costToString } from "../lib/calculateCost"

export const CartContext = createContext({} as CartData)

export default function CartProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const savedCart = localStorage.getItem('shoe-cart')

    const [cart, dispatch] = useReducer(reducer, savedCart ? JSON.parse(savedCart) : initialCart)

    const addItemToCart = (product: Product, quantity: number) => {
        const targetItem = cart.find(item => item.product.id === product.id)

        if (targetItem) {
            return increaseQuantity(product.id, quantity)
        } else {
            dispatch({
                type: 'addItem',
                payload: { product, quantity }
            })
        }
    }

    const removeItemFromCart = (id: string) => {
        dispatch({
            type: 'removeItem',
            payload: id
        })
    }

    const increaseQuantity = (id: string, quantity?: number) => {
        dispatch({
            type: 'incrementItem',
            payload: { id, quantity }
        })
    }

    const decreaseQuantity = (id: string) => {
        const targetItem = cart.find(item => item.product.id === id)

        if (targetItem?.quantity && targetItem.quantity <= 1) {
            return removeItemFromCart(id)
        }

        dispatch({
            type: 'decrementItem',
            payload: id
        })
    }

    const emptyCart = () => {
        dispatch({ type: 'emptyCart' })
    }

    const [cartQuantity, cartTotal] = useMemo(() => {
        let count = 0
        let totalDollars = 0
        let totalCents = 0

        cart.forEach(item => {
            count += item.quantity

            const [dollarsStr, centsStr] = item.product.price.split('.')

            totalDollars += Number(dollarsStr) * item.quantity
            totalCents += Number(centsStr) * item.quantity
        })

        const dollars = sumDollars(totalDollars, totalCents)
        const cents = sumCents(totalCents)

        return [count, costToString(dollars, cents)]
    }, [cart])

    useEffect(() => {
        localStorage.setItem('shoe-cart', JSON.stringify(cart))
    }, [cart])

    const value = {
        cart,
        cartQuantity,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        emptyCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}