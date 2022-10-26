import Carousel, { CarouselItem } from "../productCarousel";
import Image from "next/image";
import useSWR from "swr";

import InViewWrapper from "./../componente-animate/InViewWrapper.tsx";
import Link from "next/link";
import Spinner from "./../spinner/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CaruselProduse = ({ closeProductMenu }) => {
	const { data: produseCarusel, error } = useSWR(
		"/api/dashboard/produse/produse-carusel",
		fetcher,
	);

	if (!produseCarusel || error) {
		return <Spinner />;
	}

	return (
		<Carousel>
			{produseCarusel.map((produs, index) => {
				return (
					<CarouselItem key={index}>
						<InViewWrapper
							keie="meniuProduse"
							inView={{
								opacity: 1,
								x: 0,
							}}
							notInView={{
								opacity: 0,
								x: 100,
							}}
							tranzitie={{
								duration: 2,
							}}
							clasa={"flex items-center justify-center w-full"}>
							<div
								className="flex  flex-col border  items-center w-full  h-auto"
								id="produs-carusel">
								<h2 className="">{produs.name}</h2>
								<Link href={`/produse/${produs.slug}`}>
									<a onClick={() => closeProductMenu()}>
										<div className="flex  w-full p-6 gap-16 ">
											<div className="flex flex-col  p-2 gap-4 text-center">
												<div className="flex  items-center justify-center">
													<Image
														src={produs.image}
														layout=""
														width={80}
														height={80}
														alt={produs.name}
													/>
												</div>
											</div>
											<div className=" flex flex-col gap-6  justify-between p-2">
												<p className="">{produs.price} RON</p>
												<p className="">{produs.cantitate} gr</p>
											</div>
										</div>
									</a>
								</Link>
							</div>
						</InViewWrapper>
					</CarouselItem>
				);
			})}
		</Carousel>
	);
};

export default CaruselProduse;
