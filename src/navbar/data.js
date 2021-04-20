import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
];

export const social = [
  { id: 1, url: "https://github.com/govind24agarwal", icon: <FaGithub /> },
  { id: 2, url: "in.com/in/govind-agarwal-080147120/", icon: <FaLinkedinIn /> },
  {
    id: 3,
    url: "https://www.facebook.com/govindagarwal24/",
    icon: <FaFacebookF />,
  },
  {
    id: 4,
    url: "https://www.instagram.com/govind_agarwal_24/",
    icon: <FaInstagram />,
  },
];
