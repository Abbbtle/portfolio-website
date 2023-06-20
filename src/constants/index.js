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
    tailwind,
    git,
    figma,
    weberu,
    bonolo,
    nico,
    cut,
    billiard,
    walli,
    nomvo,
    uvu,
    orms,
    jam,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "WordPress Development",
      icon: mobile,
    },
    {
      title: "Front-end Web Devlopment",
      icon: web,
    },
    {
      title: "Graphics Design",
      icon: creator,
    },
    {
      title: "Content Creation",
      icon: backend,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
  ];
  
  const education = [
    {
      title: "National Diploma in Information Technology: Software Development",
      school_name: "Central University of Technology: Bloemfontein",
      icon: cut,
      iconBg: "#FFFFFF",
      date: "January 2016 - November 2019",
      points: [
        "Programming languages (e.g. Java, C#, JavaScript).",
        "Algorithms and data structures",
        "Object-oriented programming concepts (e.g. inheritance, polymorphism).",
        "Software design principles and patterns",
        "Mobile app development (Android Studio)",
        "Software project management (e.g. project planning, estimation, risk management)",
      ],
    },
    {
      title: "Creative Business 101 for Videographers",
      school_name: "ORMS Cape Town School of Photography",
      icon: orms,
      iconBg: "#FFFFFF",
      date: "August 2021 - September 2021",
      points: [
        "Understanding the video production process (e.g. pre-production, production, post-production).",
        "Business planning and budgeting for video projects.",
        "Branding and marketing for videographers.",
        "Legal and ethical considerations in videography (e.g. contracts, copyrights, model releases).",
        "Technical skills and techniques for video production (e.g. camera settings, lighting setups, editing software).",
        "Networking and collaboration in the videography industry.",
      ],
    },
  ];


  const experiences = [
    {
      title: "Founder",
      company_name: "Weberu",
      icon: weberu,
      iconBg: "#FFFFFF",
      date: "November 2021 - Present",
      points: [
        "Developing and maintaining web applications using WordPress, Elementor and other related technologies.",
        "Managing and executing social media campaigns across multiple platforms. They create content, monitor analytics, and engage with the audience.",
        "Creating engaging and high-quality content for social media platforms. This can include graphics, videos, blog posts, and other forms of content.",
        "Creating visually appealing graphics and designs for social media posts, ads, and other marketing materials.",
        "Managing client relationships, ensuring client satisfaction, and maintaining regular communication.",
        "Developing and implementing digital marketing strategies that align with the client's goals and objectives.",
        "Creating compelling and effective copy for social media posts, ads, and other marketing materials.",
        "Monitoring and analyzing social media data to track performance, identify trends, and make data-driven decisions.",
        "Generating new business leads, developing proposals, and closing deals.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "UVU Africa (CapaCiTi Division)",
      icon: uvu,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using HTML5, CSS3, JavaScript, Bootstrap, Python, MERN and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Supporting the design and development of software programs under the guidance of senior developers.",
        "Performing testing and debugging tasks to ensure the software runs efficiently and accurately.",
        "Work closely with other members of the development team to ensure that project tasks are being completed on time and within scope.",
        "Responsible for documenting your work and processes to ensure that other team members can understand and work on the code you write.",
        "Expected to participate in code reviews and provide feedback on other developers' work.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Kenneth does our graphical work, and since he's been on the team, our social media engagement has been though the roof!",
      name: "Bonolo Pitswane",
      designation: "President",
      company: "BYS Durban",
      image: bonolo,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kenneth does. I highly recommend him!",
      name: "Nico Ludek",
      designation: "Founder",
      company: "Empire Studios",
      image: nico,
    },
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kenneth proved me wrong.",
      name: "Nomvo Bam",
      designation: "Founder",
      company: "BABA Inc.",
      image: nomvo,
    },
  ];
  
  const projects = [
    {
      name: "J.A.M Consultanting",
      description:
        "Based in Fort Washington, USA, J.A.M Consulting is a business consultancy company that help new or inexperienced business owner reach new heights. Their main goal was to access the broader market online and get more engagement for their online seminars and courses. On this website you can connect with expert business consultants to help you diagnose your bisness to see how best to proceed and make more stable revenue. You can set appointments, attend seminars, read blog posts, and if you want you can request a website to be built for your business.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: jam,
      source_code_link: "https://meetjanicepatterson.com",
    },
    {
      name: "The Billiard Man",
      description:
        "The Billiard Man is a company that specialises in the repair, maintenance, and installation of billiard tables. The site provides information about the services they offer, as well as their contact information and location. The company claims to have extensive experience in the industry and to use high-quality materials and equipment in their work. The website also features a blog section with articles about various topics related to billiards.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: billiard,
      source_code_link: "https://thebilliardman.com",
    },
    {
      name: "Mridanga Walli",
      description:
        "Based in Italy, Mridanga Walli is an online Mridanga School aimed at assisting people learn how to play one of India great and ancient musical instruments, the Mridanga. The main goal here as mentioned was to facilitate online classes. Other objectives were to strengthen brand identity that can lead to murchandise sales one day, and also build a community for talented mridanga players to come and teach students earning them revenue while focuses on playing the Mridanga. They have 200± active students worldwide and through this website those numbers are rising",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: walli,
      source_code_link: "https://mridangawalli.com",
    },
  ];
  
  export { services, technologies, education, experiences, testimonials, projects };