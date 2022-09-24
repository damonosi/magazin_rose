import React, { useState } from "react";
import Image from "next/image";
import TrandafirImg from "../public/images/damascRose.png";
import AlbinaImg from "../public/images/albine.png";
import MiereImg from "../public/images/miere.png";
import UleiImg from "../public/images/uleiDamasc.png";
import Link from "next/link";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const animationDuration = 2;
const Home = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <div className="bg-fundal text-white py-20 tracking-widest">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 text-text">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 ">
            <h1 className="text-3xl md:text-5xl p-2 text-roz tracking-loose">
              RoseDimat
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Produse Naturale Direct de la Producator
            </h2>
            <p className="text-sm md:text-base  mb-4">
              Explorati produsele noastre 100% naturale produse cu multa grija
              si dragoste pentru natura si clientii nostrii
            </p>
            <Link href="/produse">
              <a className="bg-transparent hover:bg-roz text-roz hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-roz hover:border-transparent">
                Exploreaza Acu
              </a>
            </Link>
          </div>
          <div className=" -rotate-12 p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center pl-40 ">
            <div className="mb-28 h-48 flex flex-wrap content-center ">
              <motion.div
                initial={false}
                animate={
                  isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                viewport={{ once: true }}
                transition={{ duration: animationDuration }}
                onViewportEnter={() => setIsInView(true)}
                className=" inline-block mt-28 hidden xl:block"
              >
                <Image alt="pozaTradafir" src={TrandafirImg} />
              </motion.div>
              <motion.div
                initial={false}
                animate={
                  isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                viewport={{ once: true }}
                transition={{ duration: animationDuration }}
                onViewportEnter={() => setIsInView(true)}
                className="inline-block mt-24 md:mt-0 p-8 md:p-0"
              >
                <Image alt="albine" src={AlbinaImg} />
              </motion.div>
              <motion.div
                initial={false}
                animate={
                  isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                viewport={{ once: true }}
                transition={{ duration: animationDuration }}
                onViewportEnter={() => setIsInView(true)}
                className="inline-block mt-24 md:mt-0 p-8 md:p-0"
              >
                <Image alt="ulei-damasc" src={UleiImg} />
              </motion.div>
              <motion.div
                initial={false}
                animate={
                  isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                viewport={{ once: true }}
                transition={{ duration: animationDuration }}
                onViewportEnter={() => setIsInView(true)}
                className="inline-block mt-28 hidden lg:block"
              >
                <Image alt="pozaTradafir" src={MiereImg} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
