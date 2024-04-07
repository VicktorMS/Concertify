import React, { useState } from "react";
import Logo from "/src/components/Logo/Logo";
import styles from "./Header.module.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import FAQButton from "/src/components/FAQButton/FAQButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";

function Header({ userSearchData }) {

  const [userSearch, setUserSearch] = useState('')

  let navigate  = useNavigate();

  const handleOnChangeSearchBar = (event) => {
    setUserSearch(event.target.value)
  }
  
  const handleOnClickSearch = (event) => {
    event.preventDefault()
    userSearchData(userSearch)
    navigate(`/home/artist/${userSearch}`)
    
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Logo />
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.headerSearch}>
          <form role="search">
            <label htmlFor="search">Procurar Artista</label>
            <input
              id="search"
              type="search"
              placeholder="Procurar Artista"
              autoFocus
              required
              onChange={handleOnChangeSearchBar}
            />
            <button onClick={handleOnClickSearch}>
              <SearchTwoToneIcon style={{ color: "black" }} />
            </button>
          </form>
        </div>
      </div>
      <FAQButton/>
    </div>
  );
}

export default Header;
