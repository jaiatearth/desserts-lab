import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddItem from "./components/AddItem";
import List from "./components/List";
import Home from "./components/Home";
import Charts from "./components/Charts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="desserts-lab/" exact element={<Home />} />
        <Route path="desserts-lab/list" exact element={<List />} />
        <Route path="desserts-lab/add-item" exact element={<AddItem />} />
        <Route path="desserts-lab/chart" exact element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;
