import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../login/Login"
import Register from "../register/Register"
import Home from "../Home"
import Notfound from "./Notfound"
const RouterConfig = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
             
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/register" element={<Register />} ></Route>
                <Route path="*" element={<Notfound/>}></Route>
            </Routes >
        </BrowserRouter >
    </>
}

export default RouterConfig