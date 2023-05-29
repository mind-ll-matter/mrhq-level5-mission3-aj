import { Request, Response } from 'express'
import * as carValueService from '../services/findCarValueService'

export const findCarValue = (req: Request, res: Response) => {
  const reqModel: any = req.body.model
  const reqYear: any = req.body.year

  if (
    !reqModel ||
    !reqYear ||
    typeof reqYear !== 'number' ||
    typeof reqModel !== 'string'
  ) {
    return res.status(400).json({ error: 'there is an error' })
  }

  const model: string = req.body.model
  const year: number = req.body.year
  const carValue = carValueService.findCarValue(model, year)

  if (typeof carValue == 'string') {
    return res.status(400).json({ error: 'there is an error' })
  } else {
    return res.status(200).json({ car_value: `${carValue}` })
  }
}
