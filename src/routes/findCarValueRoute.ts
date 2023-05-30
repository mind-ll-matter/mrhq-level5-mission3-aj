const express = require('express')
const { findCarValue } = require('../controllers/findCarValueController')

const router = express.Router()

router.get('/find-car-value', findCarValue)

export default router
