import { supabase } from "../supabase/supabaseInit"

export const addOrder = async (order: Order) => {
    try {
        const res = await supabase.from('orders').insert(order).select()

        const { data } = res

        if (data) {
            const orderId = data[0].id

            return orderId
        }
    } catch (e) {
        return -1
    }
}