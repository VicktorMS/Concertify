import React from 'react'
import styles from './MainBox.module.css'

function MainBox({children}) {
  return (
    <main className={styles.MainBox}>
        {children}
    </main>
  )
}

export default MainBox