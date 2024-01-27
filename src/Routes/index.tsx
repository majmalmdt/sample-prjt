import {Route,Routes} from "react-router-dom"
import Home from "./Home";
import Task from "./Task";
import Login from "./Login";
import "../Styles/index.css";
import Registration from "../Components/Registration";


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/new" element={<Task/>} />
        <Route path="/hello" element={<div>Hello</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
    </Routes>
  )
}

export default Router