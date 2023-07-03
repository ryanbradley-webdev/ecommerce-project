import { Carousel } from "@mantine/carousel";
import { Stack, MediaQuery } from "@mantine/core";
import NewItem from "./NewItem";
import { useState } from "react";

export const PLACEHOLDER_ITEMS = [
    {
        name: 'New Balance Daddios',
        price: '20.99',
        image: '/pic1.jpg',
        id: '1'
    },
    {
        name: 'Nike Sportsball',
        price: '69.99',
        image: '/pic2.jpg',
        id: '2'
    },
    {
        name: 'Addidas Puma-Jordans',
        price: '4.20',
        image: '/pic3.jpg',
        id: '3'
    }
]

export default function Home() {
    const [newItems, setNewItems] = useState(PLACEHOLDER_ITEMS)

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

                        {newItems.map(item => (
                            <NewItem
                                {...item}
                                key={item.id}
                            />
                        ))}

                    </Carousel>

                </div>

            </Stack>

        </main>
    )
}