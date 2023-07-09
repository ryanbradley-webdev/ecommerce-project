import { CheckoutAction, CheckoutData } from "../../../types"

export const initialCheckoutData: CheckoutData = {
    shippingAddress: {
        firstName: '',
        lastName: '',
        addressLineOne: '',
        addressLineTwo: '',
        addressLineThree: '',
        city: '',
        state: '',
        zip: null
    },
    billingAddress: {
        firstName: '',
        lastName: '',
        addressLineOne: '',
        addressLineTwo: '',
        addressLineThree: '',
        city: '',
        state: '',
        zip: null
    },
    payment: {
        cardNumber: null,
        expiration: '',
        cvv: null
    }
}

export const reducer = (state: CheckoutData, action: CheckoutAction) => {
    switch (action.type) {
        default:
            return state
    }
}