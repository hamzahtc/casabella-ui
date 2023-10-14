import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const endpoint = import.meta.env.VITE_PUBLIC_API_KEY + "/events";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log(endpoint);
    axios.get(endpoint).then((response) => {
      setNames(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
