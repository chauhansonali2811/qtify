import React, { useState } from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg'

const Search = ({placeHolder, data}) => {

  const [val, setValue]=useState(null);
  const onSubmit=(e)=>{
    e.preventDefault();

  };

  const changeHandler=(e)=>{
    setValue(e.target.value);
    //const res=data.filter(item=> item.title.includes(e.target.value))
  }

  return (
    <div >
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search}
            placeHolder={placeHolder}
            required
            value={val}
            onChange={changeHandler}/>
            
                <button className={styles.searchButton} type='submit'>
                   <SearchIcon/>
                </button>
            
        </form>
        {val?<></>:null}
    </div>
  );
}

export default Search