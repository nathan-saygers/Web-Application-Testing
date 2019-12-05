import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const handlePitch = pitchResult => {
    switch (pitchResult) {
      case "strike":
        if (strikes > 1) {
          setStrikes(0);
          setBalls(0);
          break;
        } else {
          setStrikes(strikes + 1);
          break;
        }

      case "ball":
        if (balls > 2) {
          setStrikes(0);
          setBalls(0);
          break;
        } else {
          setBalls(balls + 1);
          break;
        }

      case "foul":
        if (strikes > 1) {
          break;
        } else {
          setStrikes(strikes + 1);
          break;
        }

      case "hit":
        setStrikes(0);
        setBalls(0);
        break;

      default:
        console.log('that wasnt right');
    }
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard handlePitch={handlePitch}/>
    </div>
  );
}

export default App;
