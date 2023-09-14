import CheckoutProvider from "../../contexts/CheckoutContext"
import CartPreview from "./CartPreview"
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