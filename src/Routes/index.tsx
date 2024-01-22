import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Task from "./Task"
import "../Styles/index.css";


const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/new" element={<Task/>} />
        <Route path="/hello" element={<div>Hello</div>} />
    </Routes>
  )
}

export default Router