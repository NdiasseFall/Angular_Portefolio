export interface Experience {
    id: string;
    title: string;
    company: string;
    logo?: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    missions: string[];
    projects?: string[];
    technologies: string[];
    reference?: {
        name: string;
        email: string;
    };
}

export interface Formation {
    id: string;
    type: "degree" | "certificate";
    title: string;
    institution: string;
    logo?: string;
    startYear: number;
    endYear: number;
    mention?: string;
}

export interface Skill {
    id: string;
    category: string;
    name: string;
    level?: number;
    description?: string;
    icon?: string;
}

export interface Language {
    id: string;
    name: string;
    level: "courant" | "intermédiaire" | "basique";
}

export interface SoftSkill {
    id: string;
    name: string;
}
