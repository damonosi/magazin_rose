import React, { useState, useEffect } from "react";

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
		}, 2000);

		console.log(activeIndex);
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
			className="overflow-hidden w-full">
			<ul
				className="whitespace-nowrap w-full transition-transform duration-300"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</ul>
			<div className="flex justify-center">
				<button
					className="m-2"
					onClick={() => {
						updateIndex(activeIndex - 1);
						console.log(activeIndex - 1);
					}}>
					Prev
				</button>
				{React.Children.map(children, (child, index) => {
					return (
						<button
							className={`${index === activeIndex ? "bg-black text-roz" : ""}`}
							onClick={() => updateIndex(index)}>
							{index + 1}
						</button>
					);
				})}
				<button
					className="m-2"
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Carousel;
