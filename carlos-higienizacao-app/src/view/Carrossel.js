import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import eren from '../assets/eren.jpg'
import bleach from '../assets/bleach.jpg'
import naruto from '../assets/naruto.jpg'
import skyrim from '../assets/skyrim.jpg'

const img = [eren, bleach, naruto, skyrim, naruto, eren,eren, bleach, naruto, skyrim, naruto, eren]

function Carrossel() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}>
                {img.map(item => (
                    <motion.div className="item" key={item}>
                        <img src={item} alt="eren"></img>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Carrossel