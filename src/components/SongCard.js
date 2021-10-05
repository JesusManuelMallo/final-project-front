import { Link } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "./../context/auth.context";
import {useContext} from "react";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import { filter } from "dom-helpers";
import ReactPlayer from "react-player";
import "./../index.css";

/* const divStyle = {
  align: 'center',
  width: '10px'
  
}; */

const API_URL = process.env.REACT_APP_API_URL;

// We are deconstructing props object directly in the parentheses of the function
function SongCard (props ) {
  console.log("PROOOOPS", props)
  
  const { user } = useContext(AuthContext);

  const handleRemoveFavourite = () => {
    const storedToken = localStorage.getItem("authToken");
    
    const config = {
      headers: { Authorization: `Bearer ${storedToken}` },
    };

    const body = { user, _id: props._id };

    axios
      .post(`${API_URL}/removefavourite`, body, config)
      .then (() => { 
        const songs3 = props.songs2.filter(song => song._id !== props._id)
        props.setsongs2(songs3)
      })
      .catch(console.log);

    console.log("anadido a favorito", );
  }

  return (
    
  <>
  {/*   {console.log("SOONGS!!!", songs, setsongs)} */}

    <div className="SongCard card" >
    <ReactPlayer  url={props.video} />

  {/*   <img src={props.image} alt="SongImage" /> */}
      
        <h3>{props.title}</h3>
      
      
      <p style={{ maxWidth: "400px" }}>{props.description} </p>
      <button onClick={() => handleRemoveFavourite()}>
                DELETE FROM FAVOURITES
              </button>
      
    </div>
    </>
  );
}

export default SongCard;