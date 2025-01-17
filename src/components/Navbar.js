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
      <a href="mailto:jesusmallo@jesusmallo.eu">Contact</a>
         ||
          <a href="https://www.paypal.com/ROBOTJESUS" >Donations</a>

      {isLoggedIn
        ? (<>
          
          <Link to="/about"> <Button btnStyle= "dark"> Bio </Button> </Link>
          <a href="https://www.redbubble.com/es/people/EleosAidos/explore?page=1&sortOrder=recent">
              <Button btnStyle= "dark"> Merch </Button>
            </a>
            <a href="https://open.spotify.com/artist/7ndnECNrpbJnrqEHRz15UG">
              <Button btnStyle= "dark"> Spotify </Button>
            </a>
            
            <a href="https://music.apple.com/es/artist/jesus-mallo/1548480437">
              <Button btnStyle= "dark"> Apple Music </Button>
            </a>
            <Link to="/songs">
              <Button btnStyle= "dark"> Favourites </Button>
            </Link>
            <Link to="/exclusive">
              <Button btnStyle= "ligth"> Exclusive </Button>
            </Link>
            
            <Button btnStyle="primary" onClick={logOutUser}> Logout </Button>
            <span>{user.name}</span>
          </>)
        : 

        

        (<>
          <a href="https://www.redbubble.com/es/shop/ap/35454460">
              <Button btnStyle= "dark"> Merch </Button>
            </a>

          <Link to="/about"> <Button btnStyle= "dark">Bio</Button> </Link>
          <a href="https://open.spotify.com/artist/7ndnECNrpbJnrqEHRz15UG">
              <Button btnStyle= "dark"> Spotify </Button>
            </a>
            <a href="https://music.apple.com/es/artist/jesus-mallo/1548480437">
              <Button btnStyle= "dark"> Apple Music </Button>
            </a>
            
          <Link to="/signup"> <Button btnStyle= "primary"> Signup </Button> </Link>
          <Link to="/login"> <Button btnStyle= "primary"> Login </Button> </Link>
          
        </>)
      }
    </nav>
  );
}

export default Navbar;
