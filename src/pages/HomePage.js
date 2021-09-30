import axios from 'axios'
import React, {useState, useEffect, } from 'react'
import { AuthContext } from "./../context/auth.context"; 



function HomePage() {

/* 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn =(e)=> setIsLoggedIn()

 */
  const [songs, setSongs] = useState([])

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `https://openwhyd.org/u/61561e4608ced3543d922165?format=json`,
      
      )
      .then((response) => {
        setSongs(response.data) 
     
      })
      .catch((error) => console.log(error));
    
  }, []);




  return (
    <div>
      <h1>The Beautiful Experience</h1>
      <h2>Welcome 2 the dawn, U just accessed to <b><i> The Beautiful Experience</i> </b></h2>
      <p> <b><i> The Beautiful Experience</i> </b> will progress over time</p>
      <p>By now, you´ll have acces to a list from 20 songs to be stored on your profile</p>
    
      {songs.map((i) => (
        <div key={i.text} className="card">
          <img src={i.name} alt="TBEsong" />
          <h3>{i.name}</h3>
          
        </div>
      ))}
    
    
  
    </div>
  );
}

export default HomePage;


//https://openwhyd.org/u/61561e4608ced3543d922165?format=json