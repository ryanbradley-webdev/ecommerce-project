import { supabase } from '../supabase/supabaseInit'
import { dataIsOrder } from '../util/typeCheck'

export const getOrderById = async (id: string | null) => {
    if (!id) return

    try {
        const { data } = await supabase.from('orders').select('*').filter('id', 'eq', id)

        if (!data || data.length === 0) return null

        const order = data[0]

        return dataIsOrder(order) ?
            order :
            null
    } catch (e) {
        return null
    }
} 