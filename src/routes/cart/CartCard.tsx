import { Card, Group, Text } from '@mantine/core'
import { calculateCost } from '../../lib/calculateCost'
import styles from './cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Quantity from '../../components/Quantity'
import RemoveBtn from '../../components/RemoveBtn'

export default function CartCard({
    product,
    quantity
}: {
    product: Product,
    quantity: number
}) {
    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useContext(CartContext)

    const addOne = () => {
        increaseQuantity(product.id)
    }

    const subtractOne = () => {
        if (quantity === 1) {
            removeItemFromCart(product.id)
        } else {
            decreaseQuantity(product.id)
        }
    }

    return (
        <Card
            display='flex'
            radius={0}
            className={styles.card}
        >

            <img 
                src={product.image}
                alt=''
                className={styles.image}
            />

            <div
                style={{
                    flexGrow: '1'
                }}
            >
                <Group
                    spacing={0}
                >
                
                    <Text
                        weight={500}
                        size={20}
                    >
                        {product.name}
                    </Text>

                    <Text
                        italic
                        size={20}
                    >
                        &nbsp;- {product.brand}
                    </Text>

                </Group>

                <Group
                    maw={500}
                >

                    <Text
                        ml='auto'
                        weight={500}
                        size={20}
                    >
                        {'$' + calculateCost(product.price, quantity)}
                    </Text>

                </Group>

                <Group
                    style={{
                        justifyContent: 'space-between',
                        maxWidth: '500px'
                    }}
                >

                    <Quantity
                        quantity={quantity}
                        addOne={addOne}
                        subtractOne={subtractOne}
                    />

                    <RemoveBtn
                        id={product.id}
                    />

                </Group>

            </div>

        </Card>
    )
}