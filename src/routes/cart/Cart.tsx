import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { Stack, Title, Text, Button } from "@mantine/core"
import CartCard from "./CartCard"
import { IconCreditCard } from "@tabler/icons-react"

export default function Cart() {
    const { cart, cartTotal } = useContext(CartContext)

    return (
        <main>
            
            <Title
                pl={16}
            >
                Your Cart
            </Title>

            <Stack
                py={24}
                spacing={0}
            >

                {
                    cart.length > 0 ? (
                        cart.map(item => (
                            <CartCard key={item.product.id} {...item} />
                        ))
                    ) : (
                        <Text
                            align="center"
                        >
                            There are no items in your cart!
                        </Text>
                    )
                }

            </Stack>

            <Text
                weight={500}
                size={20}
                align="right"
                mr={16}
            >
                Grand Total: ${cartTotal}
            </Text>

            <Stack
                w={200}
                mr={16}
                ml='auto'
                my={24}
            >

                <Button
                    variant="outline"
                >
                    Continue Shopping
                </Button>

                <Button>
                    <IconCreditCard />
                    Checkout
                </Button>

            </Stack>

        </main>
    )
}