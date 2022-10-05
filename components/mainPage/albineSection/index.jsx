import React from "react";
import { motion } from "framer-motion";
import { GiHoneypot } from "react-icons/gi";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";

const AlbineSection = () => {
  return (
    <motion.section className="z-30  relative">
      <div className="bg-galben text-roz py-20 tracking-widest">
        <div className="container mx-auto flex h-screen">
          <InViewWrapper
            inView={{ opacity: 1 }}
            notInView={{ opacity: 0 }}
            tranzitie={{ duration: 2 }}
            clasa={
              "flex flex-col w-full lg:w-1/3 justsify-center items-start p-8 "
            }
          >
            {" "}
            <div
              id="titlu"
              className="flex border-2 rounded-sm w-fit p-6 justify-center items-center"
            >
              <h1>Albine </h1>
              <GiHoneypot className="ml-2" />
            </div>
          </InViewWrapper>
        </div>
      </div>
    </motion.section>
  );
};

export default AlbineSection;
