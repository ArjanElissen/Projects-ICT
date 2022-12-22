import React from 'react'
import styles from './SecondaryNav.module.css'
import SearchIcon from './SearchIcon'

const SecondaryNav = () => {
    return (
        <div className={styles.secondaryNav}>
            <div className={styles.search}>
                Search...  
            </div>
            <SearchIcon />
        </div>
    )
}

export default SecondaryNav
