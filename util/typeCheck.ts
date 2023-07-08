import { Product } from '../types'

export const dataIsProduct = (data: unknown): data is Product => {
    return (data as Product)?.brand !== undefined && typeof (data as Product).brand === 'string'
}