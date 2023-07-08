import { supabase } from "../supabase/supabaseInit";
import { Review } from "../types";

export const addReview = async (review: Review) => {
    try {
        await supabase.from('reviews').insert(review)

        return 'success'
    } catch (e) {
        return 'error'
    }
}