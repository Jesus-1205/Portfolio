export interface Certification {
    name: string;
    issuer: 'DataCamp' | 'freeCodeCamp';
    date: string;
    credentialId?: string;
    verificationUrl: string;
    workloadOrType: string;
    competencies: string[];
}

export const certifications: Certification[] = [
    {
        name: "Relational Database Developer Certification",
        issuer: "freeCodeCamp",
        date: "14 de Septiembre, 2026",
        verificationUrl: "https://freecodecamp.org/certification/jesus-1205/relational-databases-v9",
        workloadOrType: "~300 horas de proyectos prácticos",
        competencies: ["PostgreSQL", "SQL Relacional Avanzado", "Bash Scripting", "Git", "Modelado de Datos"]
    },
    {
        name: "SQL Associate Certification",
        issuer: "DataCamp",
        date: "12 de Junio, 2026",
        credentialId: "SQA0013749388160",
        verificationUrl: "https://www.datacamp.com/certificate/SQA0013749388160",
        workloadOrType: "Examen Profesional Certificado",
        competencies: ["Optimización de Consultas", "Subqueries", "JOINs", "Agregaciones Complejas"]
    },
    {
        name: "JavaScript Developer Certification",
        issuer: "freeCodeCamp",
        date: "24 de Agosto, 2026",
        verificationUrl: "https://freecodecamp.org/espanol/certification/jesus-1205/javascript-v9",
        workloadOrType: "~300 horas de programación práctica",
        competencies: ["ES6+", "Algoritmos y Estructuras de Datos", "POO", "Programación Funcional"]
    },
    {
        name: "GitHub Foundations",
        issuer: "DataCamp",
        date: "03 de Junio, 2026",
        credentialId: "Statement #862,499",
        verificationUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/c6004cb53a4bcfb5ad507698f90bddbce187c35c",
        workloadOrType: "9 horas de especialización",
        competencies: ["GitHub Actions", "Estrategias de Branching", "CI/CD", "Control de Versiones"]
    }
];