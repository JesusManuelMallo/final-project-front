import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SongListPage from "./pages/SongListPage";
import SongDetailsPage from "./pages/SongDetailsPage";
import EditSongPage from "./pages/EditSongPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";    // <== IMPORT
import AnonRoute from "./components/AnonRoute";        // <== IMPORT
import About from "./components/About";
import Exclusive from "./components/Exclusive";

////
function App() {
  return (
    <div className="App">
      <Navbar />
<div className="appBody">
      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/exclusive" component={Exclusive} />
        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path="/songs" component={SongListPage} />
        <PrivateRoute exact path="/songs/:id" component={SongDetailsPage} />
        <PrivateRoute exact path="/songs/edit/:id" component={EditSongPage} />
        
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
