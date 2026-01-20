import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import Contact from "./(sections)/Contact";

export default function Home() {
    return (
        <div className="p-4 md:p-8">
            <Hero />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}
