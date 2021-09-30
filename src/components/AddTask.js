import { useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

const API_URL = process.env.REACT_APP_API_URL;


function AddSong(props) {
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
        `${API_URL}/songs`,
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

export default AddSong;