import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    PH,
    dq,
    K,
    gg,
    PL,
    WB,
    shopify,
    Silat,
    jobit,
    apps,
    app,
    tripguide,
    kaos,
    threejs,
    arch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: " React Web Developer",
      icon: web,
    },
    {
      title: "Next.JS interest",
      icon: mobile,
    },
    {
      title: "Full stack Person",
      icon: backend,
    },
    {
      title: "Java Script Programer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student In Collage",
      company_name: "Politeknik Harapan Bersama",
      icon: K,
      iconBg: "white",
      date: "2022",
      points: [
        "Taking Diploma on Information Technology (IT).",
        "learning a programming language for the first time.",
        "My main focus is on implementing AI technologies in websites and apps.",
        "Moreover, I aim to develop my critical thinking skills.",
      ],
    },
    {
      title: "Mobile Programing",
      company_name: "Plug-in",
      icon: PL,
      iconBg: "black",
      date: "2022",
      points: [
        "Creating Project Mobile Apps.",
        "Learn to using Linux as daily OS.",
        "Learn Postman as a backbone for apps.",
        "Restfull API project.",
      ],
    },
    {
      title: "Cyberscurity",
      company_name: "Google",
      icon: gg,
      iconBg: "grey",
      date: "7 Agustus 2023",
      points: [
        "Identify common risks, threats, and vulnerabilities, as well as techniques to mitigate them.",
        "Understand the importance of cybersecurity practices and their impact for organizations.",
        "Gain hands-on experience with Python, Linux, and SQL.",
        "Protect networks, devices, people, and data from unauthorized access and cyberattacks using Security Information and Event Management (SIEM) tools.",
      ],
    },
    {
      title: "Seminar",
      company_name: "Anyplatform",
      icon: WB,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Machine Learning with MySQL, 12 September 2023.",
        "Teknologi 3.0, 7 February 2022.",
        "WORKSHOP Mobie apps Development, 18 November 2022",
        "Digital Skill Fair 13.0 BACK-END WEB DEV, 13-17 Maret 2023 .",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Afkar proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Afkar does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Afkar optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ARCH-SSH",
      description:
        "People detection & recording features, incorporating TailwindCSS and OpenAI technology TensorflowJS.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "red-text-gradient",
        },
      ],
      image: arch,
      source_code_link: "https://www.youtube.com/watch?v=_pxvm6eX91k",
    },
    {
      name: "Job Finder",
      description:
        "Web & application that enables users to search for job openings, view for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: app,
      source_code_link: "https://github.com/GTmhyu/Job_apps",
    },
    {
      name: "Desain Kaos AI",
      description:
        "Many large corporations already use 3D graphics to showcase their products. Learn how to build your own ThreeJS 3D product website and infuse it with the power of artificial intelligence",
      tags: [
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: kaos,
      source_code_link: "https://www.youtube.com/watch?v=_C43Kpu2fKk",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };