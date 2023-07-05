import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { Stack, Title, Text, Button } from "@mantine/core"
import CartCard from "./CartCard"
import { IconCreditCard } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import styles from './cart.module.css'

export default function Cart() {
    const { cart, cartTotal } = useContext(CartContext)

    return (
        <main>
            
            <Title
                pl={16}
            >
                Your Cart
            </Title>

            <div className={styles.cart}>

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

                <div>

                    <Stack
                        w={300}
                        mx='auto'
                        my={24}
                        className={styles.checkout}
                    >

                        {
                            cart.length > 0 && (
                                <Text
                                    weight={500}
                                    size={20}
                                    align="center"
                                    mr={16}
                                >
                                    Grand Total: ${cartTotal}
                                </Text>
                            )
                        }

                        <Link to='/products'>
                            <Button
                                variant="outline" fullWidth
                            >
                                {cart.length > 0 ? 'Continue Shopping' : 'Add items to checkout!'}
                            </Button>
                        </Link>

                        {
                            cart.length > 0 && (
                                <Link to='/checkout'>
                                    <Button 
                                        fullWidth
                                    >
                                        <IconCreditCard />
                                        &nbsp;Checkout
                                    </Button>
                                </Link>
                            )
                        }

                    </Stack>

                </div>

            </div>

        </main>
    )
}