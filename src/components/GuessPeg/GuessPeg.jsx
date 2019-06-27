import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = (props) => (
  <div style={{
    backgroundColor: props.color,
    borderColor: props.color,
    margin: '.4em',
    padding: '1.1em'
    }} className={styles.button}>
  </div>
);

export default GuessPeg;
