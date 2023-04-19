import React from 'react';
import Logo from '/src/components/Logo/Logo';
import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerLogo}> 
            <Logo />
        </div>
        <div className={styles.headerCenter}>
            <div className={styles.headerSearch}>
                <SearchIcon/>
                <input type="text" name="" id="" />
            </div>
            <FilterAltIcon/>
        </div>
    </div>
  )
}

export default Header