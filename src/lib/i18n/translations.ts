export type Locale = "es" | "en";

export const translations = {
    es: {
        nav: {
            projects: "Proyectos",
            experience: "Experiencia",
            about: "Sobre mí",
            contact: "Contacto",
        },
        hero: {
            welcome: "Bienvenido a mi perfil !",
            role: "Full Stack Developer / Analista funcional",
            bio: "Soy desarrollador Full Stack y game developer. Mi experiencia en Analisis funcional me da un perfil orientado al negocio y a la satisfaccion del usuario. Ademas, en mis tiempos libres soy musico y amante de la calistenia!",
            contactCta: "Contacto",
            cvCta: "Descargar CV",
            projectsCta: "Ver proyectos",
        },
        experience: {
            title: "Experiencia",
            present: "Actualidad",
            achievements: "Logros obtenidos",
        },
        projects: {
            title: "Proyectos",
            filterPlaceholder: "Filtrar por lenguaje",
            all: "Todos",
            starred: "Destacados",
            empty: "No hay proyectos para este lenguaje.",
            viewOnGithub: "Ver en GitHub",
        },
        about: {
            title: "Sobre mí",
            intro: "Más allá del código: toco varios instrumentos y entreno calistenia hace años. Son disciplinas que, como programar, se construyen a base de práctica constante y de encontrarle la vuelta a algo hasta que sale bien — esa mezcla de análisis, creatividad y disciplina es la que llevo a cada proyecto.",
            dev: {
                title: "Desarrollo",
                text: "Relevo, diseño y programo soluciones end-to-end, siempre pensando en el negocio y en la experiencia de quien las usa.",
            },
            music: {
                title: "Música",
                text: "Soy multiinstrumentista (piano y guitarra). Tocar me enseñó a el valor de la disciplina y el trabajo constante.",
            },
            calisthenics: {
                title: "Calistenia",
                text: "Entreno calistenia como hábito de constancia y superación personal "
                //    "— la misma lógica de fijarme objetivos, medir progreso y no bajar los brazos que aplico cuando encaro un problema técnico difícil.",
            },
        },
        contact: {
            title: "¿Hablamos?",
            body: "Si tenés un proyecto, una idea o simplemente querés contactarme, escribime sin compromiso.",
            cta: "Contactarme",
            openClient: "Abrir con mi cliente de correo",
        },
        backToTop: "Ir al cielo",
    },
    en: {
        nav: {
            projects: "Projects",
            experience: "Experience",
            about: "About me",
            contact: "Contact",
        },
        hero: {
            welcome: "Welcome to my profile!",
            role: "Full Stack Developer / Functional Analyst",
            bio: "I'm a Full Stack developer and game developer. My background in functional analysis gives me a business- and user-focused mindset. In my free time I'm also a musician and a calisthenics enthusiast!",
            contactCta: "Contact",
            cvCta: "Download CV",
            projectsCta: "View projects",
        },
        experience: {
            title: "Experience",
            present: "Present",
            achievements: "Achievements",
        },
        projects: {
            title: "Projects",
            filterPlaceholder: "Filter by language",
            all: "All",
            starred: "Starred",
            empty: "No projects for this language.",
            viewOnGithub: "View on GitHub",
        },
        about: {
            title: "About me",
            intro: "Beyond the code: I play several instruments and I've been training calisthenics for years. Like programming, both are built through constant practice and figuring things out until they click — that mix of analysis, creativity and discipline is what I bring to every project.",
            dev: {
                title: "Development",
                text: "Full Stack developer with a Functional Analyst background: I gather requirements, design and build end-to-end solutions, always keeping the business and the end user in mind.",
            },
            music: {
                title: "Music",
                text: "I'm a multi-instrumentalist (piano and guitar, among others) and taught private lessons for several years. Playing taught me to practice with patience and to communicate ideas simply.",
            },
            calisthenics: {
                title: "Calisthenics",
                text: "I train calisthenics as a habit of consistency and self-improvement — the same mindset of setting goals, tracking progress and not giving up that I bring to tough technical problems.",
            },
        },
        contact: {
            title: "Let's talk?",
            body: "If you have a project, an idea, or just want to get in touch, feel free to reach out.",
            cta: "Contact me",
            openClient: "Open with my mail client",
        },
        backToTop: "Back to top",
    },
} as const;

export type TranslationKey = string;
