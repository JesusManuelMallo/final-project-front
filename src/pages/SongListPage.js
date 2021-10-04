import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddSong from "../components/AddSong";
import SongCard from "./../components/SongCard";
import { AuthContext } from "./../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function SongListPage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [songs2, setSongs2] = useState([]);
  const storedToken = localStorage.getItem("authToken");
  const { isLoggedIn, user } = useContext(AuthContext);

  const allFavourites = () => {
    const config = {
      headers: { Authorization: `Bearer ${storedToken}` },
    };
    const body = { user };
    axios
      .post(`${API_URL}/getfavourites`, body, config)
      .then((response) => {
        console.log("fdasfd", response);
        setSongs2(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    allFavourites();
  }, []);

  return (
    <div className="SongsListPage">
      <h1>Your favourite songs</h1>
      <AddSong refreshSongs={allFavourites} />

      {loading ? <div>Loading...</div> : null}
      {!loading && songs2?.map((song) => <SongCard key={song._id} {...song} />)}
    </div>
  );
}

export default SongListPage;
