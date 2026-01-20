import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Experience from "./(sections)/Experience";
import Contact from "./(sections)/Contact";
import {BackToTopButton} from "@/components/BackToTopButton";
import {getGithubRepos} from "@/services/github.service";

export default async function Home() {
    const projects = await getGithubRepos()
    return (
        <div className="p-4 md:p-8 flex flex-col justify-center items-center">
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <Contact />
            <BackToTopButton/>
        </div>
    );
}
