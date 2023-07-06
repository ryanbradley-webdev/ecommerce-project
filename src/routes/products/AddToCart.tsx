import { useState } from "react";
import Quantity from "../../../components/Quantity";
import { Product } from "../../../types";
import CartBtn from "../../../components/CartBtn";

export default function AddToCart({
    product
}: {
    product: Product
}) {
    const [quantity, setQuantity] = useState(1)

    const addOne = () => {
        setQuantity(prev => prev + 1)
    }

    const subtractOne = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <>
            
            <Quantity
                quantity={quantity}
                addOne={addOne}
                subtractOne={subtractOne}
                disabled={quantity <= 1}
            />

            <CartBtn
                product={product}
                quantity={quantity}
            />

        </>
    )
}