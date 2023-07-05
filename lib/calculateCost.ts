export const calculateCost = (price: string, quantity: number) => {
    const cost = Number(price) * quantity

    const costStr = cost % 1 === 0 ? cost.toString() + '.00' : truncateCost(cost.toString())

    return costStr
}

const truncateCost = (string: string) => {
    const decimalIdx = string.indexOf('.')

    const newString = string.slice(0, decimalIdx + 3)

    return newString.length < decimalIdx + 3 ? newString + '0' : newString
}