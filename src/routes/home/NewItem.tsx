import { Carousel } from "@mantine/carousel";
import { Card, Group, Text } from "@mantine/core";
import CartBtn from '../../../components/CartBtn'
import ProductBtn from '../../../components/ProductBtn'
import { Product } from "../../../types";
import ImgSkeleton from "../../../components/skeletons/ImgSkeleton";
import TitleSkeleton from "../../../components/skeletons/TitleSkeleton";
import SubtitleSkeleton from "../../../components/skeletons/SubtitleSkeleton";

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
                pb={52}
            >
                
                <Card.Section>
                    
                    {product.image === 'loading' ? (
                            <ImgSkeleton
                                width="100%"
                                aspectRatio="16 / 9"
                                mx="0"
                            />
                        ): (
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
                                height="20px"
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