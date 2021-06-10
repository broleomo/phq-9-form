const express = require('express')

module.exports = {
    getAnswers: (req, res) => {
        const answers = [
            {'answer1': 0},
            {'answer2': 0},
            {'answer3': 0},
            {'answer4': 0},
            {'answer5': 0}
        ]
        return res.status(200).json({ answers: answers })
    }
}