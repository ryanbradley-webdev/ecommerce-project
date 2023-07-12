import { supabase } from "../supabase/supabaseInit";

type dbAddress = {
    line_one: string | undefined,
    line_two: string | undefined,
    line_three: string | undefined,
    city: string | undefined,
    state: string | undefined,
    zip: string | undefined
}

export const addAddress = async (address: dbAddress): Promise<number> => {
    let addressValid = true

    for (const [key, value] of Object.entries(address)) {
        if (key !== 'line_two' && key!== 'line_three' && !value) addressValid = false
    }

    if (!addressValid) {
        console.log('invalid address')
        return -1
    }

    try {
        const res = await supabase.from('addresses').insert(address).select()

        const { data } = res

        if (data) {
            const addressId = data[0].id

            return addressId
        } else {
            return -1
        }
    } catch (e) {
        console.log('error')
        return -1
    }
}