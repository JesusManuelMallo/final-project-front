import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddSong from "../components/AddSong";

import TaskCard from "../components/TaskCard";

const API_URL = process.env.REACT_APP_API_URL;

function SongDetailsPage(props) {
  const [song, setSong] = useState(null);
  const songId = props.match.params.id;

  const getSong = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/songs/${songId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneSong = response.data;
        setSong(oneSong);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSong();
  }, []);

  return (
    <div className="SongtDetails">
      {song && (
        <>
          <h1>{song.title}</h1>
          <p>{song.description}</p>
        </>
      )}

      <AddSong refreshSong={getSong} songId={songId} />

      {song &&
        song.tasks.map((task) => {
          console.log(task);
          return <TaskCard key={task._id} {...task} />;
        })}

      {song && song.tasks.map((task) => <TaskCard key={task._id} {...task} />)}

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
