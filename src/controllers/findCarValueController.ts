import { Request, Response } from 'express'
import * as carValueService from '../services/findCarValueService'

export const findCarValue = (req: Request, res: Response) => {
  const model = req.body.model
  const year = req.body.year

  const carValueObj = {
    carValue: carValueService.findCarValue(model, year),
  }

  res.send(carValueObj)
}
