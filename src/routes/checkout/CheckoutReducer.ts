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
        zip: ''
    },
    billingAddress: {
        firstName: '',
        lastName: '',
        addressLineOne: '',
        addressLineTwo: '',
        addressLineThree: '',
        city: '',
        state: '',
        zip: ''
    },
    payment: {
        cardNumber: '',
        expiration: '',
        cvv: ''
    }
}

export const reducer = (state: CheckoutData, action: CheckoutAction) => {
    switch (action.type) {
        case 'shipping/changeFirstName':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    firstName: action.payload
                }
            }
        case 'shipping/changeLastName':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    lastName: action.payload
                }
            }

        case 'shipping/changeAddressLineOne':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    addressLineOne: action.payload
                }
            }

        case 'shipping/changeAddressLineTwo':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    addressLineTwo: action.payload
                }
            }

        case 'shipping/changeAddressLineThree':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    addressLineThree: action.payload
                }
            }

        case 'shipping/changeCity':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    city: action.payload
                }
            }

        case 'shipping/changeState':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    state: action.payload
                }
            }

        case 'shipping/changeZip':
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    zip: action.payload
                }
            }

        case 'billing/changeFirstName':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    firstName: action.payload
                }
            }
        case 'billing/changeLastName':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    lastName: action.payload
                }
            }
            
        case 'billing/changeAddressLineOne':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    addressLineOne: action.payload
                }
            }

        case 'billing/changeAddressLineTwo':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    addressLineTwo: action.payload
                }
            }

        case 'billing/changeAddressLineThree':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    addressLineThree: action.payload
                }
            }
            
        case 'billing/changeCity':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    city: action.payload
                }
            }

        case 'billing/changeState':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    state: action.payload
                }
            }

        case 'billing/changeZip':
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    zip: action.payload
                }
            }

        case 'changeCardNumber':
            return {
                ...state,
                payment: {
                    ...state.payment,
                    cardNumber: action.payload
                }
            }

        case 'changeExpiration':
            return {
                ...state,
                payment: {
                    ...state.payment,
                    expiration: action.payload
                }
            }

        case 'changeCvv':
            return {
                ...state,
                payment: {
                    ...state.payment,
                    cvv: action.payload
                }
            }

        case 'copyShipping':
            return {
                ...state,
                billingAddress: state.shippingAddress
            }

        case 'resetBilling':
            return {
                ...state,
                billingAddress: initialCheckoutData.billingAddress
            }

        default:
            return state
    }
}