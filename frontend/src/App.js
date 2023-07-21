import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Signin from "../src/pages/Signin/Signin";
import Signup from "../src/pages/Signup/Signup";
import UserProfile from "../src/pages/Userprofile/Userprofile";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/user/:username" element={<UserProfile/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
