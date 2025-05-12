import { Route, Routes } from "react-router-dom"
import Home from "../pages/dine"
import {  useSelector } from "react-redux"
import Delivery from "../pages/delivery"
import Dashboard from "../pages/admin-dashboard"
import ProductList from "../pages/product-listing"

const AllRoutes = () =>{
    const {dineType} = useSelector(state=>state.DineType)
    return(
        <Routes>
            <Route path='/' element={dineType === "dine-in"?<Home/>:<Delivery/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path = '/product-list' element = {<ProductList/>}></Route>
        </Routes>
    )
}

export default AllRoutes