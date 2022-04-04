/* eslint-disable default-case */
import React from 'react';
import styles from './results-card.module.scss';
import {severe, moderatelySevere, moderate, mild, minimal} from './results-prompts';


const ResultsCard = ({answers}) => {
  let level;
  let message;
  let totalAmt = 0;
  answers.map((answer) => (
    totalAmt += answer.value
  ));

switch(true) {
  case (totalAmt > 0 && totalAmt < 5):
      level = "minimal"
      message = minimal
      break; 
  case (totalAmt >= 5 && totalAmt < 10):
      level = "mild"
      message = mild
      break;    
  case (totalAmt >= 10 && totalAmt < 15):
    level = "moderate"
    message = moderate
    break; 
  case (totalAmt >= 15 && totalAmt < 20):
    level = "moderately severe"
    message = moderatelySevere
    break; 
  case (totalAmt >= 20):
    level = "severe"
    message = severe
    break; 
}
  
  return (
    <div className={styles.resultsContainer}>
      <p className={styles.resultsHeader}>
        {totalAmt}
        <span className={styles.score}>points</span>
        <span className={styles.level}>{level}</span>
      </p>
      <p>{message}</p>
      {message === severe && 
        <>
          <p>Functionally, the patient finds it is “extremely difficult” to perform life tasks due to their symptoms.</p>
          <p>WARNING: This patient is having thoughts concerning for suicidal ideation or self-harm, and should be probed further, referred, or transferred for emergency psychiatric evaluation as clinically appropriate and depending on clinician overall risk assessment.</p>
        </>
      }
    </div>
  )
};

export default ResultsCard;