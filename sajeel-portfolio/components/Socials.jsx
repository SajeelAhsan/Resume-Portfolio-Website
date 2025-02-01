import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"

const socials = [
  {icon: <FaGithub />, path: "https://github.com/SajeelAhsan" },
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sajeel-ahsan2298/" },
  {icon: <SiLeetcode />, path: "https://leetcode.com/u/SajeelAhsan/"},
  {icon: <FaTwitter/>, path: "https://x.com/ahsan_sajeel786" },
  ];
  
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index)=> {
          return (
            <Link key={index} href={social.path} className={iconStyles}>
              {social.icon}   
            </Link>
          )
        })}
    </div>
  )
}

export default Social