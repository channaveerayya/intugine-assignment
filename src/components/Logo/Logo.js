import React from 'react'
import styles from './Logo.module.scss'
import logo from '../assets/logo.svg'
const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={logo} alt="Logo" />Intugine
        </div>
    )
}

export default Logo
