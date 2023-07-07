import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Image, Title, Text, MediaQuery, Stack, Grid, Rating } from '@mantine/core'
import AddToCart from './AddToCart'
import styles from './products.module.css'
import Comments from './Comments'
import { getProductById } from '../../../lib/getProductById'

import { PLACEHOLDER_REVIEWS } from '../../../placeholderData'

export default function ProductDescription() {
    const { id } = useParams()

    const product = useQuery({
        queryKey: [`product-${id}`],
        queryFn: () => getProductById(id)
    }).data

    const reviewCount = useQuery({
        queryKey: [`review-count-${id}`],
        queryFn: () => PLACEHOLDER_REVIEWS.filter(review => review.productId === id).length
    }).data

    return (
        <main>
            {
                product ? (
                    <div className={styles.wrapper}>

                        <Image src={product.image} alt='' px='10%' radius={8} />

                        <Grid
                            px={16}
                            mx={0}
                            my={24}
                            align='center'
                            justify='center'
                        >

                            <MediaQuery
                                query='(max-width: 480px)'
                                styles={{
                                    alignItems: 'center'
                                }}
                            >
        
                                <Stack
                                    h='fit-content'
                                    spacing={0}
                                    my={24}
                                >
        
                                    <Text>
                                        {product.brand}
                                    </Text>
        
                                    <Title>
                                        {product.name}
                                    </Title>
        
                                </Stack>
        
                            </MediaQuery>

                            <Grid.Col>

                                <Text>
                                    {product.description}
                                </Text>

                            </Grid.Col>

                            <Grid.Col
                                display='flex'
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >

                                <Rating
                                    fractions={10}
                                    value={product.rating}
                                />

                                {product.rating}&nbsp;

                                <Text
                                    weight={300}
                                    ml={24}
                                >
                                    ({reviewCount || 0} reviews)
                                </Text>

                            </Grid.Col>

                            <Grid.Col
                                display='flex'
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '24px'
                                }}
                            >

                                <AddToCart
                                    product={product}
                                />

                            </Grid.Col>

                        </Grid>

                        <Comments
                            id={product.id}
                        />

                    </div>
                ) : (
                    <h1>hello</h1>
                )
            }
        </main>
    )
}