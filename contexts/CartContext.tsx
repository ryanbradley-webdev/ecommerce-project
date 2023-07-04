import { createContext, ReactNode, useReducer } from "react"
import { reducer, initialCart } from "./cartReducer"
import { Product, CartData } from "../types"

export const CartContext = createContext<Partial<CartData>>({})

export default function CartProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [cart, dispatch] = useReducer(reducer, initialCart)

    const addItemToCart = (product: Product, quantity: number) => {
        const targetItem = cart.find(item => item.product.id === product.id)

        if (targetItem) {
            return increaseQuantity(product.id)
        }
        
        dispatch({
            type: 'addItem',
            payload: { product, quantity }
        })
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

    const value = {
        cart,
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