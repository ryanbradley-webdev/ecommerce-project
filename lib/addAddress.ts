import { supabase } from "../supabase/supabaseInit";

type dbAddress = {
    line_one: string,
    line_two: string,
    line_three: string,
    city: string,
    state: string,
    zip: string
}

export const addAddress = async (address: dbAddress) => {
    try {
        const res = await supabase.from('addresses').insert(address).select()

        const { data } = res

        if (data) {
            const addressId = data[0].id

            return addressId
        }
    } catch (e) {
        return -1
    }
}