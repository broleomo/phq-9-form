const express = require('express')
const router = express.Router()

const answersService = require('../services/answers.service')

router.get('/', answersService.getAnswers)

module.exports = router