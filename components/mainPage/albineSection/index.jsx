import React from "react";
import { motion } from "framer-motion";
import { GiHoneycomb } from "react-icons/gi";
import InViewWrapper from "../../componente-animate/InViewWrapper.tsx";

import MiereImage from "../../../public/images/miere.png";
import Image from "next/image";

const AlbineSection = () => {
	return (
		<motion.section
			className="z-10 bg-galben p-20 relative flex flex-col"
			id="sectiune-apicole">
			<div className="  py-20 tracking-widest">
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
					clasa={"flex flex-col w-full lg:w-1/3 justsify-center items-start p-8 "}>
					<div
						id="titlu"
						className="flex shadow-2xl rounded-sm text-2xl p-6 justify-center items-center">
						<h1>Apicole </h1>
						<GiHoneycomb className="ml-2 " />
					</div>
				</InViewWrapper>
			</div>
			<div
				className="flex w-full"
				id="introducere-albine">
				<div className="flex w-1/2 justify-center items-center ">
					<p>
						Cum este produsa mierea de albineree Mierea este produsa printr-un proces
						complex, care incepe de la colectarea polenului si a manei de la flori si
						arbori. Albinele parcurg zilnic sute de kilometri pentru a aduce in stup
						aceste materii prime. Amestecate cu saliva albinei colectoare, dar si cu
						alte substante (enzime si aminoacizi), apoi trecute prin acelasi proces de
						catre alte albine, mierea devine din ce in ce mai vascoasa. Ulterior, mierea
						este depozitata in celulele fagurilor si lasata la aer o perioada, pentru ca
						apa sa se evapore. In final, aceste celule sunt inchise etans cu niste
						capacele de ceara.{" "}
					</p>
				</div>
				<div className="flex w-1/2 justify-center items-center">
					<Image
						alt="imagine-miere"
						src={MiereImage}></Image>
				</div>
			</div>
		</motion.section>
	);
};

export default AlbineSection;
