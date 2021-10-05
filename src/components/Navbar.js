import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import { Button} from 'react-bootstrap-buttons'
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        {/* <button>HOME</button> */}
        <img src="./../jesus-mallo-logo.png" alt=""/>
      </Link>

      {isLoggedIn
        ? (<>
          <Link to="/about"> <Button btnStyle= "dark">About</Button> </Link>
            <a href="https://open.spotify.com/artist/7ndnECNrpbJnrqEHRz15UG">
              <Button btnStyle= "dark"> Spotify </Button>
            </a>
            <a href="https://music.apple.com/es/artist/jesus-mallo/1548480437">
              <Button btnStyle= "dark"> Apple Music </Button>
            </a>
            <Link to="/songs">
              <Button btnStyle= "dark"> Favourites </Button>
            </Link>
            
            <Button btnStyle="dark" onClick={logOutUser}>Logout</Button>
            <span>{user.name}</span>
          </>)
        : 

        

        (<>
          <Link to="/about"> <Button btnStyle= "dark">About</Button> </Link>
          <a href="https://open.spotify.com/artist/7ndnECNrpbJnrqEHRz15UG">
              <Button btnStyle= "dark"> Spotify </Button>
            </a>
            <a href="https://music.apple.com/es/artist/jesus-mallo/1548480437">
              <Button btnStyle= "dark"> Apple Music </Button>
            </a>
            {/* <Link to="/songs">
              <Button btnStyle= "dark"> Songs </Button>
            </Link> */}
          <Link to="/signup"> <Button btnStyle= "primary">Signup</Button> </Link>
          <Link to="/login"> <Button btnStyle= "primary">Login</Button> </Link>
          
        </>)
      }
    </nav>
  );
}

export default Navbar;