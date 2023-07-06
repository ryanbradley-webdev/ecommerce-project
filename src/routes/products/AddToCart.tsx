import { useState, useContext } from "react";
import Quantity from "../../../components/Quantity";
import { Button } from "@mantine/core";
import { CartContext } from "../../../contexts/CartContext";
import { Product } from "../../../types";

export default function AddToCart({
    product
}: {
    product: Product
}) {
    const { addItemToCart } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const addOne = () => {
        setQuantity(prev => prev + 1)
    }

    const subtractOne = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const addToCart = () => {
        addItemToCart(product, quantity)
    }

    return (
        <div>
            
            <Quantity
                quantity={quantity}
                addOne={addOne}
                subtractOne={subtractOne}
                disabled={quantity <= 1}
            />

            <Button
                onClick={addToCart}
            >
                Add To Cart
            </Button>

        </div>
    )
}