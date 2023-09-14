import { Button } from '@mantine/core'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Product } from '../src/types'

export default function CartBtn({ product, quantity }: { product: Product, quantity?: number }) {
    const { addItemToCart } = useContext(CartContext)

    const [itemAdded, setItemAdded] = useState(false)
        
    const handleClick = () => {
        addItemToCart(product, quantity || 1)

        setItemAdded(true)
    }

    return (
        <Button
            fullWidth
            onClick={handleClick}
        >
            { itemAdded ? 'Added to cart!' : 'Add to cart' }
        </Button>
    )
}