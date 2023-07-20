'use client';
import Link from "next/link";
import Image from "next/image";
import menu from '../../assets/icons/menu.svg';
import moon from '../../assets/icons/moon.svg';
import sun from '../../assets/icons/sun.svg';
import {useEffect, useState} from "react";

type NavBarProps = {
	isVisible: boolean;
	setIsVisible: any;
}

export const NavBar = ({setIsVisible, isVisible}: NavBarProps) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const isDark = localStorage.getItem('theme') === 'dark';
		setIsDarkMode(isDark);

		if (isDark) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle('dark');
		const newTheme = isDarkMode ? 'light' : 'dark';
		localStorage.setItem('theme', newTheme);
	};

	return (
		<nav className="navBar">
			<div className="flex gap-4">
				<button>
					<Image
						onClick={() => {setIsVisible(!isVisible)}}
						src={menu}
						alt={'menu'}
						width={45}
						height={45}
						className="dark:invert"
					/>
				</button>
				<button
					onClick={() => window.scroll(0, 0)}
					style={{
						fontWeight: 'bolder',
						WebkitTextStroke: '5px',
						WebkitTextFillColor: 'transparent'
					}}
					className={
						"font-extrabold text-3xl textGradient"
					}
				>
					<Link href="/">K</Link>
				</button>
			</div>
			<button
				onClick={toggleTheme}
				className="relative rounded-2xl w-14 h-6 shadow-sm border"
			>
				<Image
					src={sun}
					alt="sun"
					width={28}
					height={28}
					className={`${
						isDarkMode ? 'hidden' : ''} 
						bg-black rounded-full scale-75 absolute top-1/2 -translate-y-1/2 left-0`}
				/>
				<Image
					src={moon}
					alt="sun"
					width={28}
					height={28}
					className={`${
						!isDarkMode ? 'hidden' : 'ml-8'}
						 bg-white rounded-full scale-75 absolute top-1/2 -translate-y-1/2 right-0`}
				/>
			</button>
		</nav>
	)
}