import React, {useState} from 'react';
import styles from './form.module.scss';
import { ButtonGroup, Button } from '@material-ui/core';


const FormButtonGroup = ({questionId, answers, updateAnswers, handleNext}) => {
  const [selected, setSelected] = useState(null);
  const chooseAnswer = (questionId, value) => {
    updateAnswers({"question_id": questionId, "value": value });
    setSelected(value);
  }
  return(
  <ButtonGroup
    orientation="vertical"
    color="primary"
    aria-label="vertical outlined primary button group"
  >
    {answers.map((answer, index) => (
      <Button 
        key={index}
        className={index === selected ? styles.selected : ''} 
        onClick={() => chooseAnswer(questionId, answer.value)}
        value={answer.value}
      >
        <div className={styles.answerOption}>
          <p>{answer.title}</p>
          <p>{answer.value}</p>
        </div>
      </Button>
    ))}
  </ButtonGroup>
)};

export default FormButtonGroup;