import { describe, it, expect } from "@jest/globals"

import validate from '../helpers/inputValidator'

describe('input validator', () => {

    describe('valid inputs', () => {

        it('should return a valid response when given an int', () => {
            const [isValid, msg] = validate('5')
            expect(isValid).toBe(true)
            expect(msg).toBe('')
        })

        it('should return a valid response when given a float', () => {
            const [isValid, msg] = validate('3.4')
            expect(isValid).toBe(true)
            expect(msg).toBe('')
        })
    })

    describe('invalid inputs', () => {
        it('should return an invalid response with message given an alpha string', () => {
            const [isValid, msg] = validate('hello')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be numeric')
        })

        it('should return an invalid response with message given a mixed string', () => {
            const [isValid, msg] = validate('46hello')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be numeric')
        })

        it('should return an invalid response with message given a bad decimal', () => {
            const [isValid, msg] = validate('5.5.5')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be numeric')
        })

        it('should return an invalid response with message given 0', () => {
            const [isValid, msg] = validate('0')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be between 1 and 100')
        })

        it('should return an invalid response with message given a negative number', () => {
            const [isValid, msg] = validate('-10')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be between 1 and 100')
        })

        it('should return an invalid response with message given a number above 100', () => {
            const [isValid, msg] = validate('101')
            expect(isValid).toBe(false)
            expect(msg).toBe('Radius must be between 1 and 100')
        })
    }
    )
})
