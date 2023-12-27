import './Footer.css'

import React from 'react'
import { TbBracketsContain } from "react-icons/tb";
import { PiNavigationArrowFill } from "react-icons/pi";
import { TiSocialAtCircular } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

import Logo from '../assets/Logo.svg'
export const Footer = () => {
  const NavItem =[
    {name:'Home',link:"/"},
    {name:'About',link:"/about"},
    {name:'Menu',link:"/menu"},
    {name:'Reservations',link:"/reservations"},
    {name:'New order ',link:"/order-online"}
  ];

  const socialLink=[
                      {elem:<TiSocialFacebook />,name:"FaceBook",link:"www.facebook.com"},
                      {elem:<TiSocialYoutube />,name:"Youtube",link:"www.Youtube.com"} ,
                      {elem:<TiSocialInstagram />,name:"Instagram",link:"www.Instagram.com"},
                      {elem:<TiSocialTwitter />,name:"Twitter",link:"www.Tiktok.com"}
                    ]
  
  
  return (
    <footer className='footer'>
      <div style={{backgroundColor:"white",marginTop:"40px",borderRadius:"5px", padding:"0.2rem 0.6rem"}}>
        <img src={Logo} alt="Little lemon logo" width={"200rem"}/>
      </div>
      <nav className="footer-nav">
        <h2><PiNavigationArrowFill />  Navigation</h2>
          <ul className="footer-links">
            
          {NavItem.map(item=><li><a className='nav-link' href={item.link}>{item.name}</a></li>)}
          </ul>

      </nav>

      <div className='footer-contact'>
        <h2><TbBracketsContain /> Contact us</h2>
        <address>local 109</address>
        <a href="tel:123-456-7890">123-456-7890</a>
        <a href = "mailto: abc@example.com">Send Email</a>
      </div>

      <div >
        <h2><TiSocialAtCircular /> Social Media</h2>
        <ul className="footer-social-media">

        {socialLink.map(item=><li><a  href={item.link}>{item.elem}{item.name}</a></li>)}
         
        </ul>
      </div>
    </footer>
  )
}
