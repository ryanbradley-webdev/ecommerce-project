import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { PLACEHOLDER_ITEMS } from '../../../placeholderData'
import { Flex, Image, Title, Text, MediaQuery, Stack, Grid, Rating } from '@mantine/core'
import AddToCart from './AddToCart'

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
                    <>

                        <MediaQuery
                            query='(max-width: 480px)'
                            styles={{
                                flexDirection: 'column-reverse',
                                alignItems: 'center'
                            }}
                        >

                            <Flex
                                align='flex-end'
                                gap={12}
                            >

                                <Image src={product.image} alt='' height={250} width={250} radius={8} />

                                <MediaQuery
                                    query='(max-width: 480px)'
                                    styles={{
                                        textAlign: 'center'
                                    }}
                                >

                                    <Stack
                                        h='fit-content'
                                        spacing={0}
                                    >

                                        <Text>
                                            {product.brand}
                                        </Text>

                                        <Title>
                                            {product.name}
                                        </Title>

                                    </Stack>

                                </MediaQuery>

                            </Flex>

                        </MediaQuery>

                        <MediaQuery
                            query='(max-width: 480px)'
                            styles={{
                                alignItems: 'center'
                            }}
                        >

                            <Grid
                                px={16}
                                mx={0}
                                my={24}
                                align='center'
                                justify='center'
                            >

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
                                        (13 reviews)
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

                        </MediaQuery>

                    </>
                ) : (
                    <h1>hello</h1>
                )
            }
        </main>
    )
}