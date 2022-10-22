import React from 'react'
import * as styles from './home.module.scss';
export const Home = () => {
  return <div className={styles.layout}>
    <div className={styles.column}><span>I</span></div>
    <div className={styles.column}><span>M</span></div>
    <div className={styles.column}>
      <span>A</span>
      <h5>Computer Scientist and an engineer</h5>
    </div>
    <div className={styles.column}><span>N</span></div>
  </div>
}