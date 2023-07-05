import { createContext, ReactNode, useMemo, useReducer } from "react"
import { reducer, initialCart } from "./cartReducer"
import { Product, CartData } from "../types"
import { costToString, sumCents, sumDollars } from "../lib/calculateCost"

export const CartContext = createContext({} as CartData)

export default function CartProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [cart, dispatch] = useReducer(reducer, initialCart)

    const addItemToCart = (product: Product, quantity: number) => {
        const targetItem = cart.find(item => item.product.id === product.id)

        if (targetItem) {
            return increaseQuantity(product.id)
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

    const increaseQuantity = (id: string) => {
        dispatch({
            type: 'incrementItem',
            payload: id
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

    const value = {
        cart,
        cartQuantity,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}