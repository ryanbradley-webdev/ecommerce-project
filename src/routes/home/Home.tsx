import { Carousel } from "@mantine/carousel";
import { Button, Card, Stack, MediaQuery, Text } from "@mantine/core";
import NewItem from "./NewItem";

export default function Home() {
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

                    <NewItem
                        image="/pic1.jpg"
                        name='New Balance Daddios'
                        price="20.99"
                    />

                    <Carousel.Slide>
                    <Card radius={8} shadow="md" withBorder pb={42}>
                        <Card.Section>
                            <img src="/pic2.jpg" alt="" style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }} />
                        </Card.Section>
                        <Card.Section p={8}>
                            <Text>
                                Shoes!
                            </Text>
                        </Card.Section>
                        <Card.Section p={8}>
                            <Button fullWidth>
                                Explore
                            </Button>
                        </Card.Section>
                    </Card>
                    </Carousel.Slide>

                    <Carousel.Slide>
                    <Card radius={8} shadow="md" withBorder pb={42}>
                        <Card.Section>
                            <img src="/pic3.jpg" alt="" style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }} />
                        </Card.Section>
                        <Card.Section p={8}>
                            <Text>
                                Shoes!
                            </Text>
                        </Card.Section>
                        <Card.Section p={8}>
                            <Button fullWidth>
                                Explore
                            </Button>
                        </Card.Section>
                    </Card>
                    </Carousel.Slide>

                </Carousel>

                </div>

            </Stack>

        </main>
    )
}