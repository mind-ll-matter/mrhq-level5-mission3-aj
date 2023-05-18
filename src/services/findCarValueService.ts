import { findModelValue } from "./functions/findModelValue";

export const findCarValue = (model: string | number, year: number): number => {

    const modelValue: number = findModelValue(model);
    const carValue:number = modelValue + year;

    return carValue;
};