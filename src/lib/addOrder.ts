import { User } from "@supabase/supabase-js"
import { supabase } from "../supabase/supabaseInit"

export const addOrder = async (order: Order, user: User | null, userData: UserData | null) => {
    try {
        const res = await supabase.from('orders').insert(order).select().single()

        const { data } = res

        if (data) {
            const orderId = data.id

            if (user && userData) {
                supabase
                    .from('user-data')
                    .update({ orders: [...userData.orders, orderId] })
                    .eq('user_id', userData.user_id)
            }

            return orderId
        }
    } catch (e) {
        return -1
    }
}