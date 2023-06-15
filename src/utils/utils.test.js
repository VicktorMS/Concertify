import {test, expect} from 'vitest'
import {arrayToString} from "/src/utils/utils";

test('Transforma array em string', () => {
    expect(arrayToString([1,2,3], 3)).toBe('1,2,3');   
})