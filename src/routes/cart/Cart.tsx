import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { Stack, Title, Text } from "@mantine/core"
import CartCard from "./CartCard"

export default function Cart() {
    const { cart } = useContext(CartContext)

    return (
        <main>
            
            <Title>
                Your Cart
            </Title>

            <Stack>

                {
                    cart.length > 0 ? (
                        cart.map(item => (
                            <CartCard key={item.product.id} {...item} />
                        ))
                    ) : (
                        <Text>
                            There are no items in your cart!
                        </Text>
                    )
                }

            </Stack>

        </main>
    )
}