import Icon1 from "../assets/landing-page/section-3/image-1.svg";
import Icon2 from "../assets/landing-page/section-3/image-2.svg";
import Icon3 from "../assets/landing-page/section-3/image-3.svg";

import Icon4 from "../assets/landing-page/section-5/image-1.svg";
// import Icon5 from "../assets/landing-page/section-5/image-2.svg";
import Icon6 from "../assets/landing-page/section-5/image-3.svg";

export type section3 = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type section51 = {
  id: number;
  title: string;
};

export type section52 = {
  id: number;
  icon: string;
  description: string;
};

export const Section52: section52[] = [
  {
    id: 1,
    icon: Icon4,
    description:
      "This program equips you with the essential skills and knowledge to create visually appealing websites or applications.",
  },
  {
    id: 2,
    icon: Icon4,
    description:
      "Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.",
  },
  {
    id: 3,
    icon: Icon6,
    description:
      "Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.",
  },
];

export const Section5: section51[] = [
  {
    id: 1,
    title: "Front End Developer",
  },
  {
    id: 2,
    title: "Back END Developer",
  },
  {
    id: 3,
    title: "QUALITY ASSURANCER",
  },
  {
    id: 4,
    title: "UI/UX DESIGN",
  },
];

export const Section3: section3[] = [
  {
    id: 1,
    icon: Icon1,
    title: "Global Credibility Boost",
    description:
      "Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Global Credibility Boost",
    description:
      "Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Global Credibility Boost",
    description:
      "Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.",
  },
];
