const regex = /\D/

export default function isValid(input: string): [boolean, string] {
    // Don't return a string val as we don't want to display an error message
    if (input === '') return [false, ""]

    const intVal = parseInt(input)
    if (intVal < 1 || intVal > 100) return [false, "Radius must be between 1 and 100"]

    if (input.match(regex)) return [false, "Radius must be numeric"]

    return [true, '']

}