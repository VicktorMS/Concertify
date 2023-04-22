import React from 'react';
import Logo from '/src/components/Logo/Logo';
import styles from './Header.module.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.headerLogo}> 
            <Logo />
        </div>
        <div className={styles.headerCenter}>
            <div className={styles.headerSearch}>
                <form onsubmit="event.preventDefault();" role="search">
                  <label htmlFor="search">Procurar Artista</label>
                  <input id="search" type="search" placeholder="Procurar..." autoFocus required />{/* trocar por material input */}
                  <button>
                    <SearchTwoToneIcon style={{color: 'black'}}/>
                  </button>    
                </form>
            </div>
            {/* <FilterAltIcon/> */}
        </div>
    </div>
  )
}

export default Header