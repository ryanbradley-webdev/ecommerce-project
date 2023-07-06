import { Carousel } from "@mantine/carousel";
import { Card, Group, Text } from "@mantine/core";
import CartBtn from '../../../components/CartBtn'
import ProductBtn from '../../../components/ProductBtn'
import { Product } from "../../../types";

export default function NewItem({
    product
}: {
    product: Product
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
                        src={product.image}
                        alt=""
                        width='100%'
                        style={{ 
                            aspectRatio: '16 / 9', 
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
                        size={18}
                    >
                        {product.name}
                    </Text>

                    <Text
                        color="var(--color-green)"
                        weight={500}
                    >
                        {'$' + product.price}
                    </Text>
                    
                </Group>

                <Group>
                    <Text
                        size={14}
                    >
                        {product.brand}
                    </Text>
                </Group>

                <Card.Section
                    px={16}
                    display='grid'
                    style={{
                        rowGap: '16px'
                    }}
                >
                    
                    <ProductBtn
                        id={product.id}
                    />
                        
                    <CartBtn
                        product={product}
                    />

                </Card.Section>
                
            </Card>
            
        </Carousel.Slide>
    )
}