import React, { Component, ReactNode } from 'react'
import * as styles from "./icon.module.scss";

export const Icon = ({ children }: { children: ReactNode }) => {
  return <div className={styles.icon}> {children}</div>
}