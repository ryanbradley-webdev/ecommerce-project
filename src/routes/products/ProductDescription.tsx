import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { PLACEHOLDER_ITEMS } from '../../../placeholderData'
import { Image } from '@mantine/core'

export default function ProductDescription() {
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => PLACEHOLDER_ITEMS,
        placeholderData: PLACEHOLDER_ITEMS
    })

    const product = data ? data.find(product => product.id === id) : null

    return (
        <main>
            {
                product ? (
                    <div>
                        {product.name}
                        {product.brand}
                        {product.description}
                        <Image src={product.image} alt='' />
                    </div>
                ) : (
                    <h1>hello</h1>
                )
            }
        </main>
    )
}