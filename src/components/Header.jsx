import React from 'react'
import Logo from "../assets/img/logo.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../assets/img/avatar.png"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';



const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [{user}, dispatch] = useStateValue()
  const [isMenu, setIsMenu] = React.useState(false)


  const login = async () => {
   if(!user){
    const {user:{refreshToken, providerData},} = await signInWithPopup(firebaseAuth,provider)
    dispatch({
      type:actionType.SET_USER,
      user:providerData[0]
    })
    localStorage.setItem("user", JSON.stringify(providerData[0]))
   }else{
    setIsMenu(!isMenu)
   }
  }

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>

        {/* desktop and tablet */}
        <div className='hidden md:flex w-full h-full'>
            <Link to={"/*"} className='flex items-center gap-2'>
              <img src={Logo} alt='logo' className='w-8 object-cover'/>
              <p className='text-black font-bold text-xl'>Gboye's Kichen</p>
            </Link>

            <ul className='flex items-center gap-8 ml-auto'>
              <li className="text-blue-950 font-extrabold hover:text-yellow-800 cursor-pointer duration-100 transition-all ease-in-out">Home</li>
              <li className="text-blue-950 font-extrabold hover:text-yellow-800 cursor-pointer duration-100 transition-all ease-in-out">Menu</li>
              <li className="text-blue-950 font-extrabold hover:text-yellow-800 cursor-pointer duration-100 transition-all ease-in-out">About</li>
              <li className="text-blue-950 font-extrabold hover:text-yellow-800 cursor-pointer duration-100 transition-all ease-in-out">Service</li>
            </ul>

            <div className='flex items-center justify-center'>
              <MdShoppingBasket className='text-2xl ml-8 cursor-pointer'/>
              <div className='w-5 h-5 bg-red-600 rounded-full flex items-center justify-center absolute ml-12 top-5'>
                <p className='text-white'>0</p>
              </div>
            </div>

            <div className='flex items-center justify-center ml-4'>
              <div>
                <motion.img 
                whileTap={{scale:0.6}} 
                src={user?user.photoURL:Avatar} alt='profile'
                className='w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer rounded-full'
                onClick={login}
                />
              </div>

             {isMenu &&(
               <motion.div 
               initial={{opacity:0 , scale:0.6}}
               animate={{opacity:1 , scale:1}}
               exit={{opacity:0 , scale:0.6}}
               className='w-40 bg-slate-100 shadow-xl rounded-lg flex flex-col absolute items-center justify-center mt-20'>
               {user && user.email === "akeremaleoluwagboyega@gmail.com" &&(
                 <Link to={"./createItem"}>
                     <div className='flex flex-row items-center gap-2 cursor-pointer'>
                       <p>add item </p>
                       <MdAdd/>
                     </div>
                 </Link>
               )}
               <div className='flex flex-row items-center gap-2 cursor-pointer'>
                 <p>Logout</p> 
                 <MdLogout/>
               </div>
             </motion.div>
             )}
            </div>
            
        </div>

        {/* mobile  devices */}

        <div className='flex md:hidden w-full h-full bg-yellow-800'>
          mobile
        </div>
    </header>
  )
}

export default Header