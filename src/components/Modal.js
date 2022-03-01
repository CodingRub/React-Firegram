import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }
    return (
        <motion.div className="backdrop" initial={{opacity: 0}} animate={{opacity:1}} onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </motion.div>
    );
}

export default Modal;