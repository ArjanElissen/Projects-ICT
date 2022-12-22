import React from 'react'
import styles from './Navigation.module.css'
import logo from './assets/logo.svg'
import SecondaryNav from '../SecondaryNav'

const Navigation = () => {
    const navItems = [
        'Home',
        'Films',
        'Coming soon'
    ]
    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    {navItems.map((item) => (
                        <li className={styles.navigationItem} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNav />
        </div>
    )
}

export default Navigation
