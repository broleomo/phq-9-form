const express = require('express')
const router = express.Router()

const answersService = require('../services/answers.service')

router.get('/', answersService.getAnswers)
router.post('/', answersService.postAnswers)

module.exports = router