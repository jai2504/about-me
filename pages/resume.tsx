import { motion } from 'framer-motion';
import React from 'react'
import { routeAnimation } from '../animation';
import Resume from "../components/Resume";
const resume = () => {
    return (
        <motion.div  variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            <Resume/> 
        </motion.div>
    )
}

export default resume;
