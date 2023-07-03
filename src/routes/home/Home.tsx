import { Carousel } from "@mantine/carousel";
import { Stack, MediaQuery } from "@mantine/core";
import NewItem from "./NewItem";

import { PLACEHOLDER_ITEMS } from '../../../placeholderData.ts'

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

                        {PLACEHOLDER_ITEMS.map(item => (
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