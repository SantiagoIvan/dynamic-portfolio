import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import Contact from "./(sections)/Contact";
import {BackToTopButton} from "@/components/BackToTopButton";

export default function Home() {
    return (
        <div className="p-4 md:p-8 flex flex-col justify-center items-center">
            <Hero />
            <Projects />
            <Experience />
            <Contact />
            <BackToTopButton/>
        </div>
    );
}
