
import Immodev from '../assets/Imoodev.png'
import { FaSun } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
   <nav className='bg-mainBlue py-3'>
      <div className='container mx-auto flex justify-between'>
        <img src={Immodev} alt="" />
        <div className='flex items-center justify-center space-x-3'>
          <ul className='flex space-x-3 text-[#8E919A]'>
            <NavLink className={({isActive}) => isActive ? 'text-white' : ''} to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/themes">Themes</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
          <FaSun/>
        </div>
      </div>
   </nav>
      
             
            
  )
 
}

export default Navbar