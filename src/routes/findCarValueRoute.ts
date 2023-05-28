const express = require('express')
const { findCarValue } = require('../controllers/findCarValueController')

const router = express.Router()

router.get('/api/findCarValue', findCarValue)

export default router
