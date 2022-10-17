import React from "react";
import Image from "next/image";

import SagetiDiagrama from "../../../public/images/diagrama-trandafiri/sageti.png";
import FloareDiagrama from "../../../public/images/diagrama-trandafiri/flori-diagrama.png";
import TextDiagrama from "../../../public/images/diagrama-trandafiri/vitamine.png";

import UleiProfil from "../../../public/images/uleiProfil.png";
import PetaleLemn from "../../../public/images/flori-trandafir.png";

import { IoMdRose } from "react-icons/io";
import { BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";
import Link from "next/link";

const TrandafiriSection = () => {
	return (
		<section className="flex z-20 flex-col relative bg-fundalTrandafiri text-textTrandafiri py-20 min-h-screen w-full tracking-widest ">
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

				<hr className=" w-4/6   shadow-xl duration-500" />
				<br />
				<h2 className="mt-2">Beneficii</h2>
			</InViewWrapper>

			<div
				className="container flex flex-col  pt-16  gap-72 items-center justify-center  h-fit w-full mt-28"
				id="content-trandafiri">
				<div
					className="flex w-full mt-16  p-6 relative rounded gap-6  bg-gradient-to-l from-roz to-fundalTrandafiri"
					id="prima-sectiune-trandafiri">
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
							Aroma captivantă a trandafirului de Damasc conferă o prospețime elegantă
							produselor cosmetice care îl conțin și fac ca utilizarea acestora să fie
							o adevărată încântare!
						</p>
					</InViewWrapper>
					<InViewWrapper
						inView={{
							opacity: 1,
						}}
						notInView={{
							opacity: 0,
						}}
						tranzitie={{
							duration: 1,
						}}
						delay={500}
						clasa={"p-16  w-2/5 "}>
						<Image
							src={PetaleLemn}
							alt="trandafir"
						/>{" "}
					</InViewWrapper>
				</div>

				<div
					className="flex  mb-28 mt-28  w-full  h-1/3 shadow-xl rounded relative  items-center justify-center p-8"
					id="aDoua-sectiune-trandafiri">
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
					<span className=" w-fit  absolute top-0 left-0 shadow-xl  p-6 ">
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
						clasa={"flex flex-col w-3/5 h-full  items-center relative   p-6"}>
						<p className="max-w-sm">
							Folosit în aromaterapie, parfumul trandafirului de Damasc luptă
							împotriva depresiei şi a stărilor de anxietate, creşte puterea de
							concentrare, îmbunătățește memoria și poate îndepărta durerile de cap,
							dacă este folosit în concentrații mici.
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
				<div className=" flex justify-center items-center mt-16 w-full p-16 bg-black relative shadow-xl min-h-screen">
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
						clasa={" mt-6 motion-safe:animate-spin-slow transition  ease-linear"}
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
							"absolute w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
						}
						delay={500}>
						<Image
							src={TextDiagrama}
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
							"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
						}
						delay={500}>
						<Image
							src={FloareDiagrama}
							alt="trandafiri-diagrama"
						/>
					</InViewWrapper>{" "}
					<span className="absolute top-0 left-0 text-fundalTrandafiri text-2xl p-10 underline underline-offset-8">
						Un complex deosebit de vitamine si minerale
					</span>
				</div>
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
					clasa={"flex w-3/4  mt-36 ml-40  shadow-xl  rounded relative p-6 bg-roz"}>
					<span className=" w-fit absolute  shadow-xl top-0 left-0  p-1 ">Relaxant</span>
					<p className="mt-6">
						Știai că băile cu infuzie de trandafiri se recomandă în caz de afecţiuni ale
						sistemului nervos? Asta pentru că trandafirii au efect de tonifiere,
						înlătură oboseala şi anxietatea, ajută inima şi curăţă pielea în profunzime.
					</p>
				</InViewWrapper>
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
					clasa={"flex   mt-36 ml-40  p-6 "}>
					<Link href="/produse">
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
			<div className="flex w-3/6 flex-col items-center relative justify-center pr-6  h-auto">
				<div className="flex  mb-28 mt-28  w-full  h-1/4  relative justify-center items-center p-8">
					{" "}
				</div>
				<div className="flex     w-full relative  h-1/3  items-center ">
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
						clasa={"absolute left-0 top-0 w-3/4 shadow-xl p-6 bg-roz rounded"}>
						<span className=" w-fit  shadow-xl absolute top-0 left-0 p-1 ">
							Vitamina C
						</span>

						<p className="mt-6">
							Trandafirii conțin vitamina C, un puternic antioxidant ce ajută în lupta
							împotriva îmbătrânirii premature, îmbunătățind astfel elasticitatea
							pielii și atenuând ridurile.
						</p>
					</InViewWrapper>
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
						clasa={"flex w-3/4 relative mt-36 ml-16 shadow-xl rounded  p-6 bg-roz"}>
						<span className=" w-fit  absolute  shadow-xl top-0 left-0 p-1 ">
							Vindecare
						</span>
						<p className="mt-6">
							Puterea tămăduitoare a trandafirului stă în parfum şi petalele bogate în
							acid citric, flavonoide, saponozide, steroli, cianină, fructoză, acid
							malic, sucroză, tanin, vitaminele A, B, C, D, E, P şi K, precum şi
							calciu, fosfor, fier.
						</p>
					</InViewWrapper>
				</div>
				<div className="flex  mb-28 mt-28  w-full lg:w-1/2 h-1/3 justify-center  items-center pt-16">
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
