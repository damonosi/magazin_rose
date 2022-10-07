import React from "react";

import Image from "next/image";

import Ofloare from "../../../public/images/tradafir-floare.png";
import UleiProfil from "../../../public/images/uleiProfil.png";
import PetaleLemn from "../../../public/images/petaleLemn.png";
import { IoMdRose } from "react-icons/io";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";

const TrandafiriSection = () => {
  return (
    <section className="flex z-20 flex-row relative bg-roz text-fundal p-20 min-h-screen w-full tracking-widest ">
      <InViewWrapper
        inView={{ y: 0, opacity: 1 }}
        notInView={{ y: 50, opacity: 0 }}
        tranzitie={{ duration: 1 }}
        clasa={
          "flex border-2 absolute rounded-sm w-fit p-6 justify-center items-center"
        }
      >
        <h1>Trandafiri de Damasc</h1>
        <IoMdRose className="ml-2" />
      </InViewWrapper>

      <div
        className="container  pt-6 pl-36  items-center justify-center  h-fit w-2/3 mt-28"
        id="content-trandafiri"
      >
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex  mt-28 mb-28 "}
        >
          {" "}
          <p>Să nu uităm de răsfățul simțurilor!</p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex w-3/4  mt-36 ml-10"}
        >
          <p>
            Trandafirii conțin vitamina C, un puternic antioxidant ce ajută în
            lupta împotriva îmbătrânirii premature, îmbunătățind astfel
            elasticitatea pielii și atenuând ridurile.
          </p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex w-3/4  mt-36 ml-16"}
        >
          {" "}
          <p>
            Aroma captivantă a trandafirului de Damasc conferă o prospețime
            elegantă produselor cosmetice care îl conțin și fac ca utilizarea
            acestora să fie o adevărată încântare!
          </p>
        </InViewWrapper>

        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex w-3/4  mt-36 ml-24"}
        >
          {" "}
          <p>
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
          clasa={"flex w-3/4  mt-36 ml-32"}
        >
          {" "}
          <p>
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
          clasa={"flex w-3/4  mt-36 ml-40"}
        >
          {" "}
          <p>
            Știai că băile cu infuzie de trandafiri se recomandă în caz de
            afecţiuni ale sistemului nervos? Asta pentru că trandafirii au efect
            de tonifiere, înlătură oboseala şi anxietatea, ajută inima şi curăţă
            pielea în profunzime.
          </p>
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
