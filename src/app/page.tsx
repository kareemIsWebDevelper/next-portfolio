"use client";
import {Hero} from "@/app/components/Hero";
import {NavBar} from "@/app/components/NavBar";
import {NavBarMenu} from "@/app/components/NavBarMenu";
import {useState} from "react";
import {Skills} from "@/app/components/Skills";
import {ProjectCard} from "@/app/components/ProjectCard";
import {ContactForm} from "@/app/components/ContactForm";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <>
        <header>
            <NavBar
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            <NavBarMenu
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </header>
        <main>
            <Hero />
            <Skills />
            <ProjectCard />
            <ContactForm />
        </main>
        <footer>
            <p>© All Copyrights Preserved 2023</p>
            <p>Made With 💙 Kareem Khaled</p>
        </footer>
      </>
    );
};
