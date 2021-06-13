import React, {useState} from 'react';
import styles from './form.module.scss';
import { Button, MobileStepper, useTheme } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import FormButtonGroup from './FormButtonGroup';
import answers from './form-answers';

const Form = ({questions, updateAnswers, submitAnswers}) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
  <div className={styles.formContainer}>
    {questions.map((question, index) => (
      <>
      {activeStep === index && (
        <>
      <p>{question.title}</p>
        <FormButtonGroup
          questionId={question.question_id}
          answers={answers}
          updateAnswers={updateAnswers}
          handleNext={handleNext}
        />
        {activeStep === (questions.length -1) && 
          <Button className={styles.submitButton} onClick={() => submitAnswers()}>Submit</Button>}
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