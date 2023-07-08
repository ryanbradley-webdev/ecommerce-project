import { supabase } from "../supabase/supabaseInit";

export const getProducts = async () => {
    const { data: products } = await supabase.from('products').select('*').order('inserted_at', { ascending: false })

    return products
}