import React from "react";
import Image from "next/image";
import TrandafirImg from "../public/images/damascRose.png";
import AlbinaImg from "../public/images/albine.png";
import MiereImg from "../public/images/miere.png";
import Link from "next/link";
const Home = () => {
  return (
    <section>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Rose Dimat
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Produse Naturale : Direct de la producator
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explorati produsele noastre 100% naturale produse cu multa grija
              si dragoste pentru natura si clientii nostrii
            </p>
            <Link href="/produse">
              <a className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Exploreaza Acu
              </a>
            </Link>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div className="inline-block mt-28 hidden xl:block">
                <Image alt="pozaTradafir" src={TrandafirImg} />
              </div>
              <div className="inline-block mt-24 md:mt-0 p-8 md:p-0">
                <Image alt="albine" src={AlbinaImg} />
              </div>
              <div className="inline-block mt-28 hidden lg:block">
                <Image alt="pozaTradafir" src={MiereImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
