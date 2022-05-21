import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
