import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 2, link: "mailto:rabiuahmed24@gmail.com", icon: <HiOutlineMail /> },
  {
    id: 3,
    link: "https://www.upwork.com/freelancers/~01daee33daec030945",
    icon: <SiUpwork />,
  },
  { id: 4, link: "https://wa.me/+2348028353243", icon: <FaWhatsapp /> },
];
