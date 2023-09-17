export const capitalize = (str: string) => {
    const letters = str.split('')

    letters[0] = letters[0].toUpperCase()

    return letters.join('')
}