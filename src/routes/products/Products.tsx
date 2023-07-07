import { Grid, MultiSelect } from "@mantine/core";
import { PLACEHOLDER_ITEMS } from "../../../placeholderData";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../lib/getProducts";

export default function Products() {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        placeholderData: PLACEHOLDER_ITEMS
    })
    
    const brands = data ? new Set(data.map(item => item.brand)) : []

    const [filteredProducts, setFilteredProducts] = useState(data)
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])

    const brandRef = useRef<HTMLInputElement>(null)

    const handleBrandChange = (e: string[]) => {
        setSelectedBrands(e)
    }

    useEffect(() => {
        if (selectedBrands.length === 0) {
            setFilteredProducts(data)
        } else {
            data && setFilteredProducts(data.filter(item => selectedBrands.includes(item.brand)))
        }
    }, [selectedBrands, data])
    
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