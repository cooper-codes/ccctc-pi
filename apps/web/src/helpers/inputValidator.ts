// Ints or decimals (e.g 7 or 7.52)
// TODO: Account for European nomenclature ("3,56")
const numRegex = /(\d+(?:\.\d+)?)/g
const alphaRegex = /([^0-9\.]+)/g

export default function isValid(input: string): [boolean, string] {
    // Don't return a string val as we don't want to display an error message
    if (input === '')
        return [false, ""]

    const intVal = parseFloat(input)

    if (intVal < 1 || intVal > 100)
        return [false, "Radius must be between 1 and 100"]

    const numMatch = input.match(numRegex)

    // Account for scenarios like "3.5.4" or "3.5asdf"
    if (((numMatch?.length || 0) > 0 && numMatch?.[0].length !== input.length) || input.match(alphaRegex)?.length)
        return [false, "Radius must be numeric"]

    return [true, '']

}