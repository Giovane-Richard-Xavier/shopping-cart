import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import style from "./styles.module.css";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className={style.search_bar}>
      <input 
        type="search" 
        placeholder="Buscar produtos" 
        className={style.search_input}
        value={searchValue}
        onChange={({target}) =>  setSearchValue(target.value)}
      />
      <button type="submit" className={style.search_button}>
        <GoSearch />
      </button>
  </form>
  )
}
