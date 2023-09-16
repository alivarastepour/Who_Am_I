const getDuration = (date: string) => {
  const [start, end] = date.replaceAll(" ", "").split("-");

  const durationRange = new Date(
    // @ts-ignore
    (end === "present" ? new Date() : new Date(end)) - new Date(start)
  );

  const month = durationRange.getMonth();
  const year = durationRange.getFullYear() - 1970;
  const duration = `${
    year > 0
      ? `${year} year${year > 1 ? "s" : ""} ${month > 0 ? "and" : ""}`
      : ""
  }${month > 0 ? `${month} month${month > 1 ? "s" : ""}` : ""}`;
  return duration;
};

export const EXPERIENCE_DATA = [
  {
    id: 0,
    duration: {
      georgian: "june 2023 - present",
      jalali: "tir 1402 - present",
      length: "",
    },
    company: {
      name: "Parsimap",
      homepage: "https://www.parsimap.ir/",
      logo: "/parsimap-logo.svg",
      industry: "Infrastructure, Location-based services and GIS solutions",
      about: `Parsimap Intelligence is a platform for developing location-based systems,
    providing the building blocks to add location features like maps, search, reverse geocode and
    analytical maps.`,
    },
    location: {
      region: "Tehran, tehran",
      type: "hybrid",
    },
    description:
      "As a front-end developer at Parsimap, I have been responsible for developing a couple of projects under the supervision of my mentor. I have developed a platform that allows Parsimap to write documents for their services. The main challenge in this project was finding and integrating a suitable WYSIWYG editor into a NextJS project. Furthermore, I have been responsible for refactoring some of Parsimap's legacy projects, which proved to be a demanding task since technology has changed a lot since then. This opportunity allowed me to assess my capabilities in rebuilding a project from scratch.",
    techStack: [
      "Javascript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "MUI",
      "Redux",
    ],
  },
  {
    id: 3,
    duration: {
      georgian: "september 2022 - june 2023",
      jalali: "mehr 1401 - khordad 1402",
      length: "",
    },
    company: {
      name: "Teaching assistant",
      homepage: "https://www.sbu.ac.ir/",
      logo: "/sbu-logo.png",
      industry: "volunteer work",
      about: "",
    },
    location: {
      region: "Tehran, tehran",
      type: "hybrid",
    },
    description:
      "While serving as a teaching assistant at SBU, a significant aspect of my role involved crafting innovative and demanding assignments for the students. These assignments encompassed a wide array of topics, ranging from fundamental programming concepts to advanced topics such as Object-Oriented Programming (OOP), Test-Driven Development (TDD), file and I/O operations, and socket programming, among others. The experience of being a teaching assistant not only allowed me to help students but also enriched my own learning journey, making it a valuable and rewarding experience.",
    techStack: ["C", "C++", "java"],
  },
  {
    id: 1,
    duration: {
      georgian: "september 2022 - present",
      jalali: "shahrivar 1401 - present",
      length: "",
    },
    company: {
      name: "Freelancing",
      homepage: undefined,
      logo: "/freelancing-logo.svg",
      industry: "self-employed",
      about: "",
    },
    location: {
      region: undefined,
      type: undefined,
    },
    description:
      "I've had the opportunity to engage in several freelancing projects, each offering unique challenges. One such project involved enhancing a dashboard by implementing OAuth functionality and integrating a dark mode feature. In addition, I contributed to refining the user interface and client-side logic of a Converter library, exclusively using Vanilla JavaScript.",
    techStack: ["NextJS", "Javascript"],
  },
  {
    id: 2,
    duration: {
      georgian: "june 2022 - june 2023",
      jalali: "tir 1401 - khordad 1402",
      length: "",
    },
    company: {
      name: "Maktabkhooneh",
      homepage: "https://maktabkhooneh.org/",
      logo: "/maktabkhooneh-logo.webp",
      industry: "E-learning",
      about: `Maktabkhooneh is the biggest digital medium of virtual education in Iran. The goal of Maktabkhooneh is to make high quality education available to all Persian speakers.`,
    },
    location: {
      region: "Tehran, tehran",
      type: "remote",
    },
    description:
      "In my role as a mentor in Advanced ReactJS course, my responsibilities included assessing students' submissions. These submissions encompassed a variety of ReactJS projects with distinct focuses. Additionally, I provided guidance by addressing their questions related to ReactJS and its ecosystem.",
    techStack: ["ReactJS"],
  },
].map((item) => ({
  ...item,
  duration: { ...item.duration, length: getDuration(item.duration.georgian) },
}));
