import { supabase } from "../supabase/supabaseInit";
import { Product } from "../types";
import { dataIsProduct } from "../util/typeCheck";

export const getProducts = async () => {
    const { data: products } = await supabase.from('products').select('*').order('inserted_at', { ascending: false })

    if (!products) return null

    const productsArr: Product[] = products.filter(product => dataIsProduct(product))

    return productsArr
}