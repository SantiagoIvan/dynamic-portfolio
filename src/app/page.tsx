import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import About from "./(sections)/About";
import Contact from "./(sections)/Contact";
import {BackToTopButton} from "@/components/BackToTopButton";
import {getGithubRepos} from "@/services/github.service";

export default async function Home() {
    const projects = await getGithubRepos()
    return (
        <div className="px-6 py-4 md:p-8 flex flex-col justify-center items-center">
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <About />
            <Contact />
            <BackToTopButton/>
        </div>
    );
}
