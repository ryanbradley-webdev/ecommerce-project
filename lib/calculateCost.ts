export const calculateCost = (price: string, quantity: number) => {
    const [dollarsStr, centsStr] = price.split('.')

    const dollars = sumDollars(dollarsStr, centsStr, quantity)

    const cents = sumCents(centsStr, quantity)

    return costToString(dollars, cents)
}

export const sumDollars = (dollarsStr: string | number, centsStr: string | number, quantity?: number) => {
    const multiplier = quantity || 1

    const dollars = Number(dollarsStr) * multiplier

    const dollarsFromCents = Math.floor((Number(centsStr) * multiplier) / 100)

    return dollars + dollarsFromCents
}

export const sumCents = (centsStr: string | number, quantity?: number) => {
    const multiplier = quantity || 1

    const cents = Number(centsStr) * multiplier

    return cents % 100
}

export const costToString = (dollars: number, cents: number) => {
    const costStr = dollars.toString().concat('.')

    return cents < 10 ? costStr.concat('0', cents.toString()) : costStr.concat(cents.toString())
}