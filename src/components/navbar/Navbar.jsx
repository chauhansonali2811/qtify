import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Search1 from '../Search/Search'


export const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        {/* <Search placeHolder="Search a song of your choice" data={data}/> */}
        <Search1 data={data}/>
        <Button children="Give Feedback"/>
    </nav>
  )
}
