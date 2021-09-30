import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddTask from "../components/AddTask";

import TaskCard from "../components/TaskCard";

const API_URL = process.env.REACT_APP_API_URL;


function SongDetailsPage (props) {
  const [song, setSong] = useState(null);
  const songId = props.match.params.id;
  
  
  const getSong = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/songs/${songId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneSong = response.data;
        setSong(oneSong);
      })
      .catch((error) => console.log(error));
  };


  
  
  
  useEffect(()=> {
    getSong();
  }, [] );

  
  return (
    <div className="SongtDetails">
      {song && (
        <>
          <h1>{song.title}</h1>
          <p>{song.description}</p>
        </>
      )}

      

      
      <AddTask refreshSong={getSong} songId={songId} /> 



      { song && song.tasks.map((task) => {
        console.log(task)
        return(

          <TaskCard key={task._id} {...task} />  
        )
    
      })}


      { song && song.tasks.map((task) => <TaskCard key={task._id} {...task} /> )} 

      <Link to="/songs">
        <button>Back to songs</button>
      </Link>
          
      <Link to={`/songs/edit/${songId}`}>
        <button>Edit Song</button>
      </Link>
      
    </div>

    //////
  );
}

export default SongDetailsPage;


//

/* import { useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const API_URL = process.env.REACT_APP_API_URL;


function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const[isLoading, setIsLoading] = useState(false)

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // We need the project id when creating the new task
    const { projectId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, projectId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    setIsLoading(true)
    // Send the token through the request "Authorization" Headers   
    axios
      .post(
        `${API_URL}/tasks`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }        
      )
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        setIsLoading(false)
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
        {isLoading && <Spinner animation="grow" size="sm" />}
      </form>
    </div>
  );
}

export default AddTask; */