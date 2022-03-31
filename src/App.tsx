import React, {useContext} from 'react';
import {NavBar} from "./components/NavBar";
import {AppRouter} from "./pages/AppRouter";
import {AppContext} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {LinearProgress} from "@mui/material";

function App() {
  const {auth} = useContext(AppContext)
  const [user, loading, error] = useAuthState(auth)

  return (
    <div className="App">
      <NavBar/>
      {loading ? <LinearProgress sx={{marginTop: '50px'}}/> : <AppRouter/>}
    </div>
  );
}

export default App;
