import {Request, Response} from 'express';
import * as carValueService from '../services/findCarValueService';

export const findCarValue = (req: Request, res: Response) => {
    const carValue = carValueService.findCarValue;
    res.send(carValue);
}