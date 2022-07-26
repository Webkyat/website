import React from 'react'
import './sidemenu.scss';
import { motion } from 'framer-motion';
import { FiXCircle } from 'react-icons/fi'
export default function Sidemenu(prop) {
    const { updateMenuState } = prop;
    const handler = () => {
        updateMenuState();
    }
    return (
        <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <div className='close-menu'>
                <div className='close-icon'>
                    <FiXCircle onClick={handler} />
                </div>
            </div>

            <ul>

            </ul>
        </motion.aside>
    )
}
