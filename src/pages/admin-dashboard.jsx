import { useState } from "react";
import avatar from '../assets/avatar.svg'
import sun from '../assets/sun.svg'
import notification from '../assets/notification.svg'
import wmoon from '../assets/whitemoon.svg';
import wnotification from '../assets/white-notification.svg'
import Logo from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png'
import {Link as NavLink } from 'react-router-dom'
import AllItems from "../components/admin-product";

const Profile = (lightMode) => {
    return(
        <section className={`${lightMode?"bg-gray-200 text-black":"bg-[#212631] text-white"} font-sans absolute top-8 rounded-lg right-0 flex flex-col gap-5 justify-between`}>
            <p className="m-3">Account</p>
            <div className="flex flex-col px-3 font-semibold gap-4 justify-between text-[16px]  ">
            <p >Profile</p>
            <p className="mb-3">Logout</p>
        </div>
        </section>
    )
}
const Dashboard = ()=> {
    const [lightMode, setLightMode] = useState(true);
    const [openProfile, setOpenProfile] = useState(false);
    const [section , setSection]  = useState('user')
return (
<div className={`dashboard ${lightMode ? "bg-white text-black" : "bg-black text-white"}`}>
<nav className="h-[60px] border-b-[1px] border-b-gray-200 w-full sticky top-0 flex justify-between">
<section className="flex  items-center justify-start gap-7 w-[40%] py-3 px-6 text-[22px] ml-15">
    <NavLink to='/'><img src={lightMode?Logo:Logo2} alt="" className="w-[25%]"/></NavLink> 
    <p className={`${section === 'user'?'underline decoration-sky-500 underline-offset-8':'no-underline'} cursor-pointer`}onClick={()=>setSection('user')}>Users</p>
    <p className={`${section === 'products'?'underline decoration-sky-500 underline-offset-8':'no-underline'} cursor-pointer`}onClick={()=>setSection('products')}>Products</p>
    <p className={`${section === 'category'?'underline decoration-sky-500 underline-offset-8':'no-underline'} cursor-pointer`}onClick={()=>setSection('category')}>Category</p>
</section>
<section className="flex items-center justify-end gap-6 w-[40%] py-3 px-6 text-[20px] mr-2">
<div className=" w-[5%] cursor-pointer ">
    <img src={lightMode?notification:wnotification} alt="" className="w-[100%]" />
</div>
<div className="w-[5%] cursor-pointer" onClick={()=>setLightMode(!lightMode)} >
    <img src={lightMode?sun:wmoon} alt="" />
</div>
<div className="w-[5%] cursor-pointer relative" onClick={()=>setOpenProfile(!openProfile)} >
    <img src={avatar} alt="" />
    {openProfile && Profile(lightMode)}
</div>
</section>
</nav>
<section className="h-[95vh]">
    {
        section === 'products' && <AllItems/>
    }
</section>
</div>
)
}

export default Dashboard;