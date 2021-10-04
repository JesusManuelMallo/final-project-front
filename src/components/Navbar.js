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
            <Link to="/songs">
              <Button btnStyle= "dark"> Songs </Button>
            </Link>
            <Button btnStyle="dark" onClick={logOutUser}>Logout</Button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/about"> <Button btnStyle= "dark">About</Button> </Link>
          <Link to="/signup"> <Button btnStyle= "dark">Signup</Button> </Link>
          <Link to="/login"> <Button btnStyle= "dark">Login</Button> </Link>
          
        </>)
      }
    </nav>
  );
}

export default Navbar;