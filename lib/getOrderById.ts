import { supabase } from '../supabase/supabaseInit'

export const getOrderById = async (id: string | null) => {
    if (!id) return

    try {
        const { data } = await supabase.from('orders').select('*').filter('id', 'eq', id)

        if (!data) return null

        return data[0]
    } catch (e) {
        return null
    }
} 