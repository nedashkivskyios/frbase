import React from 'react';
import {NavBar} from "./components/NavBar";
import {AppRouter} from "./pages/AppRouter";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <AppRouter />
    </div>
  );
}

export default App;
