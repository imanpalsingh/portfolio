import React from 'react'
import * as styles from "./navbar.module.scss"
import { BiMenu } from "react-icons/bi"
import { MdOutlineComputer } from "react-icons/md";
import { Icon } from '../icon';

export const NavBar = () => {
  return <nav className={styles.navigator}>
    <Icon><MdOutlineComputer /></Icon>
    <Icon><BiMenu /></Icon>
  </nav>
}