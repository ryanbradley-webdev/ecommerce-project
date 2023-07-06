import { Product, Review } from "./types"

export const PLACEHOLDER_ITEMS: Product[] = [
    {
        name: 'Daddios',
        brand: 'New Balance',
        description: 'This is latest, hottest, most stylish release from New Balance guaranteed to step up your dad game. Whether you\'re mowing the lawn, grilling some burgers, or just passing out watching football, these shoes will take you where you need to go.',
        price: '20.99',
        image: '/pic1.jpg',
        rating: 4.3,
        id: '1'
    },
    {
        name: 'Sportsball',
        brand: 'Nike',
        description: 'Do you play basketball? How about baseball? Or are you more of a tennis fan? No matter what species of sportsball you play, these shoes provide the ultimate traction and performance for your chosen game. As is always the case with Nike shoes, you can expect only the highest quality of materials and an incredible attention to detail.',
        price: '69.99',
        image: '/pic2.jpg',
        rating: 3,
        id: '2'
    },
    {
        name: 'Puma-Jordans',
        brand: 'Addidas',
        description: 'Fly higher, run faster, and conquer every challenge with this newest release from world-renowned footware distributor Addidas. There isn\'t anything these sneakers can\'t handle. Go ahead, climb that mountain. These shoes will make it a breeze.',
        price: '4.00',
        image: '/pic3.jpg',
        rating: 3.9,
        id: '3'
    }
]


export const PLACEHOLDER_REVIEWS: Review[] = [
    {
        id: '123',
        productId: '1',
        date: '7/06/2023',
        name: 'John',
        review: 'These shoes SUCK.',
        rating: 2.4
    },
    {
        id: '124',
        productId: '1',
        date: '7/06/2023',
        name: 'Pete',
        review: 'Love them.',
        rating: 4.6
    },
    {
        id: '125',
        productId: '1',
        date: '7/06/2023',
        name: 'Mary',
        review: 'Decent, but overpriced.',
        rating: 3.4
    },
    {
        id: '126',
        productId: '2',
        date: '7/06/2023',
        name: 'Jane',
        review: 'Best shoes I\'ve ever owned!!',
        rating: 4.8
    },
    {
        id: '127',
        productId: '2',
        date: '7/06/2023',
        name: 'Craig',
        review: 'Worst shoes ever made. Do not even THINK about picking up a pair.',
        rating: 1.2
    },
    {
        id: '128',
        productId: '2',
        date: '7/06/2023',
        name: 'Guy',
        review: 'Great daily wear.',
        rating: 4.0
    },
    {
        id: '129',
        productId: '3',
        date: '7/06/2023',
        name: 'Lucy',
        review: 'I will never buy another shoe again.',
        rating: 4.9
    },
    {
        id: '130',
        productId: '3',
        date: '7/06/2023',
        name: 'Frank',
        review: 'Great quality, lacking on comfort.',
        rating: 3.7
    },
    {
        id: '131',
        productId: '3',
        date: '7/06/2023',
        name: 'Don',
        review: 'They aight.',
        rating: 3.6
    },
]