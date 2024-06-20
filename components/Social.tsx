

import Link from "next/link"
import {FaGithub,FaLinkedinIn,} from "react-icons/fa"

const socials=[
    {icon: <FaGithub />,path:process.env.Github},
    {icon:<FaLinkedinIn />,path:process.env.LinkedIn},
]
const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {/* {socials.map((item,index)=>{
        return (<Link key={index} href={item.path} className={iconStyles} >{item.icon}</Link>)
      })} */}
      <Link href="https://github.com/KrishRamani2" className={iconStyles}>
      <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/krishramani/" className={iconStyles}>
      <FaLinkedinIn />
      </Link>
    </div>
  )
}

export default Social
