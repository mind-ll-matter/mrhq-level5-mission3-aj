import { findModelValue } from './functions/findModelValue'

export const findCarValue = (model: string, year: number): number | string => {
  if (year < 1886) {
    return 'there is an error'
  } else if (typeof year == 'string') {
    return 'there is an error'
  }

  if (model.trim().length == 0) {
    return 'there is an error'
  }

  const modelValue: number = findModelValue(model)
  const carValue: number = modelValue + year

  return carValue
}
