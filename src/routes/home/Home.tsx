import { Carousel } from "@mantine/carousel";
import { Stack, MediaQuery, Text, Grid, Image, Flex, Button } from "@mantine/core";
import NewItem from "./NewItem";
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../../lib/getProducts.ts'
import { loadingProductArr } from "../products/loadingProduct.ts";
import { Link } from "react-router-dom";

export default function Home() {
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        placeholderData: loadingProductArr.slice(0, 3)
    })

    return (
        <main>

            <Stack
                spacing={24}
            >
                
                <MediaQuery
                    query='(max-width: 480px)'
                    styles={{ fontSize: '24px' }}
                >

                    <h1 style={{ textAlign: 'center' }}>
                        Wecome to Commerce City
                    </h1>

                </MediaQuery>

                <div>

                    <h4
                        style={{
                            marginLeft: 'max(11%, calc(50% - calc(calc(615px * 0.78) / 2)))',
                            marginBottom: '12px'
                        }}
                    >
                        Recent Additions
                    </h4>

                    <Carousel
                        align='center'
                        slideGap='xl'
                        slideSize='80%'
                        maw={615}
                        mx='auto'
                        withIndicators
                        styles={{
                            indicator: {
                                background: 'var(--color-indicator)'
                            }
                        }}
                    >

                        {products && products.map((product, idx) => {
                            if (idx < 3) return (
                                <NewItem
                                    product={product}
                                    key={product.id}
                                />
                            )
                        })}

                    </Carousel>

                </div>

                <div>

                    <Text
                        align="center"
                        weight={500}
                        size={20}
                    >
                        We Carry All Major Brands
                    </Text>

                    <Grid
                        columns={6}
                        align="center"
                        gutter={24}
                        my={24}
                    >
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/nike.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/addidas.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/skechers.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/vans.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/new-balance.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                        <Grid.Col
                            xs={3}
                            sm={3}
                            md={2}
                            lg={2}
                            xl={1}
                        >
                            <Image src='/converse.png' alt="" width={120} height='auto' mx='auto' style={{ display: 'block' }} />
                        </Grid.Col>
                    </Grid>

                </div>

                <Flex
                    justify='center'
                >

                    <Link
                        to='/products'
                    >
                    
                        <Button
                            py={12}
                            px={24}
                            h='fit-content'
                        >
                            <Text
                                size={20}
                            >
                                Explore Our Inventory
                            </Text>
                        </Button>
                    
                    </Link>

                </Flex>

            </Stack>

        </main>
    )
}