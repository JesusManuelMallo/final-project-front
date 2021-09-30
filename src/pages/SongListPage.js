import { useState, useEffect } from "react";
import axios from "axios";
import AddSong from "./../components/AddSong";
import SongCard from "./../components/SongCard";
import AddSong from "../components/AddTask";

const API_URL = process.env.REACT_APP_API_URL;


function SongListPage() {
  const [projects, setSongs] = useState([]);

  const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/songs`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setSongs(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllSongs();
  }, [] );

  
  return (
    <div className="SongListPage">
      
      <AddSong refreshSongs={getAllSongs} />
      
      { songs?.map((song) => <SongCard key={song._id} {...song} />  )} 
       
    </div>
  );
}

export default SongListPage;

