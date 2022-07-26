import React from 'react'
import './Card.scss';
import openIcon from '../../assets/images/open.png';
import { motion } from 'framer-motion';
export default function Card(prop) {
    const { image, type, title } = prop;
    return (
        <motion.div className='card' data-scroll-section>
            <div className='thumbnail'>
                <motion.img initial={{ scale: 1.5, }} viewport={{ once: true }} whileInView={{ scale: 1, transition: { duration: 1 } }} src={image} alt={title} />
            </div>
            <div className='content'>
                <div className='path'>
                    Work / <span>{type}</span>
                </div>
                <div className='title'>
                    <span>{title}</span>
                    <img src={openIcon} alt="open" />
                </div>
            </div>
        </motion.div>
    )
}
