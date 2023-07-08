import { Product, Review } from '../types'

export const dataIsProduct = (data: unknown): data is Product => {
    return (data as Product)?.brand !== undefined && typeof (data as Product).brand === 'string'
}

export const dataIsReview = (data: unknown): data is Review => {
    return (data as Review)?.review !== undefined && typeof (data as Review).review === 'string'
}