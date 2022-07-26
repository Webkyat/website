import React from 'react'
import './Popup.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion';
export default function Popup(prop) {
    const { pop } = prop;
    const handler = () => {
        pop();
    }
    return (
        <motion.div className='popup' data-scroll-section
            initial={{ opacity: 0 }} animate={{ opacity: 1, }}>

            <div className='content'>
                <BsFillCheckCircleFill />
                <h2>Thanks for your enquiry</h2>
                <p>We'll get back you soon</p>
                <button onClick={handler}>Done</button>
            </div>
        </motion.div>
    )
}
