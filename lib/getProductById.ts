import { PLACEHOLDER_ITEMS } from "../placeholderData";
import { supabase } from "../supabase/supabaseInit";

export const getProductById = async (id: string | undefined) => {
    const { data: product } = await supabase.from('products').select('*').filter('id', 'eq', id)

    return product ? product[0] : PLACEHOLDER_ITEMS[0]
}