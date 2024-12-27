import React, { useEffect } from 'react'; 
import {useMotionTemplate,useMotionValue,motion,animate} from 'framer-motion';


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Home = () => {

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #020617 50%, ${color})`;

  return <motion.section 
    style={{
      backgroundImage
    }}
    className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
      {/* <h1 className='text-4xl'>Hello World</h1> */}
  </motion.section>
  

};

export default Home;