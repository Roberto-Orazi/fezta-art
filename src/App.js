import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import LoadingVideo from './Components/LoadingVideo';


function App() {


  return (
    <div className="App">
      <LoadingVideo>
        <div className="content">
          <NavBar />
        </div>
      </LoadingVideo>
    </div>
  );
}

export default App;
