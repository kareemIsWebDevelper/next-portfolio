import Image from "next/image";
import kareem from "../../assets/images/kareem.png";
import Typewriter from "@/app/components/Typewriter";
import {ScrollAnimation} from "@/app/utils/ScrollAnimation";

export const Hero = () => {
	return (
		<ScrollAnimation>
			<section id="about">
				<article>
					<Image
						src={kareem}
						alt="kareem"
						width={175}
						height={175}
						className="img"
					/>
					<div>
						<h1 className="header">Hi, i&apos;m kareem</h1>
						<div className="bio">
							<Typewriter />
							<div className="info">
								{info.map(info => (
									<p key={info}>{info}</p>
								))}
							</div>
						</div>
						<a href="#contact" id="contactBtn">Contact Me</a>
					</div>
				</article>
			</section>
		</ScrollAnimation>
	);
};

const info = [
	"Skilled fullstack developer with three",
	"years of experience in designing and",
	"and developing web applications at",
	"client-side and server-side"
];