import React, { useState, FormEvent } from 'react'
import { GoSearch } from 'react-icons/go'
import style from "./styles.module.css";
import { ApiProducts } from '@/service/api/axios/products/apiProducts';
import { useProducts } from '@/context/AppContext';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  // Context
  const {setProducts, setLoading} = useProducts();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(searchValue ) {
      setLoading(true);
      const searchProdcts =  await ApiProducts.getProducts(searchValue);
      setProducts(searchProdcts);
      setLoading(false);
    } 
    
    
    setSearchValue("");
  }

  return (
    <form className={style.search_bar} onSubmit={handleSearch}>
      <input 
        type="search" 
        placeholder="Buscar produtos" 
        className={style.search_input}
        value={searchValue}
        onChange={({target}) =>  setSearchValue(target.value)}
        // required
      />
      <button type="submit" className={style.search_button}>
        <GoSearch />
      </button>
    </form>
  )
}
