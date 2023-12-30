import './Header.css'
import React from 'react'

import Logo from '../assets/Logo.svg'
import { TiHome } from "react-icons/ti";
import { IoRestaurant } from "react-icons/io5";
import { RiQuestionLine } from "react-icons/ri";
import { MdAddCard } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";

import {ThemeContext} from '../Theme';
import {useContext}from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
export const Header = () => {
  const NavItem =[
              {name:'Home',link:"/",elem:<TiHome/>},
              {name:'About',link:"/about",elem:<FaInfo/>},
              {name:'Menu',link:"/menu",elem:<IoRestaurant/>},
              {name:'Reservations',link:"/reservations",elem:<BiSolidBookAdd/>},
              {name:'Order Online',link:"/order-online",elem:<MdAddCard/>}
            ]

            const { theme,toggleTheme} = useContext(ThemeContext);

  return (
    <header className='header bg-c'>

    <img className="header-logo" src={Logo} alt="Little Lemon Logo" />

    <nav className='nav'>
      <ul>
      {NavItem.map(item=><li><a href={item.link}> {item.elem} {item.name}</a></li>)}
      <li className='bg-l' onClick={()=>toggleTheme()}><a href='#'>{theme ==="dark-theme" ? <MdLightMode /> : <MdDarkMode />}</a></li>
    
      </ul>
    </nav>
  </header>
  )
 }

