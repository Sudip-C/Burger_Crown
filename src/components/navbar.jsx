import '../styles/Navbar.css'
import logo from '../assets/Logo1.png'
import store from '../assets/store.svg'
import cart from '../assets/cart.svg'
import offer from '../assets/offer.svg'
import avatar from '../assets/avatar.svg'
import search from '../assets/search.svg'
import Changer from '../helpers/toggle'
import { useSelector } from 'react-redux'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useState } from 'react'

const Navbar = () => {

   const {dineType} = useSelector((state) => state.DineType);
   const [open, setOpen] = useState(false);
   const LoginModal =()=>{
    return(
        <Modal
            aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            This is the modal title
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography>
        </Sheet>
        </Modal>
    )
}
    return (
        <nav className='navbar flex justify-between items-center px-5  gap-4'>
            <div className='flex justify-between items-center gap-2  w-[55%]'>
            <div className='logo  w-[20%] flex justify-center items-center'>
                <img src={logo} alt="" className='w-[50%] ' />
            </div>
            <div className='dine-type flex justify-between items-center   gap-3 '>
            <p className={dineType === 'delivery'? "text-orange-500 font-bold":'text-[rgba(129, 128, 128, 0.87)] font-bold'}>DELIVERY</p>
            <Changer/>
            <p className={dineType === 'dine-in'? "text-red-900 font-bold":'text-[rgba(129, 128, 128, 0.87)] font-bold'}>DINE IN/TAKEAWAY</p>
            </div>
            <div className='line'></div>
            <input type="text" className='w-[250px] p-2 border-[1px] border-gray-300 rounded-4xl' />
            </div>

            <div className='flex justify-center gap-5 items-center  w-[45%] cursor-pointer '>
            <div className='flex items-center font-bold gap-1  '>
                <img src={store} alt=""  className='w-5 h-5'/>
                NEARBY STORES
            </div>
            <div className='flex items-center font-bold gap-1  '>
                <img src={offer} alt=""  className='w-5 h-5'/>
                KING DEALS
            </div>
            <div className='flex items-center font-bold gap-1 ' onClick={() => setOpen(true)}>
                <img src={avatar} alt=""  className='w-5 h-5'/>
                LOGIN
            </div>
            <div className='flex items-center font-bold gap-1  '>
                <img src={cart} alt=""  className='w-5 h-5'/>
                CART
            </div>
            <div>
                <img src={search} alt="" className='w-7 h-7  ' />
            </div>
            </div>
            {open && LoginModal()}
        </nav>
    )
}

export default Navbar