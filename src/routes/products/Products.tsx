import { Grid, MultiSelect } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../lib/getProducts";
import { loadingProductArr } from "./loadingProduct";

export default function Products() {
    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        placeholderData: loadingProductArr
    })
    
    const brands = products ? new Set(products.map(item => item.brand)) : []

    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])

    const brandRef = useRef<HTMLInputElement>(null)

    const handleBrandChange = (e: string[]) => {
        setSelectedBrands(e)
    }

    useEffect(() => {
        if (selectedBrands.length === 0) {
            setFilteredProducts(products)
        } else {
            products && setFilteredProducts(products.filter(item => selectedBrands.includes(item.brand)))
        }
    }, [selectedBrands, products])
    
    return (
        <main>
            
            <MultiSelect
                data={[...brands].map(brand => brand)}
                label='Filter by Brand'
                ref={brandRef}
                clearable
                onChange={handleBrandChange}
                mx={16}
            />

            <Grid
                py={48}
                px={15}
            >

                {filteredProducts && filteredProducts.map(item => (
                    <Grid.Col
                        key={item.id}
                        sm={6}
                        md={4}
                        lg={3}
                    >
                        <ProductCard
                            product={item}
                        />
                    </Grid.Col>
                ))}

            </Grid>

        </main>
    )
}