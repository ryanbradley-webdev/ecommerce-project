import { supabase } from "../supabase/supabaseInit";

export const getReviewCountById = async (id: string | undefined) => {
    if (!id) return 0

    const { count } = await supabase.from('reviews').select('*', { count: 'exact', head: true }).filter('productId', 'eq', id)

    return count
}