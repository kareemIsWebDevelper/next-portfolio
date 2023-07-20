import Image from "next/image";
import ecommerce from "../../assets/projects/ecommerce.png";
import delivery from "../../assets/projects/delivery.png";
import blog from "../../assets/projects/blog.png";
import phonestore from "../../assets/projects/phonestore.png";
import homepage from "../../assets/projects/homepage.png";
import Link from "next/link";
import {ScrollAnimation} from "@/app/utils/ScrollAnimation";

export const ProjectCard = () => {
	return (
			<section id="projects">
				<h1 className="header">
					My Work
				</h1>
				<div className="flex justify-evenly flex-wrap gap-6 w-full content-around">
					{projects.map(project => (
						<ScrollAnimation key={project.id}>
							<div className="border shadow">
								<Image
									src={project.image}
									alt={project.name}
									width={320}
									height={250}
								/>
								<div className="p-4 tracking-tight text-left w-full">
									<h1 className="fw-bolder text-2xl dark:text-white mb-2">
										{project.name}
									</h1>
									<p className="text-slate-400">
										{project.tech}
									</p>
									<div className="w-full flex justify-between items-center gap-2 text-sm mt-4">
										<Link href={project.site} className="bg-teal-400 p-2 rounded text-white font-bold">
											Preview Site 🌐
										</Link>
										<Link href={project.repo} className="bg-blue-500 p-2 rounded text-white font-bold">
											View Code {'< / >'}
										</Link>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</section>
	);
};

const projects = [
	{id: 1, name: 'E-commerce', tech: 'ReactJs NodeJs, Tailwind', site: 'https://mern-ecommerce-blond.vercel.app/', repo: 'https://github.com/kareemIsWebDevelper/mern-ecommerce', image: ecommerce},
	{id: 2, name: 'Delivery Services', tech: 'ReactJs, Tailwind', site: 'https://react-portfolio-seven-zeta.vercel.app', repo: 'https://github.com/kareemIsWebDevelper/react-osa', image: delivery},
	{id: 3, name: 'Blog', tech: 'VueJs, Tailwind', site: 'https://kareemiswebdevelper.github.io/vue-add-post/', repo: 'https://github.com/kareemIsWebDevelper/vue-add-post', image: blog},
	{id: 4, name: 'Phone Store', tech: 'VueJs, Tailwind', site: 'https://phone-store-roan.vercel.app', repo: 'https://github.com/kareemIsWebDevelper/Phone-Store', image: phonestore},
]