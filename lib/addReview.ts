import { supabase } from "../supabase/supabaseInit";
import { ReviewSubmission } from "../types";

export const addReview = async (review: ReviewSubmission) => {
    try {
        await supabase.from('reviews').insert(review)

        return 'success'
    } catch (e) {
        return 'error'
    }
}