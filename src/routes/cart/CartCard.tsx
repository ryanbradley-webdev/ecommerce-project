import { Card, Group, Text } from '@mantine/core'
import { Product } from '../../../types'
import Quantity from './Quantity'
import RemoveBtn from '../../../components/RemoveBtn'

export default function CartCard({
    product,
    quantity
}: {
    product: Product,
    quantity: number
}) {
    return (
        <Card
            display='flex'
            style={{
                height: '125px',
                gap: '24px'
            }}
        >

            <img 
                src={product.image}
                alt=''
                width='auto'
                height='100%'
                style={{
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }}
            />

            <Card.Section
                m={0}
            >
                <Group>
                
                    <Text>
                        {product.brand}
                    </Text>

                    <Text>
                        {product.name}
                    </Text>

                </Group>

                <Group>

                    <Quantity
                        quantity={quantity}
                        id={product.id}
                    />

                    <RemoveBtn
                        id={product.id}
                    />

                </Group>

            </Card.Section>

        </Card>
    )
}