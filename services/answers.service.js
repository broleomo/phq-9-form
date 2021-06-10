const express = require('express')

let answers = [
  {'value': 0, 'question_id': 'question_a'},
  {'value': 0, 'question_id': 'question_b'},
  {'value': 0, 'question_id': 'question_c'},
  {'value': 0, 'question_id': 'question_d'},
  {'value': 0, 'question_id': 'question_e'},
  {'value': 0, 'question_id': 'question_f'},
  {'value': 0, 'question_id': 'question_g'},
  {'value': 0, 'question_id': 'question_h'}
]

module.exports = {
  
  getAnswers: (req, res) => {
    return res.status(200).json({ answers: answers })
  },
  postAnswers: (req, res) => {
      console.log(req.body)
      answers = req.body
      return res.status(200).json({answers: answers})
  }
}