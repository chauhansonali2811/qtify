import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums,fetchNewAlbums  } from './api/api';
import Hero from './components/Hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import Card from './components/Card/Card';
import Section from './components/Section/Section';

function App() {
  const [topAlbumsData, setTopAlbumsdata]= useState([]);
  const [newAlbumsData, setNewAlbumsdata]= useState([]);
   
  const generateData= async ()=>{
    try{
      const data1= await fetchTopAlbums();
      setTopAlbumsdata(data1);
      const data2= await fetchNewAlbums();
      setNewAlbumsdata(data2);

    }catch(err){
      console.log(err);
    }
    
  }

  useEffect(()=>{
    generateData();
  }, []);

  return (
    <div className="app">
     <Navbar/>
     <Hero/>
     {/* {topAlbumsData.map((item)=>{
      return(
        <Card key={item.id} data={item} type="album"/>
      )
     })} */}
     <div>
     <Section data={topAlbumsData} title="Top Albums"/>

     <Section data={newAlbumsData} title="New Albums"/>

     </div>
    </div>
  );
}

export default App;
