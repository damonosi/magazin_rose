// component to animate when it is in view

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
const InViewWrapper = ({
  children,
  inView,
  notInView,
  clasa,
  tranzitie,
  delay,
 
}) => {
  const [isInView, setIsInView] = useState(false);

  return (

    <motion.div
  
    initial={false}
      // animated si not animated le adaugam in props ca
      animate={isInView ? inView : notInView}
 
      transition={tranzitie}
      onViewportEnter={() => {
        setTimeout(() => {
          setIsInView(true);
        }, delay);
      }}
      onViewportLeave={() => {
        setIsInView(false);
      }}
      id="titlu"
      className={clasa}
    >
      {children}
    </motion.div>

    
  );
};

export default InViewWrapper;
