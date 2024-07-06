import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLi, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Helium Logo.png';
import './navbar.css';

//BEM --> Block Element Modifier
const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whathelium'>About us</a></p>
    <p><a href='#possibility'>Explore</a></p>
    <p><a href='#feature'>Team</a></p>
    <p><a href='#blog'>Career</a></p>
  </>
)
const  Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='helium__navbar'>
      <div className='helium__navbar-links'>
        <div className='helium__navbar-links_logo'>
         <img src= {logo} alt="logo"/>
         <div className='helium__navbar-links_container'>
          <Menu/>
         </div>
        </div>
          <div className='helium__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
          </div>
          <div className='helium__navbar-menu'>
            {toggleMenu
             ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
             : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className='helium__navbar-menu_menu_container scale-up-center'>
                <div className='helium__navbar-menu_conntainer-links'>
                  <Menu/>
                  <div className='helium__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                 </div>
                </div>
              </div>
            )

            }
          </div>
      </div>
    </div>
  )
}

export default Navbar
