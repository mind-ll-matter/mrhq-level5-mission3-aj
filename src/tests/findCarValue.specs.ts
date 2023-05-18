import { findCarValue } from '../services/findCarValueService';
import { findCarValueTestCase } from '../types/findCarValueTestCase';

const testCases: findCarValueTestCase[] = [
    {
        description:`General Scenario - ("Civic", 2020) should return 6600`,
        model: "Civic",
        year: 2020,
        expected: 6600
    },
    {
        description: `Input Model is only a number (of type string)`,
        model:"911",
        year: 2020,
        expected: 2020
    },
    {
        description:`Input Year is negative`,
        model: "Task-Force",
        year: -987,
        expected: "there is an error"
    },
    {
        description:`Input Model is only a symbol`,
        model:"$",
        year: 2020,
        expected: 2020
    },
    {
        description:`Input Year is of type string`,
        model: "Civic",
        year: "twenty twenty",
        expected: "there is an error"
    },
    // {
    //     description:,
    //     model:,
    //     year: ,
    //     expected:
    // },
]

describe('findCarValue', ()=>{
    testCases.forEach((t)=>{
        test(t.description, () => {
            // Arrange
                const model = t.model
                const year = t.year
                const expected = t.expected
            // Act
                const actual = findCarValue(model, year)
            // Assert
                expect(actual).toBe(expected)
        })
    })
})