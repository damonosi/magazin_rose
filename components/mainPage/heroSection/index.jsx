import React, { useState } from "react";
import Image from "next/image";
import TrandafirImg from "../../../public/images/damascRose.png";
import AlbinaImg from "../../../public/images/albine.png";

import FagureCurgator from "../../../public/images/fagure-curgator.png";
import UleiImg from "../../../public/images/uleiDamasc.png";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
	const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
	const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
	const animationDuration = 2;
	const [isInView, setIsInView] = useState(false);
	return (
		<section className="container relative flex items-center justify-center bg-textTrandafiri  py-20 w-full">
			<div className=" tracking-widest ">
				<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 text-text">
					<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 ">
						<h1 className="text-3xl md:text-5xl p-2 text-fundalTrandafiri tracking-loose">
							RoseDimat
						</h1>
						<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
							Produse Naturale Direct de la Producator
						</h2>
						<p className="text-sm md:text-base  mb-4">
							Explorati produsele noastre 100% naturale produse cu multa grija si
							dragoste pentru natura si clientii nostrii
						</p>
						<Link href="/produse">
							<a className="bg-transparent hover:bg-roz text-fundalTrandafiri hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-roz hover:border-transparent">
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
										? {
												WebkitMaskImage: visibleMask,
												maskImage: visibleMask,
												x: 0,
										  }
										: {
												WebkitMaskImage: hiddenMask,
												maskImage: hiddenMask,
												x: -100,
										  }
								}
								viewport={{
									once: true,
								}}
								transition={{
									duration: animationDuration,
								}}
								onViewportEnter={() => setIsInView(true)}
								className="  mt-28 w-1/4  hidden xl:block">
								<Image
									alt="pozaTradafir"
									src={TrandafirImg}
								/>
							</motion.div>
							<motion.div
								initial={false}
								animate={
									isInView
										? {
												WebkitMaskImage: visibleMask,
												maskImage: visibleMask,
												y: 0,
										  }
										: {
												WebkitMaskImage: hiddenMask,
												maskImage: hiddenMask,
												y: -100,
										  }
								}
								viewport={{
									once: true,
								}}
								transition={{
									duration: animationDuration,
								}}
								onViewportEnter={() => setIsInView(true)}
								className="inline-block mt-24 w-1/4  md:mt-0 p-8 md:p-0">
								<Image
									alt="albine"
									src={AlbinaImg}
								/>
							</motion.div>
							<motion.div
								initial={false}
								animate={
									isInView
										? {
												WebkitMaskImage: visibleMask,
												maskImage: visibleMask,
												y: 0,
										  }
										: {
												WebkitMaskImage: hiddenMask,
												maskImage: hiddenMask,
												y: 100,
										  }
								}
								viewport={{
									once: true,
								}}
								transition={{
									duration: animationDuration,
								}}
								onViewportEnter={() => setIsInView(true)}
								className="inline-block mt-24 w-1/4  md:mt-0 p-8 md:p-0">
								<Image
									alt="ulei-damasc"
									src={UleiImg}
								/>
							</motion.div>
							<motion.div
								initial={false}
								animate={
									isInView
										? {
												WebkitMaskImage: visibleMask,
												maskImage: visibleMask,
												x: 0,
										  }
										: {
												WebkitMaskImage: hiddenMask,
												maskImage: hiddenMask,
												x: 100,
										  }
								}
								viewport={{
									once: true,
								}}
								transition={{
									duration: animationDuration,
								}}
								onViewportEnter={() => setIsInView(true)}
								className="mt-28 w-1/4 hidden lg:block">
								<Image
									alt="pozaTradafir"
									src={FagureCurgator}
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<div className="devider-hero-trandafiri">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill-trandafiri"></path>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
