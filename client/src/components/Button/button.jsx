import React from 'react';
import styles from './button.module.scss';
import { Button } from '@material-ui/core';

const AppButton = ({click, text}) => (
  <Button className={styles.button} onClick={click}>{text}</Button>
)

export default AppButton;

