import React, { useState, useEffect } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

export const CarouselItem = ({ children, width }) => {
	return (
		<li
			className="inline-flex  items-center justify-center h-auto "
			style={{ width: width }}>
			{children}
		</li>
	);
};

const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 6000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});
	return (
		<div
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			className=" flex border items-center justify-center flex-col overflow-hidden max-w-md p-6 relative">
			<ul
				className="whitespace-nowrap w-full transition-transform duration-1000"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</ul>
			<div>
				<button
					className=" absolute left-0 top-1/2 transform  -translate-y-1/2 ml-6"
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}>
					<FiArrowLeftCircle />
				</button>

				<button
					className=" absolute right-0 top-1/2 transform  -translate-y-1/2 mr-6"
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}>
					<FiArrowRightCircle />
				</button>
			</div>
		</div>
	);
};

export default Carousel;



// adauga butoane index produse
//   <div	id="index"	className="absolute bottom-0 left-1/2 transform  -translate-x-1/2">
// {React.Children.map(children, (child, index) => {
// 	return (
// 		<button
// 			className={`${index === activeIndex ? "bg-black text-roz" : ""}`}
// 			onClick={() => updateIndex(index)}>
// 			{index + 1}
// 		</button>
// 	);
// })}
//   </div>