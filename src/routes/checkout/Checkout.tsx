import CartPreview from "./CartPreview"
import CheckoutProvider from "../../../contexts/CheckoutContext"
import CheckoutForm from "./CheckoutForm"

export default function Checkout() {
    return (
        <main
            style={{
                paddingInline: '16px'
            }}
        >
            
            <CartPreview />

            <CheckoutProvider>

                <CheckoutForm />

            </CheckoutProvider>

        </main>
    )
}