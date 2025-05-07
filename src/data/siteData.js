// src/data/siteData.js

export const navLinks = [
  { id: 1, text: "Accueil", url: "#" },
  { id: 2, text: "Services", url: "#features" },
  { id: 3, text: "À propos", url: "#about" },
  { id: 4, text: "Contact", url: "#contact" },
];

export const heroData = {
  title: "AgroInnovation",
  subtitle: "Des solutions agricoles modernes et durables pour nourrir demain",
  buttonText: "Découvrir nos services",
  buttonUrl: "#features",
};

export const featuresData = [
  {
    id: 1,
    icon: "flash_on",
    title: "Agriculture de précision",
    description: "Nos technologies de pointe permettent d'optimiser vos rendements agricoles tout en réduisant l'utilisation d'intrants. Grâce à des capteurs intelligents et à l'analyse de données, nous vous offrons des solutions adaptées à votre exploitation pour maximiser votre productivité."
  },
  {
    id: 2,
    icon: "group",
    title: "Pratiques agroécologiques",
    description: "Nous vous accompagnons dans la transition vers des pratiques agricoles plus durables. Notre approche intègre les principes de l'agroécologie pour préserver la biodiversité, améliorer la santé des sols et renforcer la résilience de votre exploitation face aux défis climatiques."
  },
  {
    id: 3,
    icon: "settings",
    title: "Accompagnement personnalisé",
    description: "Notre équipe d'experts agronomes vous propose un suivi sur mesure pour répondre à vos besoins spécifiques. De la planification des cultures à la commercialisation, nous sommes à vos côtés à chaque étape pour vous aider à développer une agriculture rentable et respectueuse de l'environnement."
  }
];

export const aboutData = {
  title: "Notre vision de l'agriculture",
  content: "Chez AgroInnovation, nous croyons en une agriculture qui concilie productivité et respect de l'environnement. Face aux défis alimentaires et climatiques actuels, nous développons des solutions innovantes qui permettent aux agriculteurs d'optimiser leurs pratiques tout en préservant les ressources naturelles. Notre équipe pluridisciplinaire associe expertise agronomique et technologies de pointe pour accompagner la transition vers des systèmes agricoles durables. Nous travaillons en étroite collaboration avec des exploitations de toutes tailles, des coopératives et des instituts de recherche pour créer un écosystème agricole résilient et équitable. Notre ambition est de contribuer à bâtir un avenir où l'agriculture nourrit sainement les populations tout en régénérant les écosystèmes."
};

export const parallaxData = [
  {
    id: 1,
    text: "Cultivons ensemble l'agriculture de demain",
  },
  {
    id: 2,
    text: "Des solutions innovantes pour une agriculture durable",
  }
];

export const contactData = {
  title: "Contactez nos experts",
  content: "Vous souhaitez en savoir plus sur nos services ou discuter de vos besoins spécifiques ? Notre équipe d'agronomes est à votre disposition pour vous accompagner dans le développement de votre exploitation. Que vous soyez en phase de transition vers des pratiques plus durables, à la recherche de solutions pour optimiser vos rendements ou simplement curieux d'en apprendre davantage sur nos approches innovantes, n'hésitez pas à nous contacter. Nous organisons également régulièrement des journées portes ouvertes et des ateliers pratiques sur différentes thématiques agricoles. Contactez-nous pour connaître les prochaines dates et vous inscrire."
};

export const footerData = {
  companyBio: {
    title: "À propos d'AgroInnovation",
    description: "AgroInnovation est une entreprise engagée dans le développement de solutions agricoles durables. Notre mission est d'accompagner les agriculteurs dans l'adoption de pratiques respectueuses de l'environnement tout en améliorant leur rentabilité. Nous croyons fermement que l'agriculture de demain doit être à la fois productive, résiliente et régénératrice."
  },
  settings: {
    title: "Nos services",
    links: [
      { id: 1, text: "Conseil agronomique", url: "#!" },
      { id: 2, text: "Agriculture de précision", url: "#!" },
      { id: 3, text: "Formation", url: "#!" },
      { id: 4, text: "Analyse de sols", url: "#!" },
    ]
  },
  connect: {
    title: "Restons connectés",
    links: [
      { id: 1, text: "Facebook", url: "#!" },
      { id: 2, text: "Twitter", url: "#!" },
      { id: 3, text: "Instagram", url: "#!" },
      { id: 4, text: "LinkedIn", url: "#!" },
    ]
  },
  copyright: {
    text: "Réalisé par",
    link: {
      text: "CONNECT EMERGENT",
      url: "http://groupemergent.vercel.app"
    }
  }
};