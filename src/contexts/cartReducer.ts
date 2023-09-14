export const initialCart: CartItem[] = []

export const reducer = (state: CartItem[], action: Action): CartItem[] => {
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
                if (item.product.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + (action.payload.quantity || 1)
                    }
                }

                return item
            })

        case 'decrementItem':
            return state.map(item => {
                if (item.product.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }

                return item
            })

        case 'emptyCart':
            return initialCart

        default:
            return state
    }
}