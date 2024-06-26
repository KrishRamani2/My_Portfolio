import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: process.env.Github },
  { icon: <FaLinkedinIn />, path: process.env.LinkedIn },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {/* {socials.map((item, index) => (
      <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
    ))} */}
    <Link href="https://github.com/KrishRamani2" className={iconStyles}>
      <FaGithub />
    </Link>
    <Link href="https://www.linkedin.com/in/krishramani/" className={iconStyles}>
      <FaLinkedinIn />
    </Link>
  </div>
);

export default Social;