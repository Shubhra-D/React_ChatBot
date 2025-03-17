import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ChatPage from "./Pages/ChatPage";

function App() {   
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chatbot" element={<ChatPage/>} />
      </Routes>
    </>
  );
}

export default App;
