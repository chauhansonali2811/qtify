import React, {useState} from 'react';
import TextField  from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import styles from './Search.module.css';

export default function Search1({data}){
    const [val, setVal]=useState(null);
  
const changeHandler=(e)=>{
    setVal(e.target.value);
  }

  const clickHandler=()=>{

  }

  return (
    <div className={styles.wrapper}>
        <Autocomplete
        className={styles.search}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option)=>option.title)}
        renderInput={(params)=>(
          <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }} 
          onChange={changeHandler} 
          />
        )}
        />
        <button className={styles.searchButton} type="submit" onClick={clickHandler}>
            <SearchIcon/>
        </button>
    </div>
  );
}