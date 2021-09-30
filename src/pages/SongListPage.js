import { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "../components/AddTask"
import SongCard from "./../components/SongCard";


const API_URL = process.env.REACT_APP_API_URL;


function SongListPage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true)

  const getAllSongs = () => {
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/songs`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        setSongs(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
    }
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllSongs();
  }, [] );

  
  return (
    <div className="SongsListPage">
      
      <AddTask refreshSongs={getAllSongs} />

      {loading && <div>Loading...</div>}
      { !loading && songs?.map((song) => <SongCard key={song._id} {...song} />  )} 
       
    </div>
  );
}

export default SongListPage;




//CAMBIOS PENDIENTES

/* import { useState, useEffect } from "react";
import axios from "axios";
import AddProject from "./../components/AddProject";
import ProjectCard from "./../components/ProjectCard";

const API_URL = process.env.REACT_APP_API_URL;


function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const[loading,setLoading] = useState(true)

  const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/projects`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
        setProjects(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">
      
      <AddProject refreshProjects={getAllProjects} />

      {loading && <div>Loading...</div>}
      { !loading && projects?.map((project) => <ProjectCard key={project._id} {...project} />  )} 
       
    </div>
  );
}

export default ProjectListPage; */

