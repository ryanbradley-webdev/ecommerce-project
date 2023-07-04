import { Grid, MultiSelect } from "@mantine/core";
import { PLACEHOLDER_ITEMS } from "../../../placeholderData";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
    const brands = new Set(PLACEHOLDER_ITEMS.map(item => item.brand))

    const [filteredProducts, setFilteredProducts] = useState(PLACEHOLDER_ITEMS)
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])

    const brandRef = useRef<HTMLInputElement>(null)

    const handleBrandChange = (e: string[]) => {
        setSelectedBrands(e)
    }

    useEffect(() => {
        if (selectedBrands.length === 0) {
            setFilteredProducts(PLACEHOLDER_ITEMS)
        } else {
            setFilteredProducts(PLACEHOLDER_ITEMS.filter(item => selectedBrands.includes(item.brand)))
        }
    }, [selectedBrands])
    
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
                columns={1}
            >

                {filteredProducts.map(item => (
                    <Grid.Col
                        key={item.id}
                        span={1}
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