// Original test cases were written here: https://docs.google.com/spreadsheets/d/1uONxSOujmz6-ncG_vakXS6RycK_8rJlN4cKs0yx0HPQ/edit#gid=0

import { findCarValue } from '../services/findCarValueService'
import { findCarValueTestCase } from '../types/findCarValueTestCase'

const testCases: findCarValueTestCase[] = [
  {
    description: `General Scenario - ("Civic", 2020) should return 6600`,
    model: 'Civic',
    year: 2020,
    expected: 6620,
  },
  {
    description: `Input Model is only a number (of type string) should return the value of the year`,
    model: '911',
    year: 2020,
    expected: 2020,
  },
  {
    description: `Input Year is negative should return an error`,
    model: 'Civic',
    year: -987,
    expected: 'there is an error',
  },
  {
    description: `Input Model is only a symbol should be okay`,
    model: '$',
    year: 2020,
    expected: 2020,
  },
  {
    description: 'Input Model is only one letter',
    model: 'X',
    year: 2004,
    expected: 4404,
  },
  {
    description: 'Input Model has no capital letters',
    model: 'atenza',
    year: 2018,
    expected: 8718,
  },
  {
    description: 'Input Model is all capital letters',
    model: 'ATENZA',
    year: 2018,
    expected: 8718,
  },
  {
    description: 'Input Model has a symbol',
    model: 'Task-Force',
    year: 2000,
    expected: 11800,
  },
  {
    description: 'Input Model has a space',
    model: 'Model X',
    year: 2020,
    expected: 9320,
  },
  {
    description: 'Input Model is only a space',
    model: ' ',
    year: 2020,
    expected: 'there is an error',
  },
  // {
  //     description:,
  //     model:,
  //     year: ,
  //     expected:
  // },
]

describe('findCarValue', () => {
  testCases.forEach((t) => {
    test(t.description, () => {
      // Arrange
      const model: string = t.model
      const year: number = t.year
      const expected: string | number = t.expected
      // Act
      const actual: string | number = findCarValue(model, year)
      // Assert
      expect(actual).toBe(expected)
    })
  })
})
