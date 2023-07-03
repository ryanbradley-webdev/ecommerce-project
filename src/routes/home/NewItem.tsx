import { Carousel } from "@mantine/carousel";
import { Button, Card, Group, Text } from "@mantine/core";


export default function NewItem({
    image,
    name,
    price
}: {
    image: string,
    name: string,
    price: string
}) {
    return (
        <Carousel.Slide>
            
            <Card 
                radius={8} 
                shadow="md" 
                withBorder 
                pb={42}
            >
                
                <Card.Section>
                    
                    <img
                        src={image}
                        alt=""
                        width='100%'
                        style={{ 
                            aspectRatio: '1 / 1', 
                            objectFit: 'cover' 
                        }}
                    />
                    
                </Card.Section>
                
                <Group
                    position="apart"
                    mt={16}
                >
                    
                    <Text
                        weight={500}
                    >
                        {name}
                    </Text>

                    <Text
                        color="var(--color-green)"
                        weight={500}
                    >
                        {'$' + price}
                    </Text>
                    
                </Group>
                    
                <Button
                    fullWidth
                    mt={16}
                >
                    Explore
                </Button>
                
            </Card>
            
        </Carousel.Slide>
    )
}