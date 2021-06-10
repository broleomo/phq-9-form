import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Form from './components/Form/form';
import styles from './app.module.scss';

const App = () => {
  const [formShow, setForm] = useState(false);
  const [showTable, setTable] = useState(false);
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
  }]);

const questions = [
  {"name": "Little interest or pleasure in doing things?", "question_id": "question_a"}, 
  {"name": "Feeling down, depressed, or hopeless?", "question_id": "question_b"}, 
  {"name": "Trouble falling or staying asleep, or sleeping too much?", "question_id": "question_c"}, 
  {"name": "Feeling tired or having little energy?", "question_id": "question_d"},
  {"name": "Poor appetite or overeating?", "question_id": "question_e"},
  {"name": "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?", "question_id": "question_f"},
  {"name": "Trouble concentrating on things, such as reading the newspaper or watching television?", "question_id": "question_g"},
  {"name": "Moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?", "question_id": "question_h"},
  {"name": "Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?", "question_id": "question_i"}
]

const updateAnswers = (data) => {
  let updateState = [...answers];
  const updateQuestion = answers.findIndex((obj => obj.question_id === data.question_id));
  updateState[updateQuestion].value = data.value
  setAnswers(updateState)
}

const submitAnswers = () => {
  axios.post('/answers', answers)
  setForm(false);
}

  return (
    <div className={styles.formContainer}>
        {!formShow && 
        <Button
          color="primary"
          size="large"
          className={styles.startButton}
          variant="outlined"
          onClick={() => setForm(!formShow)}
        >
          Begin PHQ-9 Form
          </Button>
        }
        {formShow &&
          <Form 
            submitAnswers={submitAnswers} 
            updateAnswers={updateAnswers} 
            questions={questions}
          />
        }
      </div>
  )
}

export default App;