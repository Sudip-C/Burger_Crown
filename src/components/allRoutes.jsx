import { Route, Routes } from "react-router-dom"
import Home from "../pages/dine"
import {  useSelector } from "react-redux"
import Delivery from "../pages/delivery"
import Dashboard from "../pages/admin-dashboard"

const AllRoutes = () =>{
    const {dineType} = useSelector(state=>state.DineType)
    return(
        <Routes>
            <Route path='/dashboard' element={dineType === "dine-in"?<Home/>:<Delivery/>}></Route>
            <Route path='/' element={<Dashboard/>}/>
        </Routes>
    )
}

export default AllRoutes