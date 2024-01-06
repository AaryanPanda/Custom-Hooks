import useStorage from "./components/useStorage.jsx";
import "./App.css";

function App() {
  const { setStorage } = useStorage();

  return (
    <div id="container">
      <div id="shadow-div">

        <div id="transparent">
          <p>Storage Input:</p>

          <input
            type="text"
            placeholder="Type to store..."
            name=""
            id=""
            onChange={(e) => setStorage(e.target.value)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
