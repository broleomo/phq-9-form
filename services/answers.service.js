const express = require('express')
const dbo = require('../db/conn');

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
  getAnswers: async (req, res) => {
    let dbConnect = dbo.getDb();
    await dbConnect
    .collection("answers")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        res.json(result);
      }
    });
    return res.status(200).json({ answers: answers })
  },
  postAnswers: async (req, res) => {
   console.log(req.body);
    const answerDocument = {answers: req.body};
  
    let dbConnect = dbo.getDb();
    await dbConnect
    .collection("answers")
    .insertOne(answerDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting matches!");
      } else {
        console.log(`Added a new answers with id ${result.insertedId}`);
      }
    });

      answers = req.body
      return res.status(200).json({answers: answers})
  }
}