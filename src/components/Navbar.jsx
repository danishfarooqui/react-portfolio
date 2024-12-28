import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
      <h2 className='ml-2 font-semibold text-4xl text-purple-100 -tracking-widest'>Df</h2>
        {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaInstagram/>
        <FaGithub/>
        <FaSquareXTwitter/>
    </div>
  </nav>
}

export default Navbar