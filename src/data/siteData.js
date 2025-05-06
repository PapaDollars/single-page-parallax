// src/data/siteData.js

export const navLinks = [
    { id: 1, text: "Accueil", url: "#" },
    { id: 2, text: "Fonctionnalités", url: "#features" },
    { id: 3, text: "À propos", url: "#about" },
    { id: 4, text: "Contact", url: "#contact" },
  ];
  
  export const heroData = {
    title: "Parallax Template",
    subtitle: "Un framework front-end moderne et responsive basé sur Material Design",
    buttonText: "Commencer",
    buttonUrl: "#features",
    backgroundImage: "../assets/images/background1.jpg"
  };
  
  export const featuresData = [
    {
      id: 1,
      icon: "flash_on",
      title: "Accélère le développement",
      description: "Nous avons fait la majeure partie du travail pour vous fournir des styles par défaut qui intègrent nos composants personnalisés. De plus, nous avons affiné les animations et transitions pour offrir une expérience plus fluide aux développeurs."
    },
    {
      id: 2,
      icon: "group",
      title: "Axé sur l'expérience utilisateur",
      description: "En utilisant les éléments et principes du Material Design, nous avons pu créer un framework qui intègre des composants et des animations qui fournissent plus de feedback aux utilisateurs. De plus, un système responsive unique sous-jacent sur toutes les plateformes permet une expérience utilisateur plus unifiée."
    },
    {
      id: 3,
      icon: "settings",
      title: "Facile à utiliser",
      description: "Nous avons fourni une documentation détaillée ainsi que des exemples de code spécifiques pour aider les nouveaux utilisateurs à démarrer. Nous sommes également toujours ouverts aux retours et pouvons répondre à toute question qu'un utilisateur peut avoir sur Materialize."
    }
  ];
  
  export const aboutData = {
    title: "À propos de nous",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
  };
  
  export const parallaxData = [
    {
      id: 1,
      text: "Un framework front-end moderne et responsive basé sur Material Design",
      backgroundImage: "../assets/images/background2.jpg"
    },
    {
      id: 2,
      text: "Un framework front-end moderne et responsive basé sur Material Design",
      backgroundImage: "../assets/images/background3.jpg"
    }
  ];
  
  export const contactData = {
    title: "Contactez-nous",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
  };
  
  export const footerData = {
    companyBio: {
      title: "À propos de l'entreprise",
      description: "Nous sommes une équipe d'étudiants universitaires qui travaillent sur ce projet comme si c'était notre emploi à temps plein. Tout montant aiderait à soutenir et à poursuivre le développement de ce projet et est grandement apprécié."
    },
    settings: {
      title: "Paramètres",
      links: [
        { id: 1, text: "Lien 1", url: "#!" },
        { id: 2, text: "Lien 2", url: "#!" },
        { id: 3, text: "Lien 3", url: "#!" },
        { id: 4, text: "Lien 4", url: "#!" },
      ]
    },
    connect: {
      title: "Connectez-vous",
      links: [
        { id: 1, text: "Lien 1", url: "#!" },
        { id: 2, text: "Lien 2", url: "#!" },
        { id: 3, text: "Lien 3", url: "#!" },
        { id: 4, text: "Lien 4", url: "#!" },
      ]
    },
    copyright: {
      text: "Made by",
      link: {
        text: "Materialize",
        url: "http://materializecss.com"
      }
    }
  };