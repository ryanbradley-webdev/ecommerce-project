export type Product = {
    name: string,
    image: string,
    price: string,
    id: string
}

export type CartItem = {
    product: Product,
    quantity: number
}

export type Cart = CartItem[] | []

export type Action = 
    | { type: 'addItem', payload: CartItem }
    | { type: 'removeItem', payload: string }
    | { type: 'incrementItem', payload: string }
    | { type: 'decrementItem', payload: string }

export type CartData = {
    cart: Cart,
    addItemToCart: (product: Product, quantity: number) => void,
    removeItemFromCart: (id: string) => void,
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
}