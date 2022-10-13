import React from "react";

import Image from "next/image";

import Ofloare from "../../../public/images/tradafir-floare.png";
import UleiProfil from "../../../public/images/uleiProfil.png";
import PetaleLemn from "../../../public/images/petaleLemn.png";

import { IoMdRose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";
import Link from "next/link";

const TrandafiriSection = () => {
  return (
    <section className="flex z-20 flex-row relative bg-roz text-fundal p-20 min-h-screen w-full tracking-widest ">
      <InViewWrapper
        inView={{ y: 0, opacity: 1 }}
        notInView={{ y: 50, opacity: 0 }}
        tranzitie={{ duration: 1 }}
        clasa={
          "flex border-2 flex-col absolute rounded-sm w-fit p-6 justify-center border-black items-center"
        }
      >
        <div className="flex mb-2 justify-center items-center">
          <h1>Trandafiri de Damasc</h1>
          <IoMdRose className="ml-2" />
        </div>

        <hr className=" w-full  hover:border-roz duration-500" />
        <br />
        <h2 className="mt-2">Beneficii</h2>
      </InViewWrapper>

      <div
        className="container  pt-6 pl-36  items-center justify-center  h-fit w-2/3 mt-28"
        id="content-trandafiri"
      >
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex border-2 w-fit p-6 mt-28 mb-28 border-black rounded"}
        >
          {" "}
          <p>Să nu uităm de răsfățul simțurilor!</p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            "flex flex-col w-3/4 border-2 border-black rounded p-6 relative mt-36 ml-10"
          }
        >
          <span className=" w-fit border-2 absolute top-0 left-0 border-black border-l-0 p-1 border-t-0">
            Vitamina C
          </span>

          <p className="mt-6">
            Trandafirii conțin vitamina C, un puternic antioxidant ce ajută în
            lupta împotriva îmbătrânirii premature, îmbunătățind astfel
            elasticitatea pielii și atenuând ridurile.
          </p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            "flex w-3/4 relative mt-36 ml-16 border-2 rounded border-black p-6 "
          }
        >
          <span className=" w-fit border-2 absolute top-0 left-0 border-black border-l-0 p-1 border-t-0">
            Aroma
          </span>
          <p className="mt-6">
            Aroma captivantă a trandafirului de Damasc conferă o prospețime
            elegantă produselor cosmetice care îl conțin și fac ca utilizarea
            acestora să fie o adevărată încântare!
          </p>
        </InViewWrapper>

        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            "flex w-3/4 relative mt-36 ml-24 border-2 rounded border-black p-6 "
          }
        >
          <span className=" w-fit border-2 absolute top-0 left-0 border-black border-l-0 p-1 border-t-0">
            Vindecare
          </span>
          <p className="mt-6">
            Puterea tămăduitoare a trandafirului stă în parfum şi petalele
            bogate în acid citric, flavonoide, saponozide, steroli, cianină,
            fructoză, acid malic, sucroză, tanin, vitaminele A, B, C, D, E, P şi
            K, precum şi calciu, fosfor, fier.
          </p>
        </InViewWrapper>

        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            "flex w-3/4 relative border-black mt-36 ml-32 rounded border-2 p-6 "
          }
        >
          <span className=" w-fit border-2 absolute top-0 left-0 border-black border-l-0 p-1 border-t-0">
            Aromaterapie
          </span>
          <p className="mt-6">
            Folosit în aromaterapie, parfumul trandafirului de Damasc luptă
            împotriva depresiei şi a stărilor de anxietate, creşte puterea de
            concentrare, îmbunătățește memoria și poate îndepărta durerile de
            cap, dacă este folosit în concentrații mici.
          </p>
        </InViewWrapper>

        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            "flex w-3/4  mt-36 ml-40 border-2 border-black rounded relative p-6 "
          }
        >
          <span className=" w-fit border-2 absolute top-0 left-0 border-black border-l-0 p-1 border-t-0">
            Relaxant
          </span>
          <p className="mt-6">
            Știai că băile cu infuzie de trandafiri se recomandă în caz de
            afecţiuni ale sistemului nervos? Asta pentru că trandafirii au efect
            de tonifiere, înlătură oboseala şi anxietatea, ajută inima şi curăţă
            pielea în profunzime.
          </p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex   mt-36 ml-40  p-6 "}
        >
          <Link href="">
            <a>
              <div className="w-3/5 ml-36 p-4 bg-white rounded  hover:bg-slate-400">
                <div className="flex items-center   w-full  pt-4 pb-4 text-sm transition ease-in-out delay-150  hover:text-black relative">
                  <div className="w-4/5 ">
                    {" "}
                    <span className="w-full mr-4">Vezi Produsele </span>
                  </div>
                  <div className=" transition ease-in-out delay-150 hover:translate-x-2 w-1/5">
                    <span>
                      <BsArrowRight />
                    </span>
                  </div>
                  <span className="absolute top-0 right-0">
                    {" "}
                    <IoMdRose />
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </InViewWrapper>
      </div>
      <div className="flex w-1/3 flex-col items-center relative justify-center  h-auto">
        <div className="flex  mb-28 mt-28  w-full  h-1/3  items-center p-8">
          {" "}
          <InViewWrapper
            inView={{ x: -200, opacity: 1 }}
            notInView={{ x: 0, opacity: 0 }}
            tranzitie={{ duration: 2 }}
            delay={500}
            clasa={"  "}
          >
            <Image src={Ofloare} alt="trandafiri-tava" />{" "}
          </InViewWrapper>
        </div>
        <div className="flex  mb-28 mt-28  w-full lg:w-1/2 h-1/3  items-center p-8">
          {" "}
          <InViewWrapper
            inView={{ x: -100, opacity: 1 }}
            notInView={{ x: 0, opacity: 0 }}
            tranzitie={{ duration: 2 }}
            clasa={" "}
            delay={500}
          >
            <Image src={UleiProfil} alt="trandafiri-tava" />{" "}
          </InViewWrapper>
        </div>
        <div className="flex  mb-28 mt-28  w-full lg:w-1/2 h-1/3  items-center pt-16">
          {" "}
          <InViewWrapper
            inView={{ opacity: 1, y: 0 }}
            notInView={{ opacity: 0, y: 100 }}
            tranzitie={{ duration: 2 }}
            clasa={""}
            delay={500}
          >
            <Image src={PetaleLemn} alt="trandafiri-tava" />{" "}
          </InViewWrapper>
        </div>
      </div>
      <div className="devider-trandafiri-albine">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill-albine"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TrandafiriSection;
