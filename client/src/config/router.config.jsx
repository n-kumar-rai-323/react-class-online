import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../page/login/Login"
import Register from "../page/register/Register"
import NotFound from "../page/NotFound"
const RouterConfig = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login}></Route>
                <Route path="/register" element={<Register />} ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes >
        </BrowserRouter >
    </>
}

export default RouterConfig