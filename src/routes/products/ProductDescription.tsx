import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Image, Title, Text, MediaQuery, Stack, Grid, Rating } from '@mantine/core'
import AddToCart from './AddToCart'
import styles from './products.module.css'
import Comments from './Comments'
import { loadingProduct } from './loadingProduct'
import { useState } from 'react'
import { getProductById } from '../../lib/getProductById'
import { getReviewCountById } from '../../lib/getReviewCountById'
import ImgSkeleton from '../../components/skeletons/ImgSkeleton'
import SubtitleSkeleton from '../../components/skeletons/SubtitleSkeleton'
import TextSkeleton from '../../components/skeletons/TextSkeleton'
import TitleSkeleton from '../../components/skeletons/TitleSkeleton'

export default function ProductDescription() {
    const { id } = useParams()

    const [productRating, setProductRating] = useState('0.0')

    const { data: product } = useQuery({
        queryKey: [`product-${id}`],
        queryFn: async () => {
            const product = await getProductById(id)

            updateRating(product?.rating)

            return product
        },
        placeholderData: loadingProduct
    })

    const { data: reviewCount} = useQuery({
        queryKey: [`review-count-${id}`],
        queryFn: () => getReviewCountById(id)
    })

    const updateRating = (rating: number | null | undefined) => {
        if (!rating) return

        if (rating % 1 === 0) {
            return setProductRating(rating.toString() + '.0')
        }

        setProductRating(rating.toString().slice(0, 3))
    }

    return (
        <main>
            {
                product ? (
                    <div className={styles.wrapper}>

                        {product.image === 'loading' ? (

                                <ImgSkeleton
                                    aspectRatio='1 / 1'
                                    width='80%'
                                    mx='10%'
                                    radius
                                /> 

                            ) : (

                                <Image src={product.image} alt='' px='10%' radius={8} />

                            )
                        }

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
        
                                    {product.brand === 'loading' ? (
                                            <SubtitleSkeleton />
                                        ) : (
                                            <Text>{product.brand}</Text>
                                        )
                                    }
        
                                    {product.name === 'loading' ? (
                                            <TitleSkeleton
                                                height='34px'
                                            />
                                        ) : (
                                            <Title>{product.name}</Title>
                                        )
                                    }
        
                                </Stack>
        
                            </MediaQuery>

                            <Grid.Col>

                                {product.description === 'loading' ? (
                                        <TextSkeleton />
                                    ) : (
                                        <Text>{product.description}</Text>
                                    )
                                }

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
                                    value={Number(productRating)}
                                    readOnly
                                />

                                &nbsp;{productRating} stars&nbsp;

                                <Text
                                    weight={300}
                                    ml={24}
                                >
                                    ({reviewCount || 0} review{reviewCount !== 1 && 's'})
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
                            updateRating={updateRating}
                        />

                    </div>
                ) : (
                    <h1>hello</h1>
                )
            }
        </main>
    )
}