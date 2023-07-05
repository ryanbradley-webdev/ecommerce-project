import { Carousel } from "@mantine/carousel";
import { Stack, MediaQuery, Text, Grid, Image } from "@mantine/core";
import NewItem from "./NewItem";
import { useQuery } from '@tanstack/react-query'

import { PLACEHOLDER_ITEMS } from '../../../placeholderData.ts'

export default function Home() {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => PLACEHOLDER_ITEMS,
        placeholderData: PLACEHOLDER_ITEMS
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
                            marginLeft: '11%'
                        }}
                    >
                        Recent Additions
                    </h4>

                    <Carousel
                        loop
                        align='center'
                        slideGap='xl'
                        slideSize='80%'
                        withIndicators
                        styles={{
                            indicator: {
                                background: 'var(--color-indicator)'
                            }
                        }}
                    >

                        {data && data.map(product => (
                            <NewItem
                                product={product}
                                key={product.id}
                            />
                        ))}

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

            </Stack>

        </main>
    )
}