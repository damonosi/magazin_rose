import Carousel, { CarouselItem } from "../productCarousel";
import Image from "next/image";
import useSWR from "swr";
import Spinner from "../spinner/Spinner";
import InViewWrapper from "./../componente-animate/InViewWrapper.tsx";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CaruselProduse = ({ closeProductMenu }) => {
	const { data: produseCarusel, error } = useSWR(
		"/api/dashboard/produse/produse-carusel",
		fetcher,
	);
	if (!produseCarusel)
		return (
			<div>
				<Spinner />
			</div>
		);
	if (error) return "no data....";
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
							clasa={"w-full"}>
							<div className="flex border flex-col justify-center items-center w-full h-auto">
								<h2 className="">{produs.name}</h2>
								<Link href={`/produse/${produs.slug}`}>
									<a onClick={() => closeProductMenu()}>
										<div className="flex justify-center  border gap-2 p-6  ">
											<div className="flex flex-col  p-2 gap-4 text-center">
												<div className="flex  items-center justify-center">
													<Image
														src={produs.image}
														layout=""
														width={80}
														height={80}
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
