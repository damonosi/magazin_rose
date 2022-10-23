import React from "react";
import Image from "next/image";

import SagetiDiagrama from "../../../public/images/diagrama-trandafiri/sageti.png";
import FloareTextDiagrama from "../../../public/images/diagrama-trandafiri/floare-text.png";
import MultiTrandafiri from "../../../public/images/multi-trandafiri.png";

import UleiProfil from "../../../public/images/uleiProfil.png";
import PetaleLemn from "../../../public/images/flori-trandafir.png";

import { IoMdRose } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";
import Link from "next/link";

const TrandafiriSection = () => {
	return (
		<section className="flex z-20 flex-col relative bg-fundalTrandafiri text-textTrandafiri py-20 min-h-screen align-center justify-center w-full tracking-widest ">
			<div
				className="px-10"
				id="padding-titlu-trandafiri">
				<InViewWrapper
					inView={{
						y: 0,
						opacity: 1,
					}}
					notInView={{
						y: 50,
						opacity: 0,
					}}
					tranzitie={{
						duration: 1,
					}}
					clasa={
						"flex  flex-col absolute rounded-sm w-fit p-6 justify-center shadow-2xl items-center transition-shadow"
					}
					id="titluTrandafiri">
					<div className="flex mb-2 justify-center items-center">
						<h1>Trandafiri de Damasc</h1>
						<IoMdRose className="ml-2" />
					</div>
				</InViewWrapper>
			</div>
			<div
				className="container flex flex-col  pt-16  gap-44 items-center justify-center  h-fit w-full mt-28"
				id="content-trandafiri">
				<div
					className="flex w-11/12 mt-16  p-10 relative rounded gap-6  bg-gradient-to-l from-roz via-fundalTrandafiri to-fundalTrandafiri"
					id="prima-sectiune-trandafiri">
					<div className=" relative flex">
						<InViewWrapper
							inView={{
								opacity: 1,
							}}
							notInView={{
								opacity: 0,
							}}
							tranzitie={{
								duration: 2,
							}}
							clasa={"flex flex-col w-2/4   rounded p-6  mt-36 ml-10   "}>
							{" "}
							<span className=" w-fit text-xl italic absolute top-0 left-0  p-6 ">
								Aroma
							</span>
							<p className="mt-6 p-6">
								Aroma captivantă a trandafirului de Damasc conferă o prospețime
								elegantă produselor cosmetice care îl conțin și fac ca utilizarea
								acestora să fie o adevărată încântare!
							</p>
						</InViewWrapper>
						<InViewWrapper
							inView={{
								transform: "rotate(12deg)",
							}}
							notInView={{ transform: "rotate(0deg)" }}
							tranzitie={{
								duration: 1,
							}}
							delay={1000}
							clasa={"p-16  w-4/12"}>
							<Image
								src={MultiTrandafiri}
								alt="trandafir"
							/>{" "}
						</InViewWrapper>
					</div>
				</div>
				<div
					className="flex items-center justify-center"
					id="flex  text-1-2">
					<InViewWrapper
						inView={{
							opacity: 1,
						}}
						notInView={{
							opacity: 0,
						}}
						tranzitie={{
							duration: 2,
						}}
						clasa={"rounded relative p-6 w-1/2 "}>
						<p className="">
							Trandafirii au efect de tonifiere, înlătură oboseala şi anxietatea,
							ajută inima şi curăţă pielea în profunzime.
						</p>
					</InViewWrapper>
				</div>
				<div
					className="flex  mb-28 mt-28  w-11/12  h-1/3 shadow-xl rounded relative  p-10 pt-0"
					id="aDoua-sectiune-trandafiri">
					<div className=" relative flex w-full  items-center justify-center">
						<InViewWrapper
							inView={{
								x: 10,
								opacity: 1,
							}}
							notInView={{
								x: 0,
								opacity: 0,
							}}
							tranzitie={{
								duration: 2,
							}}
							clasa={"w-2/5 flex justify-center mt-16"}
							delay={500}>
							<Image
								src={UleiProfil}
								alt="trandafiri-picurator"
							/>
						</InViewWrapper>
						<span className=" w-fit text-xl  absolute italic top-0 left-0   p-6 ">
							Aromaterapie
						</span>
						<InViewWrapper
							inView={{
								opacity: 1,
							}}
							notInView={{
								opacity: 0,
							}}
							tranzitie={{
								duration: 2,
							}}
							clasa={
								"flex flex-col w-3/5 h-full  items-center justify-center relative   p-6"
							}>
							<p className="max-w-sm">
								Folosit în aromaterapie, parfumul trandafirului de Damasc luptă
								împotriva depresiei şi a stărilor de anxietate, creşte puterea de
								concentrare, îmbunătățește memoria și poate îndepărta durerile de
								cap, dacă este folosit în concentrații mici.
							</p>
						</InViewWrapper>
						<Link href="/produse/ulei-trandafiri">
							<a>
								<button className="bg-gradient-to-l flex items-center from-roz to-fundalTrandafiri p-6 rounded m-6  absolute bottom-0 right-0  duration-700 hover:bg-gradient-to-r  transition-all  ease-in-out">
									vezi produsul
									<BsArrowRightCircleFill
										style={{ margin: "6px", marginLeft: "16px" }}
									/>
								</button>
							</a>
						</Link>
					</div>
				</div>
				<div
					className="flex items-center justify-center"
					id="flex  text-2-3">
					<InViewWrapper
						inView={{
							opacity: 1,
						}}
						notInView={{
							opacity: 0,
						}}
						tranzitie={{
							duration: 2,
						}}
						clasa={"   rounded relative p-6 w-1/2 "}>
						<p className="">
							Băile cu infuzie de trandafiri se recomandă în caz de afecţiuni ale
							sistemului nervos.
						</p>
					</InViewWrapper>
				</div>
				<div
					className=" flex  justify-center items-center  mt-16 w-11/12 py-28 px-10  relative shadow-2xl h-screen  bg-gradient-to-r from-fromGr via-viaGr  to-toGr rounded"
					id="sectiune-diagrama">
					<div className="flex w-1/3 bg-white">
						<h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, qui
							autem nobis voluptatem inventore accusamus!
						</h2>
					</div>
					<div
						className="flex w-2/3 flex-row items-center justify-center relative"
						id="container-diagrama">
						<InViewWrapper
							inView={{
								opacity: 1,
							}}
							notInView={{
								opacity: 0.4,
							}}
							tranzitie={{
								duration: 1,
							}}
							clasa={
								"w-full flex items-center justify-center w-1/6 animate-wiggle-ping"
							}
							id="sageti"
							delay={500}>
							<Image
								src={SagetiDiagrama}
								alt="trandafiri-diagrama"
							/>
						</InViewWrapper>{" "}
						<InViewWrapper
							inView={{
								opacity: 1,
							}}
							notInView={{
								opacity: 0.4,
							}}
							tranzitie={{
								duration: 1,
							}}
							clasa={
								"absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
							}
							delay={500}>
							<Image
								src={FloareTextDiagrama}
								alt="trandafiri-diagrama"
							/>
						</InViewWrapper>{" "}
					</div>

					<span className="absolute top-0 left-0 text-fundalTrandafiri text-2xl p-10 underline underline-offset-8">
						Un complex deosebit de vitamine si minerale
					</span>
				</div>
				<div
					className="flex items-center justify-center"
					id="flex  text-3-final">
					<InViewWrapper
						inView={{
							opacity: 1,
						}}
						notInView={{
							opacity: 0,
						}}
						tranzitie={{
							duration: 2,
						}}
						clasa={" w-2/4 shadow-xl p-6  rounded"}>
						<p className="mt-6">
							Trandafirii conțin vitamina C, un puternic antioxidant ce ajută în lupta
							împotriva îmbătrânirii premature, îmbunătățind astfel elasticitatea
							pielii și atenuând ridurile.
						</p>
					</InViewWrapper>
				</div>
				<div className="flex  mb-28   w-1/3   justify-center  items-center">
					{" "}
					<InViewWrapper
						inView={{
							opacity: 1,
							y: 0,
						}}
						notInView={{
							opacity: 0,
							y: 100,
						}}
						tranzitie={{
							duration: 2,
						}}
						clasa={""}
						delay={500}>
						<Image
							src={PetaleLemn}
							alt="trandafiri-tava"
						/>{" "}
					</InViewWrapper>
				</div>
			</div>

			<div className="devider-trandafiri-albine">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill-albine"></path>
				</svg>
			</div>
		</section>
	);
};

export default TrandafiriSection;
