import { supabase } from "../supabase/supabaseInit";

export const getProducts = async () => {
    const { data: products } = await supabase.from('products').select('*')

    return products
}