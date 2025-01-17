import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function AddSong(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/songs`, // cambiada esta ruta de projects a songs
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }  
      )
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshSongs();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddProject">
      <h3>Add Song</h3>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

/* export default AddSong; */