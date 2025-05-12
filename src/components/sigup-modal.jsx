import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import { SignupUser } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
const SignupModal = ({open,setOpen}) => {
    const dispatch = useDispatch();
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        role:"customer"
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
        dispatch(SignupUser(data)).then(() => setOpen(false));
        setData({
          name: "",
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
            Create your account
          </Typography>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" >
            <input
                name="name"
                value={data.name}
                type="text"
                placeholder="Name"
                className="p-3 border-[1px] border-gray-300 rounded-4xl"
                onChange={(e)=>handleChange(e)}
              />
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
                Signup
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <span className="text-red-900 font-bold cursor-pointer">
                  Sign In
                </span>
              </p>
            </form>
        </Sheet>
      </Modal>
    )
}

export default SignupModal