import { dataIsProduct } from '../util/typeCheck'
import { supabase } from "../supabase/supabaseInit";

export const getProductById = async (id: string | undefined) => {
    const { data: products } = await supabase.from('products').select('*').filter('id', 'eq', id)

    if (!products) return null

    const targetProduct = products[0]

    return dataIsProduct(targetProduct) ?
        targetProduct : 
        null
}