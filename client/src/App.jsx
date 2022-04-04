import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Form from './components/Form/Form';
import ResultsCard from './components/ResultsCard/ResultsCard';
import styles from './app.module.scss';
import questions from './components/Form/form-questions';

const App = () => {
  const [formShow, setForm] = useState(false);
  const [showResults, setResults] = useState(false);
  const [answers, setAnswers] = useState([{
    "value": 0,
    "question_id": "question_a"
  },
  {
    "value": 0,
    "question_id": "question_b"
  },
  {
    "value": 0,
    "question_id": "question_c"
  },
  {
    "value": 0,
    "question_id": "question_d"
  },
  {
    "value": 0,
    "question_id": "question_e"
  },
  {
    "value": 0,
    "question_id": "question_f"
  },
  {
    "value": 0,
    "question_id": "question_g"
  },
  {
    "value": 0,
    "question_id": "question_h"
  }
]);

const updateAnswers = (data) => {
  let updateState = [...answers];
  const updateQuestion = answers.findIndex((obj => obj.question_id === data.question_id));
  updateState[updateQuestion].value = data.value
  setAnswers(updateState)
}

const submitAnswers = () => {
  axios.post('/answers', answers)
  setForm(false);
  setResults(true)
}

  return (
    <div className={styles.formContainer}>
        {!formShow && !showResults &&
          <> 
          <h1 className={styles.header}>Diagnostic Screener</h1>
          <h2 className={styles.assessmentHeading}>During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?</h2>
          <Button
            color="primary"
            size="large"
            className={styles.startButton}
            variant="outlined"
            onClick={() => setForm(true)}
          >
          Begin PHQ-9 Form
          </Button>
          </>
        }
        {formShow &&
          <Form 
            submitAnswers={submitAnswers} 
            updateAnswers={updateAnswers} 
            questions={questions}
            answers={answers}
          />
        }
        {showResults && 
        <ResultsCard total={20} answers={answers}/>
        }
      </div>
  )
}

export default App;