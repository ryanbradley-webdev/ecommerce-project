import { supabase } from "../supabase/supabaseInit";
import { Order } from "../types";

export const addOrder = async (order: Order) => {
    try {
        const res = await supabase.from('orders').insert(order).select()

        console.log(res)

        const { data } = res

        if (data) {
            const orderId = data[0].id

            return orderId
        }
    } catch (e) {
        return -1
    }
}