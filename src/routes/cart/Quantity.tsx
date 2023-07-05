import { Button, Text } from '@mantine/core'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export default function Quantity({
    quantity,
    id
}: {
    quantity: number,
    id: string
}) {

    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useContext(CartContext)

    const addOne = () => {
        increaseQuantity(id)
    }

    const subtractOne = () => {
        if (quantity === 1) {
            removeItemFromCart(id)
        } else {
            decreaseQuantity(id)
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            
            <Button
                h={20}
                w={20}
                p={0}
                display='flex'
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={subtractOne}
                variant='outline'
            >
                -
            </Button>

            <Text>
                {quantity}
            </Text>

            <Button
                h={20}
                w={20}
                p={0}
                display='flex'
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={addOne}
                variant='outline'
            >
                +
            </Button>

        </div>
    )
}