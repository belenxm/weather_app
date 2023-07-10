//import React, { useState } from 'react'
//import axios from 'axios'
import Search from './components/search/search';
import './App.css';

function App() {

 // const url =`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=21c4db6fd22732be9be6e67f5965df4c`
  
const handleOnSearchChange = (searchData) => {
  console.log(searchData);
}

  return (
    <div className='container'>
      <Search onSearchChange = {handleOnSearchChange} />
    </div>
  );
}

export default App;
