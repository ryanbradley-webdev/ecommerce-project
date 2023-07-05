import { Card, Group, Text } from '@mantine/core'
import { Product } from '../../../types'
import Quantity from './Quantity'
import RemoveBtn from '../../../components/RemoveBtn'
import { calculateCost } from '../../../lib/calculateCost'

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
                gap: '12px'
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
                style={{
                    flexGrow: '1'
                }}
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
                        justifyContent: 'space-between'
                    }}
                >

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