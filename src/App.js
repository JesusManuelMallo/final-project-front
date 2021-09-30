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

////
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path="/songs" component={SongListPage} />
        <PrivateRoute exact path="/songs/:id" component={SongDetailsPage} />
        <PrivateRoute exact path="/songs/edit/:id" component={EditSongPage} />
        
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
