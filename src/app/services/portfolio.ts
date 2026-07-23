import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience, Formation, Skill, Language, SoftSkill } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  private experiences: Experience[] = [
    {
      id: 'exp-1',
      title: 'Assistant Développeur web',
      company: 'Université numérique Cheikh Hamidou KANE (UN-CHK)',
      location: 'Diamniadio, Dakar - Sénégal',
      startDate: 'Mars 2023',
      endDate: 'Février 2025',
      description: 'Assistance au service web sur des projets existants et nouveaux',
      missions: [
        "Conception d'architecture et création d'éléments graphiques",
        "Mise en œuvre de solutions ergonomiques pour améliorer l'expérience utilisateur",
        'Développement et implémentation de fonctionnalités spécifiques',
        'Optimisation des performances techniques et du référencement SEO',
        'Maintenance corrective, évolutive et adaptative',
      ],
      technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
      reference: {
        name: 'M. SARR',
        email: 'mohamed1.sarr@unchk.edu.sn',
      },
    },
    {
      id: 'exp-2',
      title: 'Webmaster',
      company:
        "Réseau pour l'Excellence de l'Enseignement Supérieur en Afrique de l'Ouest (REESAO)",
      location: 'Dakar - Sénégal',
      startDate: 'Mai 2025',
      endDate: 'Présent',
      description: 'Administration du site web REESAO',
      missions: [
        "Intégration de contenus et création d'interface UIs",
        "Gestion de l'ergonomie du UX et du Responsive",
        'Développement de fonctionnalités spécifiques',
        'Optimisation des performances et du référencement SEO',
        'Maintenance du site web',
      ],
      technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
      reference: {
        name: 'Pr. I. MOUMOULA',
        email: 'moumoula_i@yahoo.com',
      },
    },
  ];

  private formations: Formation[] = [
    {
      id: 'form-1',
      type: 'degree',
      title:
        "Master Informatique en Conception et Développement d'Applications web & mobile, Full Stack",
      institution: 'Université (ENO)',
      startYear: 2023,
      endYear: 2025,
      mention: 'mention bien',
    },
    {
      id: 'form-2',
      type: 'degree',
      title: "Licence Informatique - Développement d'Applications web & mobile",
      institution: 'Université (ENO)',
      startYear: 2018,
      endYear: 2022,
      mention: 'mention bien',
    },
  ];

  private skills: Skill[] = [
    // Front-end
    {
      id: 'skill-1',
      category: 'Front-end',
      name: 'JavaScript',
      icon: '🟨',
    },
    { id: 'skill-2', category: 'Front-end', name: 'Bootstrap', icon: '🟣' },
    { id: 'skill-3', category: 'Front-end', name: 'React JS', icon: '⚛️' },
    { id: 'skill-4', category: 'Front-end', name: 'Angular', icon: '🅰️' },
    // Back-end
    { id: 'skill-5', category: 'Back-end', name: 'PHP', icon: '🐘' },
    { id: 'skill-6', category: 'Back-end', name: 'Laravel', icon: '🎨' },
    {
      id: 'skill-7',
      category: 'Back-end',
      name: 'Spring Boot',
      icon: '🌱',
    },
    // Base de données
    { id: 'skill-8', category: 'Base de données', name: 'SQL', icon: '🗄️' },
    {
      id: 'skill-9',
      category: 'Base de données',
      name: 'MySQL',
      icon: '🗄️',
    },
    {
      id: 'skill-10',
      category: 'Base de données',
      name: 'Oracle',
      icon: '🗄️',
    },
    // Langages de programmation
    { id: 'skill-11', category: 'Langages', name: 'Python', icon: '🐍' },
    { id: 'skill-12', category: 'Langages', name: 'C', icon: '⚙️' },
    { id: 'skill-13', category: 'Langages', name: 'Java', icon: '☕' },
    // CI/CD
    { id: 'skill-14', category: 'CI/CD', name: 'GitHub', icon: '🐙' },
    { id: 'skill-15', category: 'CI/CD', name: 'GitLab', icon: '🦊' },
    { id: 'skill-16', category: 'CI/CD', name: 'Docker', icon: '🐳' },
    // Mobiles
    { id: 'skill-17', category: 'Mobiles', name: 'Flutter', icon: '📱' },
    { id: 'skill-18', category: 'Mobiles', name: 'Kotlin', icon: '📱' },
    { id: 'skill-19', category: 'Mobiles', name: 'Swift UI', icon: '🍎' },
    // CMS
    { id: 'skill-20', category: 'CMS', name: 'WordPress', icon: 'W' },
    { id: 'skill-21', category: 'CMS', name: 'Drupal', icon: 'D' },
    { id: 'skill-22', category: 'CMS', name: 'Moodle', icon: 'M' },
  ];

  private languages: Language[] = [
    { id: 'lang-1', name: 'Français', level: 'courant' },
    { id: 'lang-2', name: 'Anglais', level: 'courant' },
  ];

  private softSkills: SoftSkill[] = [
    { id: 'soft-1', name: 'Rédaction' },
    { id: 'soft-2', name: 'Communication' },
    { id: 'soft-3', name: 'Coordination' },
    { id: 'soft-4', name: 'Planification' },
    { id: 'soft-5', name: 'Créativité' },
  ];

  private experiencesSubject = new BehaviorSubject<Experience[]>(this.experiences);
  private formationsSubject = new BehaviorSubject<Formation[]>(this.formations);
  private skillsSubject = new BehaviorSubject<Skill[]>(this.skills);
  private languagesSubject = new BehaviorSubject<Language[]>(this.languages);
  private softSkillsSubject = new BehaviorSubject<SoftSkill[]>(this.softSkills);

  experiences$: Observable<Experience[]> = this.experiencesSubject.asObservable();
  formations$: Observable<Formation[]> = this.formationsSubject.asObservable();
  skills$: Observable<Skill[]> = this.skillsSubject.asObservable();
  languages$: Observable<Language[]> = this.languagesSubject.asObservable();
  softSkills$: Observable<SoftSkill[]> = this.softSkillsSubject.asObservable();
  getExperiences(): Experience[] {
    return this.experiences;
  }

  getFormations(): Formation[] {
    return this.formations;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  getSoftSkills(): SoftSkill[] {
    return this.softSkills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((s) => s.category === category);
  }

  getSkillCategories(): string[] {
    return [...new Set(this.skills.map((s) => s.category))];
  }
}
