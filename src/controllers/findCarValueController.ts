import { Request, Response } from 'express'
import * as carValueService from '../services/findCarValueService'

export const findCarValue = (req: Request, res: Response): void => {
  const reqModel: any = req.query.model
  const reqYear: any = req.query.year

  if (
    !reqModel ||
    !reqYear ||
    // typeof reqYear !== 'number' ||
    typeof reqModel !== 'string'
  ) {
    res.status(400).json({ error: 'there is an error' })
  }

  const model: string = req.query.model as string
  const year: string = req.query.year as string
  const carValue = carValueService.findCarValue(model, year)

  if (typeof carValue == 'string') {
    res.status(400).json({ error: 'there is an error' })
  } else {
    res.status(200).json({ car_value: `${carValue}` })
  }
}
