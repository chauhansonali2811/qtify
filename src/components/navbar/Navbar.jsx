import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'


export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <Search/>
        <Button children="Give Feedback"/>
    </nav>
  )
}
