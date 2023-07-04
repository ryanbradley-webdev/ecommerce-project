import { Action, Cart } from '../types'

export const initialCart: Cart = []

export const reducer = (state: Cart, action: Action): Cart => {
    switch (action.type) {
        case 'addItem':
            return [
                ...state,
                action.payload
            ]

        case 'removeItem':
            return state.filter(item => item.product.id !== action.payload)

        case 'incrementItem':
            return state.map(item => {
                if (item.product.id === action.payload) {
                    item.quantity++
                }

                return item
            })

        case 'decrementItem':
            return state.map(item => {
                if (item.product.id === action.payload) {
                    item.quantity--
                }

                return item
            })

        default:
            return state
    }
}