export type Locale = "es" | "en";

export const translations = {
    es: {
        nav: {
            projects: "Proyectos",
            experience: "Experiencia",
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
