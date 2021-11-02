import "./App.css";
import Navbar from "./Components/Navbar";
import Analysis from "./Screens/Analysis";
import Map from "./Screens/Map";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Map /> */}
      <Analysis />
    </div>
  );
}

export default App;
