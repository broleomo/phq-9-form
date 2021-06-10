import React from 'react';
import styles from './button.module.scss';

const Button = ({click, text}) => (
  <button className={styles.button} onClick={click}>{text}</button>
)

export default Button;

