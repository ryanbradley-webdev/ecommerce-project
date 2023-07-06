export type Product = {
    name: string,
    brand: string,
    description: string,
    image: string,
    rating: number,
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
    | { type: 'incrementItem', payload: { id: string, quantity: number | undefined } }
    | { type: 'decrementItem', payload: string }

export type CartData = {
    cart: Cart,
    cartQuantity: number,
    cartTotal: string,
    addItemToCart: (product: Product, quantity: number) => void,
    removeItemFromCart: (id: string) => void,
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
}