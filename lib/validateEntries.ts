import { AddressRefs, PaymentRefs } from '../types'

export const validateEntries = (obj: AddressRefs | PaymentRefs) => {
    let objIsValid = true

    for (const [key, value] of Object.entries(obj)) {
        if (key !== 'line_two' && key!== 'line_three' && !value) objIsValid = false
    }

    return objIsValid
}