import { Ref } from "react"

export type Product = {
    name: string,
    brand: string,
    description: string,
    image: string,
    rating: number | null,
    price: string,
    id: string
}

export type ReviewSubmission = {
    productId: string,
    name: string,
    review: string,
    rating: number
}

export type Review = ReviewSubmission & {
    id: string,
    created_at: string
}

export type CartItem = {
    product: Product,
    quantity: number
}

export type Cart = CartItem[] | []

export type Action = 
    | { type: 'emptyCart' }
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
    increaseQuantity: (id: string) => void,
    decreaseQuantity: (id: string) => void,
    emptyCart: () => void
}

export type Order = {
    shipping_address: number,
    billing_address: number,
    products: { productId: string, quantity: number }[],
    total: string
}

export type Address = {
    firstName: string,
    lastName: string,
    addressLineOne: string,
    addressLineTwo: string,
    addressLineThree: string,
    city: string,
    state: string,
    zip: string
}

export type Payment = {
    cardNumber: string,
    expiration: string,
    cvv: string
}

export type CheckoutData = {
    shippingAddress: Address,
    billingAddress: Address,
    payment: Payment
}

export type CheckoutAction =
    | { type: 'resetBilling' }
    | { type: 'copyShipping', payload: Address }
    | { type: 'shipping/changeZip' | 'billing/changeZip' | 'changeCardNumber' | 'changeCvv', payload: string }
    | { type: string, payload: string }

export type AddressRefs = {
    firstName: Ref<HTMLInputElement>,
    lastName: Ref<HTMLInputElement>,
    addressLineOne: Ref<HTMLInputElement>,
    addressLineTwo: Ref<HTMLInputElement>,
    addressLineThree: Ref<HTMLInputElement>,
    city: Ref<HTMLInputElement>,
    state: Ref<HTMLInputElement>,
    zip: Ref<HTMLInputElement>
}

export type PaymentRefs = {
    cardNumber: Ref<HTMLInputElement>,
    expiration: Ref<HTMLInputElement>,
    cvv: Ref<HTMLInputElement>
}