import React, {useState} from 'react';
import styles from './form.module.scss';
import { ButtonGroup, Button, MobileStepper, useTheme } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const Form = ({questions, updateAnswers, submitAnswers}) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const answers = [
    {"name": "Not at all", "value": 0},
    {"name": "Several Days", "value": 1},
    {"name": "More than half the days", "value": 2},
    {"name": "Nearly every day", "value": 3}
  ]
  return (
  <div className={styles.formContainer}>
    <p>BDS</p>
    {questions.map((question, index) => (
      <>
      {activeStep === index && (
        <>
      <p key={question.question_id}>{question.name}</p>
        <ButtonGroup
          orientation="vertical"
          color="white"
          aria-label="vertical outlined primary button group"
        >
          {answers.map((answer) => (
            <Button onClick={() => updateAnswers({"question_id": question.question_id, "value": answer.value})} value={answer.value}>{answer.name} {answers.value}</Button>
          ))}
        </ButtonGroup>
        {activeStep === (questions.length -1) && <Button onClick={() => submitAnswers()}>Submit</Button>}
      </>
      )}
      </>
    ))}
    <MobileStepper
      variant="dots"
      steps={questions.length}
      position="static"
      activeStep={activeStep}
      className={styles.stepper}
      nextButton={
        <Button className={styles.stepperButtons} size="small" onClick={handleNext} disabled={activeStep === (questions.length - 1) }>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button className={styles.stepperButtons} size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  </div>
)}

export default Form;