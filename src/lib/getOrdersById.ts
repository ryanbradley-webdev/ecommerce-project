import { supabase } from "../supabase/supabaseInit"
import { Order } from "../types"
import { dataIsOrder } from "../util/typeCheck"

export const getOrdersById = async (id?: string) => {
    if (!id) return []

    try {
        const { data } = await supabase.from('orders').select().filter('user_id', 'eq', id)

        if (!data || data.length === 0) return []

        const orders: Order[] = []

        data.forEach(doc => {
            const order = doc

            if (dataIsOrder(order)) {
                orders.push(order)
            }
        })

        return orders
    } catch (e) {
        return []
    }
}