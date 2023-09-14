type Product = {
    name: string,
    brand: string,
    description: string,
    image: string,
    rating: number | null,
    price: string,
    id: string
}

type ReviewSubmission = {
    productId: string,
    name: string,
    review: string,
    rating: number
}

type Review = ReviewSubmission & {
    id: string,
    created_at: string
}

type CartItem = {
    product: Product,
    quantity: number
}

type Action = 
    | { type: 'emptyCart' }
    | { type: 'addItem', payload: CartItem }
    | { type: 'removeItem', payload: string }
    | { type: 'incrementItem', payload: { id: string, quantity: number | undefined } }
    | { type: 'decrementItem', payload: string }

type CartData = {
    cart: CartItem[],
    cartQuantity: number,
    cartTotal: string,
    addItemToCart: (product: Product, quantity: number) => void,
    removeItemFromCart: (id: string) => void,
    increaseQuantity: (id: string) => void,
    decreaseQuantity: (id: string) => void,
    emptyCart: () => void
}

type Order = {
    shipping_address: number,
    billing_address: number,
    products: { productId: string, quantity: number }[],
    total: string
}

type Address = {
    firstName: string,
    lastName: string,
    addressLineOne: string,
    addressLineTwo: string,
    addressLineThree: string,
    city: string,
    state: string,
    zip: string
}

type Payment = {
    cardNumber: string,
    expiration: string,
    cvv: string
}

type CheckoutData = {
    shippingAddress: Address,
    billingAddress: Address,
    payment: Payment
}

type CheckoutAction =
    | { type: 'resetBilling' }
    | { type: 'copyShipping', payload: Address }
    | { type: 'shipping/changeZip' | 'billing/changeZip' | 'changeCardNumber' | 'changeCvv', payload: string }
    | { type: string, payload: string }

type AddressRefs = {
    firstName: Ref<HTMLInputElement>,
    lastName: Ref<HTMLInputElement>,
    addressLineOne: Ref<HTMLInputElement>,
    addressLineTwo: Ref<HTMLInputElement>,
    addressLineThree: Ref<HTMLInputElement>,
    city: Ref<HTMLInputElement>,
    state: Ref<HTMLInputElement>,
    zip: Ref<HTMLInputElement>
}

type PaymentRefs = {
    cardNumber: Ref<HTMLInputElement>,
    expiration: Ref<HTMLInputElement>,
    cvv: Ref<HTMLInputElement>
}

type AuthContext = {
    user: User | null
    login: (email: string, password: string) => void
    signup: (email: string, password: string) => void
    logout: () => void
}

type CheckoutContext = {
    shippingAddressRefs: AddressRefs,
    billingAddressRefs: AddressRefs,
    paymentRefs: PaymentRefs,
    toggleBilling: (isSame: boolean) => void,
    handleSubmit: (e: React.FormEvent) => void,
    isSubmitting: boolean,
    isError: boolean
}