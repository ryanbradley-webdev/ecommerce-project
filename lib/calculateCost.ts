export const calculateCost = (price: string, quantity: number) => {
    const [dollarsStr, centsStr] = price.split('.')

    const dollars = sumDollars(dollarsStr, centsStr, quantity)

    const cents = sumCents(centsStr, quantity)

    return costToString(dollars, cents)
}

export const sumDollars = (dollarsStr: string, centsStr: string, quantity: number) => {
    const dollars = Number(dollarsStr) * quantity

    const dollarsFromCents = Math.floor((Number(centsStr) * quantity) / 100)

    return dollars + dollarsFromCents
}

export const sumCents = (centsStr: string, quantity: number) => {
    const cents = Number(centsStr) * quantity

    return cents % 100
}

export const costToString = (dollars: number, cents: number) => {
    const costStr = dollars.toString().concat('.')

    return cents < 10 ? costStr.concat('0', cents.toString()) : costStr.concat(cents.toString())
}