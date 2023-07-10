import { useQuery } from "@tanstack/react-query"
import { Link, useSearchParams } from "react-router-dom"
import { getOrderById } from '../../../lib/getOrderById'
import { Button, Stack, Text, Title } from "@mantine/core"
import { getProducts } from "../../../lib/getProducts"
import { useEffect, useState } from "react"
import { Product } from "../../../types"
import ProductConfirmationCard from "../../../components/ProductConfirmationCard"

export default function Confirmation() {
    const [ searchParams ] = useSearchParams()

    const [orderedProducts, setOrderedProducts] = useState<Product[]>([])

    const orderId = searchParams.get('orderId')

    const { data: order } = useQuery({
        queryKey: [`order-${orderId}`],
        queryFn: () => getOrderById(orderId)
    })

    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    useEffect(() => {
        if (!order || !products) return

        const productIds = order.products.map(product => product.productId)

        setOrderedProducts(products.filter(product => productIds.includes(product.id)))
    }, [order, products])

    return (
        <main>

            {order ? (
                <>
                    <Title
                        align="center"
                        mb={48}
                    >
                        Thanks for your order!
                    </Title>

                    <Title
                        align="center"
                        size={24}
                        mb={24}
                    >
                        Your confirmation number is {orderId}
                    </Title>

                    <Text
                        mr={16}
                        weight={500}
                        align="right"
                    >
                        Total: ${order.total}
                    </Text>

                    <Stack>

                        {orderedProducts.map(product => (
                            <ProductConfirmationCard
                                key={product.id}
                                product={product}
                                quantity={order.products.find(targetProduct => {
                                    return targetProduct.productId === product.id
                                })?.quantity || 1}
                            />
                        ))}

                    </Stack>

                    <Link
                        to='/'
                        style={{
                            display: 'block',
                            width: 'fit-content',
                            marginInline: 'auto'
                        }}
                    >
                        
                        <Button>
                            Return Home
                        </Button>

                    </Link>
                </>
            ) : (
                <Title>
                    No Order Found
                </Title>
            )
            
        }

        </main>
    )
}