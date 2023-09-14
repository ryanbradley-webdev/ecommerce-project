import { Card, Group, Rating, Text } from "@mantine/core";
import CartBtn from "../../components/CartBtn";
import ProductBtn from "../../components/ProductBtn";
import ImgSkeleton from "../../components/skeletons/ImgSkeleton";
import SubtitleSkeleton from "../../components/skeletons/SubtitleSkeleton";
import TextSkeleton from "../../components/skeletons/TextSkeleton";
import TitleSkeleton from "../../components/skeletons/TitleSkeleton";

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
            
            {product.image === 'loading' ? (
                    <ImgSkeleton
                        aspectRatio="16 / 9"
                        width='100%'
                        mx='0'
                    />
                ) : (
                    <img
                        src={product.image}
                        alt=""
                        width='100%'
                        style={{ 
                            aspectRatio: '16 / 9', 
                            objectFit: 'cover' 
                        }}
                    />
                )
            }
            
        </Card.Section>
        
        <Group
            position="apart"
            mt={16}
        >
            
            {product.name === 'loading' ? (
                    <TitleSkeleton
                        height='20px'
                    />
                ) : (
                    <Text
                        weight={500}
                        size={18}
                    >
                        {product.name}
                    </Text>
                )
            }

            {product.price === 'loading' ? (
                    <SubtitleSkeleton />
                ) : (
                    <Text
                        color="var(--color-green)"
                        weight={500}
                    >
                        {'$' + product.price}
                    </Text>
                )
            }
            
        </Group>

        <Group>
            
            {product.brand === 'loading' ? (
                    <SubtitleSkeleton />
                ) : (
                    <Text
                        size={14}
                    >
                        {product.brand}
                    </Text>
                )
            }

            <Rating
                fractions={10}
                value={product.rating || 0}
                readOnly
            />

        </Group>

        <Group
            mt={8}
        >
            
            {product.description === 'loading' ? (
                    <TextSkeleton
                        multiple={1}
                    />
                ) : (
                    <Text
                        color="var(--color-text-grey)"
                        truncate
                    >
                        {product.description}
                    </Text>
                )
            }

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
