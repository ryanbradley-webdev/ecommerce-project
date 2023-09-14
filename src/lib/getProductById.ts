import { supabase } from "../supabase/supabaseInit"
import { dataIsProduct } from "../util/typeCheck"

export const getProductById = async (id: string | undefined) => {
    if (!id || id === 'loading') return null

    const { data: products } = await supabase.from('products').select('*').filter('id', 'eq', id)

    if (!products) return null

    const targetProduct = products[0]

    return dataIsProduct(targetProduct) ?
        targetProduct : 
        null
}