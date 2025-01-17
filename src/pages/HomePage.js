import axios from "axios";
import React, { useState, useEffect } from "react";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import ReactPlayer from "react-player";
/* import jesusLogoHome from "./../big-jesus-logo.png" */

const API_URL = process.env.REACT_APP_API_URL;

function HomePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  /* 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn =(e)=> setIsLoggedIn()

 */
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/prueba`)
      .then((response) => {
        console.log("DATOS API", response);
        setSongs(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFavorite = (song) => {
    console.log("user", user);
    console.log("anadido a favorito", song);
    const storedToken = localStorage.getItem("authToken");

    const config = {
      headers: { Authorization: `Bearer ${storedToken}` },
    };

    const body = { user, song };

    axios
      .post(`${API_URL}/favourite`, body, config)
      .then(console.log)
      .catch(console.log);

    console.log("anadido a favorito", song);
  };

  const handleRemoveFavourite = (song) => {
    const storedToken = localStorage.getItem("authToken");

    const config = {
      headers: { Authorization: `Bearer ${storedToken}` },
    };

    const body = { user, song };

    axios
      .post(`${API_URL}/removefavourite`, body, config)
      .then(console.log)
      .catch(console.log);

    console.log("anadido a favorito", song);
  };

  return (
    
    <div className="">
    <div className="welcome">
    {/* <img src="./../jesus-mallo-logo.png" alt=""/>
    <img src="./../jesus-mallo-logo.png" alt=""/> */}
    {/* <img src="./../jesus-mallo-logo.png" alt=""/> */}
    

{/* <img src="./../jesus-mallo-logo.png" alt=""/> */}
{/* <img src="./../jesus-mallo-logo.png" alt=""/>
<img src="./../jesus-mallo-logo.png" alt=""/> */}

      <h1>JESUS MALLO Music</h1>
      {/* <img src={jesusLogoHome} alt="JesusMalloHomeLogo" className="logoShadhow"/> */}
      {!isLoggedIn? 
      <h2>
      Select your favourite songs from: <p><h3><i>JESUS MALLO's</i> albums: <b>"TIME" and "SPACE"</b> </h3> </p>
      <p><h2>and save them on your profile</h2></p>
      <p><h2>SignUp/Login to acces exclusive content</h2></p>
      </h2>:
      null}
      </div>
      {songs.map((song) => (
        <div key={song.text} className="card">
         {/*  <img src={song.img} alt="TBEsong" /> */}
          <h3>{song.name}</h3>
          <ReactPlayer url={song.text} class="centerVideo" />
          {isLoggedIn && (
            <>
              <button onClick={() => handleFavorite(song)}>
                ADD TO FAVOURITES
              </button>
              {/* <button onClick={() => handleRemoveFavourite(song)}>
                DELETE
              </button> */}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomePage;

//https://openwhyd.org/u/61561e4608ced3543d922165?format=json
