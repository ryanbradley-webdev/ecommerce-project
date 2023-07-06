import { Card, Group, Text } from "@mantine/core";
import CartBtn from "../../../components/CartBtn";
import { Product } from "../../../types";
import ProductBtn from "../../../components/ProductBtn";

export default function ProductCard({ 
    product
}: {
    product: Product
}) {
  return (
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

        <Group
            mt={8}
        >
            <Text
                color="var(--color-text-grey)"
                truncate
            >
                {product.description}
            </Text>
        </Group>
        
        <Card.Section
            display='flex'
            px={16}
            mt={16}
            style={{
                gap: '12px'
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
  )
}
