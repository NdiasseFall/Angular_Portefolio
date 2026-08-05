import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience, Formation, Skill, Language, SoftSkill, Projet } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  private experiences: Experience[] = [
    {
      id: 'exp-1',
      title: 'Membre du Jury Technique Web',
      company: 'Université Numérique Cheikh Hamidou Kane (UN-CHK)',
      location: 'Diamniadio, Dakar — Sénégal',
      startDate: '2024',
      endDate: '2025',
      description:
        "En tant qu'étudiant développeur web, j'ai rejoint le jury technique chargé d'évaluer les projets front-end de mes pairs. Cette expérience m'a permis de consolider mes bases en HTML, CSS et JavaScript tout en apprenant à analyser du code avec un regard critique et bienveillant.",
      missions: [
        'Évaluation de projets étudiants basés sur HTML, CSS et JavaScript',
        "Création d'une grille d'évaluation stricte axée sur la propreté du code, la maîtrise du DOM et l'intégration",
        'Vérification de la structure sémantique des pages et du respect des bonnes pratiques web',
        'Analyse de la responsivité et de la cohérence visuelle des interfaces soumises',
        'Rédaction de retours constructifs pour aider les candidats à progresser',
        'Harmonisation des critères de notation avec les autres membres du jury',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM', 'Responsive Design'],
    },
    {
      id: 'exp-2',
      title: 'Président de la commission de l’organisation',
      company: 'Club Informatique — Développement Web, Mobile & Gaming (DWMG)',
      location: 'Diamniadio, Dakar — Sénégal',
      startDate: '2024',
      endDate: 'Présent',
      description:
        "Au sein du club informatique de mon université, je coordonne la vie associative autour du numérique. En tant que débutant motivé, j'ai choisi ce rôle pour apprendre l'organisation d'événements tout en créant un environnement où chacun peut partager ses compétences et progresser ensemble.",
      missions: [
        'Planification et coordination des événements techniques et rassemblements du club',
        'Promotion du travail en équipe et de la collaboration interdisciplinaire',
        'Organisation de sessions de partage entre membres débutants et plus avancés',
        'Coordination logistique des ateliers pratiques (web, mobile, gaming)',
        'Encouragement des membres à présenter leurs premiers projets devant le groupe',
        'Animation de réunions hebdomadaires pour faire le suivi des activités du club',
      ],
      technologies: ['Organisation', 'Communication', 'Travail d’équipe', 'Google Workspace'],
    },
    {
      id: 'exp-3',
      title: 'Adjoint de la commission des finances',
      company: 'Club Informatique — Développement Web, Mobile & Gaming (DWMG)',
      location: 'Diamniadio, Dakar — Sénégal',
      startDate: '2023',
      endDate: '2024',
      description:
        "Premier engagement au sein du club : j'ai accompagné la gestion financière des activités étudiantes. Un rôle concret qui m'a sensibilisé à la rigueur, à la transparence et à la planification — des qualités utiles autant en gestion de projet qu'en développement.",
      missions: [
        'Suivi des dépenses et recettes liées aux activités et événements du club',
        'Élaboration de budgets prévisionnels pour les ateliers et rassemblements',
        'Collaboration avec la commission organisation pour estimer les coûts des activités',
        'Tenue d’un registre financier clair et accessible aux membres du bureau',
        'Appui à la recherche de sponsors et partenariats pour financer les projets du club',
        'Participation aux réunions de bureau pour garantir une gestion transparente des fonds',
      ],
      technologies: ['Google Sheets', 'Excel', 'Budgétisation', 'Suivi financier'],
    },
  ];
  private projets: Projet[] = [
    {
      id: 'pro-1',
      title: 'ERP Scolaire',
      description: 'Projet de Fin d’Études',
      image: 'images/PFE.png',
      missions: [
        'Conception globale de l’architecture logicielle et de la base de données relationnelle (UML, Merise, SQL)',
        "Mise en œuvre de solutions ergonomiques pour améliorer l'expérience utilisateur",
        'Développement du backend sous Laravel et interface utilisateur sous React intégrant FullCalendar.js',
        'Implémentation de la gestion des cours, plannings, notes et profils utilisateurs en temps réel',
        'Développement et implémentation de fonctionnalités spécifiques',
      ],
      technologies: ['Laravel', 'React', 'Figma', 'MySQL'],
      liens: {
        github: 'https://github.com/ndiasse-fall/PFE_Saytu_Edu.git',
        figma:
          'https://www.figma.com/design/m8ograBWpi64aZtYV5y2Zu/ui-interface?node-id=0-1&t=N76E83m5O5zDRDcc-1',
      },
    },
    {
      id: 'pro-2',
      title: 'CV Facile',
      description: 'Plateforme SaaS de génération de CVs en ligne',
      image: 'images/CV_facile.png',
      missions: [
        'Conception de la base de données et développement backend avec le framework Laravel',
        'Intégration de mécanismes de génération dynamique de documents et paiements local',
        'Développement de fonctionnalités spécifiques',
        'Optimisation des performances et du référencement SEO',
        'Maintenance du site web',
      ],
      technologies: ['Lovable', 'Payment API PayTech'],
      liens: {
        github: 'https://github.com/NdiasseFall/cv-facile.git',
        site: 'https://cv-facile.lovable.app',
      },
    },
    {
      id: 'pro-4',
      title: 'Sen Stock',
      description: 'Plateforme Gestion de stock',
      image: 'images/PFE.png',
      missions: [
        'Développement complet de l’architecture et des spécifications de la plateforme',
        'Mise en place de rôles sécurisés multi-utilisateurs (Administrateur, Caissier, Gestionnaire de stock)',
      ],
      technologies: ['Laravel', 'Angular', 'MySQL'],
      liens: {
        github: 'https://github.com/NdiasseFall/sen_stock.git',
      },
    },
    {
      id: 'pro-3',
      title: 'Alloh Learning',
      description: 'Design Plateforme E-learning inclusive (Figma, UX)',
      image: 'images/Alloh.png',
      missions: [
        'Recherche UX approfondie : création de personas, parcours utilisateurs et matrices MoSCoW',
        'Architecture pensée pour des conditions de faible bande passante et d’accès hors ligne',
      ],
      technologies: ['Figma'],
      liens: {
        figma:
          'https://www.figma.com/design/A9HTkM1eiIWmnBgOH63R9j/Alloh-Learning?node-id=0-1&t=m6fxrrCKu333S8Vw-1',
      },
    },
  ];

  private formations: Formation[] = [
    {
      id: 'form-1',
      type: 'degree',
      title: "Licence Informatique - Développement d'Applications web / mobile & gaming",
      institution: 'Université Numerique Cheikh Hamidou Kane (UNCHK)',
      startYear: 2023,
      endYear: 2026,
      mention: 'mention bien',
    },
  ];

  private skills: Skill[] = [
    // Front-end
    {
      id: 'skill-1',
      category: 'Outils & Languages',
      name: 'JavaScript',
      icon: 'images/javascript.svg',
    },
    { id: 'skill-2', category: 'Outils & Languages', name: 'PHP', icon: 'images/php.svg' },
    { id: 'skill-3', category: 'Outils & Languages', name: 'Java', icon: 'images/java.svg' },
    {
      id: 'skill-4',
      category: 'Outils & Languages',
      name: 'Bootstrap',
      icon: 'images/bootstrap.svg',
    },
    {
      id: 'skill-5',
      category: 'Outils & Languages',
      name: 'Tailwind CSS',
      icon: 'images/tailwindcss.svg',
    },
    { id: 'skill-6', category: 'Outils & Languages', name: 'React JS', icon: 'images/react.svg' },
    { id: 'skill-7', category: 'Outils & Languages', name: 'Angular', icon: 'images/angular.svg' },
    { id: 'skill-8', category: 'Outils & Languages', name: 'Laravel', icon: 'images/laravel.svg' },
    { id: 'skill-9', category: 'Outils & Languages', name: 'SQL', icon: 'images/sql.svg' },
    { id: 'skill-10', category: 'Outils & Languages', name: 'SQLite', icon: 'images/sqlite.svg' },
    { id: 'skill-11', category: 'Outils & Languages', name: 'Flutter', icon: 'images/flutter.svg' },
    { id: 'skill-12', category: 'Outils & Languages', name: 'Swift UI', icon: 'images/swift.svg' },
    { id: 'skill-13', category: 'Outils & Languages', name: 'Ionic', icon: 'images/ionic.svg' },
    {
      id: 'skill-14',
      category: 'Outils & Languages',
      name: 'WordPress',
      icon: 'images/wordpress.svg',
    },
    { id: 'skill-15', category: 'Outils & Languages', name: 'Moodle', icon: 'images/moodle.png' },
    { id: 'skill-16', category: 'Outils & Languages', name: 'Figma', icon: 'images/figma.svg' },
  ];

  private languages: Language[] = [
    { id: 'lang-1', name: 'Français', level: 'courant' },
    { id: 'lang-2', name: 'Anglais', level: 'basique' },
  ];

  private softSkills: SoftSkill[] = [
    { id: 'soft-1', name: 'Rédaction' },
    { id: 'soft-2', name: 'Communication' },
    { id: 'soft-3', name: 'Coordination' },
    { id: 'soft-4', name: 'Planification' },
    { id: 'soft-5', name: 'Créativité' },
  ];

  private experiencesSubject = new BehaviorSubject<Experience[]>(this.experiences);
  private projetsSubject = new BehaviorSubject<Projet[]>(this.projets);
  private formationsSubject = new BehaviorSubject<Formation[]>(this.formations);
  private skillsSubject = new BehaviorSubject<Skill[]>(this.skills);
  private languagesSubject = new BehaviorSubject<Language[]>(this.languages);
  private softSkillsSubject = new BehaviorSubject<SoftSkill[]>(this.softSkills);

  experiences$: Observable<Experience[]> = this.experiencesSubject.asObservable();
  projets$: Observable<Projet[]> = this.projetsSubject.asObservable();
  formations$: Observable<Formation[]> = this.formationsSubject.asObservable();
  skills$: Observable<Skill[]> = this.skillsSubject.asObservable();
  languages$: Observable<Language[]> = this.languagesSubject.asObservable();
  softSkills$: Observable<SoftSkill[]> = this.softSkillsSubject.asObservable();

  getExperiences(): Experience[] {
    return this.experiences;
  }
  getProjets(): Projet[] {
    return this.projets;
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
