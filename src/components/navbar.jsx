import "../styles/Navbar.css";
import logo from "../assets/Logo1.png";
import store from "../assets/store.svg";
import cart from "../assets/cart.svg";
import offer from "../assets/offer.svg";
import avatar from "../assets/avatar.svg";
import search from "../assets/search.svg";
import Changer from "../helpers/toggle";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import LoginModal from "./login-modal";
import { LogoutUser } from "../redux/actions/auth";
import SignupModal from "./sigup-modal";
import { Link as Navlink } from "react-router-dom";

const Navbar = () => {
  const { dineType } = useSelector((state) => state.DineType);
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  // const dispatch = useDispatch()
  let user = localStorage.getItem("User");
  if (user !== undefined && user !== null) {
    user = JSON.parse(user);
  }
// const logout =()=>{
//   dispatch(LogoutUser())
// }
 
  
  return (
    <nav className="navbar flex justify-between items-center px-5  gap-4">
      <div className="flex justify-between items-center gap-2  w-[55%]">
        <div className="logo  w-[20%] flex justify-center items-center">
          <Navlink to='/'><img src={logo} alt="" className="w-[50%] "/></Navlink>
        </div>
        <div className="dine-type flex justify-between items-center   gap-3 ">
          <p
            className={
              dineType === "delivery"
                ? "text-orange-500 font-bold"
                : "text-[rgba(129, 128, 128, 0.87)] font-bold"
            }
          >
            DELIVERY
          </p>
          <Changer />
          <p
            className={
              dineType === "dine-in"
                ? "text-red-900 font-bold"
                : "text-[rgba(129, 128, 128, 0.87)] font-bold"
            }
          >
            DINE IN/TAKEAWAY
          </p>
        </div>
        <div className="line"></div>
        <input
          type="text"
          className="w-[250px] p-2 border-[1px] border-gray-300 rounded-4xl"
        />
      </div>

      <div className="flex justify-center gap-5 items-center  w-[45%] cursor-pointer ">
        <div className="flex items-center font-bold gap-1  ">
          <img src={store} alt="" className="w-5 h-5" />
          NEARBY STORES
        </div>
        <div className="flex items-center font-bold gap-1  ">
          <img src={offer} alt="" className="w-5 h-5" />
          KING DEALS
        </div>
        <div
          className="flex items-center font-bold gap-1 "
          onClick={() => setOpen(true)}
        >
          <img src={avatar} alt="" className="w-5 h-5" />
          {user?.name?`${user?.name.split(" ")[0]}`:'LOGIN'}
        </div>
        <div className="flex items-center font-bold gap-1  ">
          <img src={cart} alt="" className="w-5 h-5" />
          CART
        </div>
        <div>
          <img src={search} alt="" className="w-7 h-7  " />
        </div>
      </div>
      {open && <LoginModal open={open} setOpen={setOpen} signup={openSignup} setOpenSignup={setOpenSignup} />}
      {openSignup && <SignupModal open={openSignup} setOpen={setOpenSignup} />
}
    </nav>
  );
};

export default Navbar;
