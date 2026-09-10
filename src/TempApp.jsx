import React,{useEffect, useState} from 'react';
import "./Temp.css";

const Temp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect (() => {
      const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
        console.log(url);
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson);

        setCity(resJson.main);
      };

      fetchApi();
  },[search] )

  return (
    <>
      <div className='box'>
          <div className='inputData'>
              <input 
              type='search'
              value={search}
              className='inputfield' 
              onChange={ (event) => { setSearch(event.target.value) }} />
          </div>
      
      {!city ? (
          <p className = 'errorMsg'> No Data Found </p>
      ) : (
          <div>  
          <div className='info'>
          <h1 className='location'> 
            <i className="fa-solid fa-street-view"> </i>{search}
          </h1>
          <h2 className='temp'> {city.temp}°Cel </h2>
          <h4 className='tempmin_max'> Min :{city.temp_min}°Cel | Max : {city.temp_max}°Cel</h4>
      </div>

      <div className='wave-one'></div>
      <div className='wave-two'></div>
      <div className='wave-three'></div>
      </div>
      )}
      </div>      
   </>
  )
}

export default Temp;