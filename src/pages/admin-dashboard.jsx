import { useState } from "react";
import avatar from '../assets/avatar.svg'
import sun from '../assets/sun.svg'
import notification from '../assets/notification.svg'
import wmoon from '../assets/whitemoon.svg';
import wnotification from '../assets/white-notification.svg'


const Profile = (lightMode) => {
    return(
        <section className={`${lightMode?"bg-gray-200 text-black":"bg-[#212631] text-white"} absolute top-8 rounded-lg right-0 px-3 flex flex-col gap-5 justify-between`}>
            <p className="">Account</p>
            <div className="flex flex-col gap-4 justify-between text-[16px]  ">
            <p >Profile</p>
            <p className="mb-3">Logout</p>
        </div>
        </section>
    )
}
const Dashboard = ()=> {
    const [lightMode, setLightMode] = useState(true);
    const [openProfile, setOpenProfile] = useState(false);
return (
<div className={`dashboard ${lightMode ? "bg-white text-black" : "bg-black text-white"}`}>
<nav className="h-[60px] w-full  flex justify-between">
<section className="flex  items-center justify-start gap-5 w-[40%] py-3 px-6 text-[22px] ml-15">
    <p className="cursor-pointer">Users</p>
    <p className="cursor-pointer">Products</p>
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
</div>
)
}

export default Dashboard;