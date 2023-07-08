import { dataIsReview } from '../util/typeCheck'
import { supabase } from "../supabase/supabaseInit";
import { Review } from '../types';

export const getReviewsById = async (id: string | undefined) => {
    if (!id || id === 'loading') return []

    const { data: reviews } = await supabase.from('reviews').select('*').filter('productId', 'eq', id).order('created_at', { ascending: false })

    if (!reviews) return []

    const reviewsArr: Review[] = reviews.filter(review => dataIsReview(review))

    return reviewsArr
}