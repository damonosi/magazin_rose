import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHoneypot } from "react-icons/gi";

const AlbineSection = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.section
      initial={false}
      transition={{ duration: 3 }}
      onViewportEnter={() => setIsInView(true)}
      className="z-30  relative"
    >
      <div className="bg-galben text-roz py-20 tracking-widest">
        <div className="container mx-auto flex h-screen">
          <motion.div
            onViewportLeave={() => {
              console.log("left");
              setIsInView(false);
            }}
            className="flex flex-col w-full lg:w-1/3 justsify-center items-start p-8 "
          >
            {" "}
            <div
              id="titlu"
              className="flex border-2 rounded-sm w-fit p-6 justify-center items-center"
            >
              <h1>Albine </h1>
              <GiHoneypot className="ml-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AlbineSection;
