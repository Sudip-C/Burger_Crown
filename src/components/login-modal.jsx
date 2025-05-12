import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Authentication } from "../redux/actions/auth";

const LoginModal = ({open,setOpen,openSignup,setOpenSignup}) => {

  const dispatch = useDispatch();
  
    const [data,setData] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      e.preventDefault();
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(Authentication(data));
      setData({
        email: "",
        password: "",
      });
    }
    return (
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1, width: "400px" }}
          >
            Login to your account
          </Typography>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
              <input
                name="email"
                value={data.email}
                type="email"
                placeholder="Email"
                className="p-3 border-[1px] border-gray-300 rounded-4xl"
                onChange={(e)=>handleChange(e)}
              />
              <input
                name="password"
              value={data.password}
                type="password"
                placeholder="Password"
                className="p-3 border-[1px] border-gray-300 rounded-4xl"
                onChange={(e)=>handleChange(e)}
              />
              <button className="bg-red-900 text-white p-2 rounded-4xl cursor-pointer" 
                
              >
                Login
              </button>
              <p className="text-center">
                Don't have an account?{" "}
                <span className="text-red-900 font-bold cursor-pointer"
                onClick={()=>{setOpenSignup(true)
                  setOpen(false)
                }}
                >
                  Sign Up
                </span>
              </p>
            </form>
        </Sheet>
      </Modal>
    );
  };

  export default LoginModal;