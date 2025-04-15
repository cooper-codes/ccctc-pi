import { describe, it, expect } from "@jest/globals";
import { getAreaOfCircle } from "../logic/areaOfCircle";

describe('area calculator', () => {
    it('should equal expected amount', () => {
        const area = getAreaOfCircle(3.14)
        expect(area.toFixed(3)).toEqual("19.729")
    })
})