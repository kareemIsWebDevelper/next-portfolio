import Image from "next/image";
import html from "../../assets/tech/html.png";
import css from "../../assets/tech/css.png";
import javascript from "../../assets/tech/javascript.png";
import typescript from "../../assets/tech/typescript.png";
import reactjs from "../../assets/tech/reactjs.png";
import nextJs from "../../assets/tech/nextJs.png";
import nodejs from "../../assets/tech/nodejs.png";
import redux from "../../assets/tech/redux.png";
import mongodb from "../../assets/tech/mongodb.png";
import git from "../../assets/tech/git.png";
import figma from "../../assets/tech/figma.png";
import {useEffect, useState} from "react";
import {ScrollAnimation} from "@/app/utils/ScrollAnimation";

export const Skills = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSlide = () => {
		slideTrigger();
	}

	useEffect(() => {
		const interval = setInterval(() => {
			slideTrigger();
		}, 2000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	const slideTrigger = () => {
		setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
	}

	return (
		<ScrollAnimation>
			<section id="skills">
				<h1 className="header">
					My Skills
				</h1>
				<div className="carousel">
					<div className="trigger">
						<button onClick={handleSlide} className="btn">{'<'}</button>
						<button onClick={handleSlide} className="btn">{'>'}</button>
					</div>
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							style={{ display: index === currentIndex ? "block" : "none" }}
							className="text-center"
						>
							<Image
								src={slide.image}
								alt="skill"
								width={150}
								height={150}
								className="py-4 md:w-72 md:h-72"
							/>
							<span className="caption">
							{slide.caption}
						</span>
						</div>
					))}
				</div>
			</section>
		</ScrollAnimation>
	);
};

const slides = [
	{id: 1, caption: 'HTML', image: html},
	{id: 2, caption: 'CSS', image: css},
	{id: 3, caption: 'JS', image: javascript},
	{id: 4, caption: 'TS', image: typescript},
	{id: 5, caption: 'ReactJs', image: reactjs},
	{id: 6, caption: 'NextJs', image: nextJs},
	{id: 7, caption: 'Redux', image: redux},
	{id: 8, caption: 'NodeJs', image: nodejs},
	{id: 9, caption: 'MongoDB', image: mongodb},
	{id: 10, caption: 'Git', image: git},
	{id: 11, caption: 'Figma', image: figma},
]