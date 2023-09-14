import { supabase } from "../supabase/supabaseInit"

export const addReview = async (review: ReviewSubmission, reviewCount: number | undefined) => {
    try {
        await supabase.from('reviews').insert(review)

        const { rating, productId } = review

        const { data } = (await supabase.from('products').select('rating').filter('id', 'eq', productId))

        if (!data) return rating

        const productRating = data[0].rating

        const numReviews = reviewCount || 0

        const newRating = (productRating * numReviews + rating) / (numReviews + 1)

        await supabase.from('products').update({ rating: newRating }).eq('id', productId)

        return newRating
    } catch (e) {
        return 'error'
    }
}