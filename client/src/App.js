import "./App.css";
import Navbar from "./Components/Navbar";
import Analysis from "./Screens/Analysis";
import Map from "./Screens/Map";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Table from "./Screens/Table";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={Map} exact />
        <Route path="/analysis" component={Analysis} exact />
        <Route path="/table" component={Table} exact />
      </div>
    </Router>
  );
}

export default App;
