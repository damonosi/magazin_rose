import React from "react";

import Image from "next/image";
import TrandafirTava from "../../../public/images/trandafiri-tava.png";
import BackTrandafiriText from "../../../public/images/text-rose-back-cu.png";
import Ofloare from "../../../public/images/tradafir-floare.png";
import UleiProfil from "../../../public/images/uleiProfil.png";
import PetaleLemn from "../../../public/images/petaleLemn.png";
import { IoMdRose } from "react-icons/io";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";

const TrandafiriSection = () => {
  return (
    <section className="flex z-20 flex-row relative bg-roz text-fundal p-20 min-h-screen tracking-widest">
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
        className="container  pt-6 pl-36  items-center justify-center  h-fit w-1/2 mt-28"
        id="content-trandafiri"
      >
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex  mt-28 ml-12"}
        >
          {" "}
          <p>Să nu uităm de răsfățul simțurilor!</p>
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={"flex  mt-36 ml-20"}
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
          clasa={"flex  mt-36 ml-28"}
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
          clasa={"flex  mt-36 ml-36"}
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
          clasa={"flex  mt-36 ml-44"}
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
          clasa={"flex  mt-36 ml-52"}
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
      <div className="flex flex-col items-center justify-center w-1/2 h-auto">
        <InViewWrapper
          inView={{ x: 0, opacity: 1 }}
          notInView={{ x: 200, opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            " top-0 right-0 flex flex-col w-full lg:w-1/2 h-1/2  items-center p-8 "
          }
        >
          <Image src={Ofloare} alt="trandafiri-tava" />{" "}
        </InViewWrapper>
        <InViewWrapper
          inView={{ x: 0, opacity: 1 }}
          notInView={{ x: 200, opacity: 0 }}
          tranzitie={{ duration: 2 }}
          clasa={
            " top-100 right-0 flex flex-col w-full lg:w-1/2 h-1/2  items-center p-8 "
          }
        >
          <Image src={UleiProfil} alt="trandafiri-tava" />{" "}
        </InViewWrapper>
        <InViewWrapper
          inView={{ opacity: 1 }}
          notInView={{ opacity: 0 }}
          tranzitie={{ duration: 1 }}
          clasa={
            " top-100 right-0 flex flex-col w-full lg:w-1/2 h-1/2  items-center p-8 "
          }
        >
          <Image src={PetaleLemn} alt="trandafiri-tava" />{" "}
        </InViewWrapper>
      </div>
    </section>
  );
};

export default TrandafiriSection;
