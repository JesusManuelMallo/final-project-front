import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
// import { AuthContext } from "./../context/auth.context"; /!!!/



function HomePage() {

/* 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn =(e)=> setIsLoggedIn()

 */

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `https://openwhyd.org/adrien?format=json`,
      
      )
      .then((response) => {
        const oneSong = response.data; 
     
      })
      .catch((error) => console.log(error));
    
  }, []);




  return (
    <div>
      <h1>The Beautiful Experience</h1>
      <h2>Welcome 2 the dawn, U just accessed to <b><i> The Beautiful Experience</i> </b></h2>
      <p> <b><i> The Beautiful Experience</i> </b> will progress over time</p>
      <p>By now, you´ll have acces to a list from 20 songs to be stored on your profile</p>
    {/* 

    {isLoggedIn ? 

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `https://openwhyd.org/adrien?format=json`,
      
      )
      .then((response) => {
        const oneSong = response.data;
      
                           })
      .catch((error) => console.log(error));
    
        }, []) :
        null

    } */}
    </div>
  );
}

export default HomePage;

//https://openwhyd.org/adrien?format=json