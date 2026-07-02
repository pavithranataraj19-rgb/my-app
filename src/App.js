import './App.css';
import { useState,useEffect,useMemo,useCallback} from 'react';
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  useEffect(() => {
    alert("✨ Welcome to React Hooks ");
  }, []);
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);
  const showWelcome = useCallback(() => {
    alert("👋 Welcome Buddy");
  }, []);

  const showHello = useCallback(() => {
    alert("Hello Have a Nice Day!");
  }, []);

  return (
    <div className="App">

      <h1 className="title">
        ⚛ React Hooks Task
      </h1>

      <div className="card state">

        <h2>useState Task</h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h3>
          Welcome, <span>{name || "Student!"}</span>
        </h3>

      </div>

      <div className="card effect">

        <h2>useEffect Task</h2>

        <p>
          Refresh the page to see the welcome alert 🎉
        </p>

      </div>

      <div className="card memo">

        <h2>useMemo Task (Multiply by 2)</h2>

        <h3>Number : {number} </h3>

        <button
          onClick={() => setNumber(number + 1)}
        >
          Increase Number
        </button>

        <h3>
          Result : {result}
        </h3>

      </div>

      <div className="card callback">

        <h2>useCallback Task</h2>

        <button onClick={showWelcome}>
          Welcome 👋
        </button>

        <button onClick={showHello}>
          Hello 😊
        </button>

      </div>

    </div>
  );
}

export default App;