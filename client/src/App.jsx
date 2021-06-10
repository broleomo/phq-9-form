import React, { useState, useEffect } from 'react';
import Button from './components/Button/button';
import Form from './components/Form/form';
import styles from './app.module.scss';

const App = () => {
//   const [answers, setAnswers] = useState([]);
//   useEffect(() => {
//     fetch("/answers").then(
//         res => console.log(res.data)
//     )
// }, [answers])

const [formShow, setForm] = useState(false);

  return (
    <div className={styles.formContainer}>
        {!formShow && <Button
          click={() => setForm(!formShow)}
          text="Begin PHQ-9 Form"
        />
        }
        {formShow &&
          <Form/>
        }
        {/* {answers.map((answer => (
          <p>{answer}</p>
        )))} */}
      </div>
  )
}

export default App;