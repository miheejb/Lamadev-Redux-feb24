import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";
import {useState} from 'react';

const App = () => {
  const [name, setName] =useState("John")
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar name={name} />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
