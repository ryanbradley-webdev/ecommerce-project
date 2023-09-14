import { Card, Group, Text } from '@mantine/core'
import { Product } from '../src/types'
import styles from './styles.module.css'

export default function ProductConfirmationCard({
    product,
    quantity
}: {
    product: Product,
    quantity: number
}) {
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
                        size={18}
                    >
                        {product.name}
                    </Text>

                    <Text
                        italic
                        size={18}
                    >
                        &nbsp;- {product.brand}
                    </Text>

                </Group>

                <Group>

                    <Text
                        italic
                        size={14}
                    >
                        x{quantity}
                    </Text>

                </Group>

            </div>

        </Card>
    )
}