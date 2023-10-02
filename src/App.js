import React, { useEffect, useState } from 'react';
import styles from './App.css';
import { fetchTopAlbums,fetchNewAlbums, fetchSongs  } from './api/api';
import Hero from './components/Hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import Section from './components/Section/Section';

function App() {
const [topAlbumsData, setTopAlbumsData]=useState([]);
const [newAlbumsData, setNewAlbumsData]=useState([]);

const [songsData,setSongsData]=useState([]);
const [filteredDataValues, setFilteredDataValues]=useState([]);
const [toggle, setToggle]=useState(false);  
const [value, setValue]=React.useState(0);

const handleToggle=()=>{
  setToggle(!toggle);
};

  const handleChange=(event, newvalue)=>{
setValue(newvalue);
  };

  const generateSongsData=(value)=>{
    let key;
    if(value===0){
      filteredData(songsData);
      return;
    }
    else if(value===1){
      key="rock";
    }
    else if(value===2){
      key="pop";
    }
    const res=songsData.filter(item=>item.genre.key===key);
    filteredData(res);
  }

  useEffect(()=>{
    generateSongsData(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
   
  const generateData= async ()=>{
    try{
      const res= await fetchTopAlbums();
      setTopAlbumsData(res);
      const res1= await fetchNewAlbums();
      setNewAlbumsData(res1);
      

    }catch(err){
      console.log(err);
    }
    
  }

  const generateAllSongsdata= async ()=>{
  try{
    const res=await fetchSongs();
    setSongsData(res);
    setFilteredDataValues(res);
  }catch(err){
    console.log(err);
  }
  }

  const filteredData=(val)=>{
    setFilteredDataValues(val);
  }

  useEffect(()=>{
    generateData();
    generateAllSongsdata();
  }, []);

  return (
    <div className="app">
     <Navbar data={songsData}/>
     <Hero/>
     {/* {topAlbumsData.map((item)=>{
      return(
        <Card key={item.id} data={item} type="album"/>
      )
     })} */}
     <div className={styles.sectionWrapper}>
     <Section data={topAlbumsData} type="album" title="Top Albums" filteredDataValues={topAlbumsData}/>

     <Section data={newAlbumsData} type="album" title="New Albums" filteredDataValues={newAlbumsData}/>
     <Section data={songsData} 
     type="song" 
     title="Songs" 
     filteredData={filteredData} 
     filteredDataValues={filteredDataValues} 
     value={value} 
     handleToggle={handleToggle}
     handleChange={handleChange}/>

     </div>
    </div>
  );
}

export default App;
