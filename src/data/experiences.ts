// data/experiences.ts
import {ConcreteExperienceItem} from "@/lib/types/experienceItem";

export const experiences: ConcreteExperienceItem[] = [
    {
        role: "Desarrollador",
        company: "Autonomo",
        startDate: new Date(2026,0, 1),
        description: "Desarrollo de juegos para activaciones de marketing, creando mometos divertidos y ayudando a conectar a las empresas con las personas.",
        achievements: [
            "Desarrollo end-to-end de aplicaciones",
        ],
        skills: [
            "Frontend",
            "Backend",
            "Relevamiento"
        ],
    },
    {
        role: "Analista Funcional",
        company: "Tenaris",
        startDate: new Date(2023,10, 1),
        endDate: new Date(2025, 11, 1),
        description: "Relevamiento de proceso y nuevos requerimientos para sistemas de porteria y clasificacion de chatarra para la planta industrial Siderca," +
            " diseño de nuevas funcionalidades." +
            " Migracion de sistemas de Mexico a Argentina, mergeando con las funcionalidades de los sistemas actuales." +
            " Ademas, realice tareas de Soporte en aplicaciones SAP.",
        achievements: [
            "Relevamiento de procesos tanto de la planta industrial de Mexico como de Argentina para un correcto diseño",
            "Implemetacion de nuevo sistema de Porteria para la planta industrial Siderca",
            "Implementacion de nuevo sistema de clasificacion de chatarra para la planta industrial Siderca",
            "Resolucion de incidencias"
        ],
        skills: [
            "Analisis funcional",
            "Modelado de datos",
            "Relevamiento"
        ],
    },
];
