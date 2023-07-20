import close from '../../assets/icons/close.svg';
import Image from "next/image";
import Link from "next/link";
import {SetStateAction, useState} from "react";

type NavBarMenuProps = {
	isVisible: boolean;
	setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const NavBarMenu = ({isVisible, setIsVisible}: NavBarMenuProps) => {
	return (
		<>
			{isVisible &&
				<div className="navBarMenu">
					<div className="navBarMenuHeader">
						<button
							onClick={() => window.scroll(0, 0)}
							className="font-extrabold text-3xl text-blue-500"
						>
							<Link
								href="/"
								className="flex place-items-center gap-2 "
								onClick={() => setIsVisible(!isVisible)}
							>
								<span
									style={{
										fontWeight: 'bolder',
										WebkitTextStroke: '5px',
										WebkitTextFillColor: 'transparent'
									}}
									className="textGradient"
								> K
								</span> |
								<span className="text-2xl text-blue-500">
									Home
								</span>
							</Link>
						</button>
						<button onClick={() => setIsVisible(!isVisible)}>
							<Image
								src={close}
								alt="close"
								width={35}
								height={35}
								className="dark:invert"
							/>
						</button>
					</div>
					<div className="navBarMenuText">
						<Link href="/" onClick={() => setIsVisible(!isVisible)}>Home</Link>
						<a href="#about" onClick={() => setIsVisible(!isVisible)}>About</a>
						<a href="#skills" onClick={() => setIsVisible(!isVisible)}>Skills</a>
						<a href="#projects" onClick={() => setIsVisible(!isVisible)}>Projects</a>
					</div>
				</div>
			}
		</>
	)
}