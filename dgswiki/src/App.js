import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./commponts/Login/Login"  
import Main from "./commponts/Main/Main"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/main" element={<Main/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
