import React from 'react'
import './Header.scss';
import Logo from '../../assets/images/webkyat-logo.png';
import { FiMessageCircle } from 'react-icons/fi'
import { motion } from 'framer-motion';
export default function Header(prop) {
    const { fixedButton } = prop;
    return (
        <header >
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt="webkyat_logo_png" />
                    <span>webkyat</span>
                </div>
                <motion.a animate={fixedButton ? {
                    background: '#7000FF',
                } : {
                    background: 'rgb(46, 46, 46)'
                }} className='header-contact-cta' href="" ><FiMessageCircle />Enquire</motion.a>
            </div>
        </header>
    )
}
