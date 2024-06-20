"use client";
import {FaHtml5,FaCss3,FaJava,FaJs,FaReact,FaNodeJs,FaGitAlt,FaPython} from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs,SiTypescript,SiPostman,SiMongodb,SiMysql,SiDjango,SiRedux,SiFirebase,SiFlask,SiPostgresql,SiJquery} from 'react-icons/si'
import { TbBrandReactNative,TbCircleLetterC } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BiLogoCPlusPlus } from "react-icons/bi";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import { Tooltip,TooltipContent,TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';


const about={
  title:"About me",
  description:"Enthusiastic and motivated beginner MERN Stack Developer eager to kickstart a career in web developement. Passionate about learning and appyling new technologies to create innovative solutions.Seeking an entry-level position where I can contribute to projects while further developing my skills",
  info:[
    {
      fieldname:"Name",
      fieldValue:"Krish Ramani"
    },
    {
      fieldname:"Phone",
      fieldValue:"(+91) 7977713644"
    },
    {
      fieldname:"Experience",
      fieldValue:"1+ Years"
    },
    {
      fieldname:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldname:"Email",
      fieldValue:"krishramani02@gmail.com"
    },
    {
      fieldname:"Language",
      fieldValue:"English,Hindi,Gujarati"
    },
  ]
}
const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience.',
  description:"Crafting seamless digital experiences from front-end elegance to back-end robustness as a full stack developer.",
  items:[{
    comapny:"Teknogeeks",
    position:'Backend Developer Intern',
    duration:'June 2024 - Present'
  },{
  comapny:"DJS Antariksh",
  position:'Coding Team Member',
  duration:'Apr 2024 - Present'
},
]
}
const education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"My Education details:",
  items:[
    {
      institution:'Dwarkadas J.Sanghvi College of Engineering',
      degree:'BTech Electronics & Telecommunication Engineering (CGPA:8.25)',
      duration:"2023-2027",
      href:"/",
    },
    {
      institution:'Rahul International  School,Mira Road',
      degree:'CBSE(Percentage:76%)',
      duration:"2023",
      href:"/",
    },
    {
      institution:'RBK Kankia School',
      degree:'ICSE(Percentage:96.2%)',
      duration:"2020",
      href:"/",
    },
  ]
}
const skills = {
  title:"My skills",
  description:"Proficient in designing and developing scalable full-stack applications utilizing modern technologies and frameworks.",
  skillList:[
    {
      icon:<TbCircleLetterC />,
      name:"C"
    },
    {
      icon:<BiLogoCPlusPlus />,
      name:"C++"
    },
    {
      icon:<FaJava />,
      name:"Java"
    },
    {
      icon:<FaPython />,
      name:"Python"
    },
    {
      icon:<FaHtml5 />,
      name:"html 5"
    },
    {
      icon:<FaCss3 />,
      name:"CSS 3"
    },
    {
      icon:<FaJs />,
      name:"JavaScript"
    },
    {
      icon:<FaReact />,
      name:"React"
    },
    {
      icon:<SiTypescript />,
      name:"TypeScript"
    },
    {
      icon:<TbBrandReactNative />,
      name:"React Native"
    },
    {
      icon:<SiFlask />,
      name:"Flask"
    },
    {
      icon:<SiTailwindcss />,
      name:"Tailwindcss"
    },
    {
      icon:<SiNextdotjs />,
      name:"Next Js"
    },
    {
      icon:<FaNodeJs />,
      name:"Node Js"
    },
    {
      icon:<SiJquery />,
      name:"Jquery"
    },
    {
      icon:<SiMongodb />,
      name:"MongoDB"
    },
    {
      icon:<SiMysql />,
      name:"MySQL"
    },
    {
      icon:<SiDjango />,
      name:"Django"
    },
    {
      icon:<SiPostgresql />,
      name:"PostgreSQL"
    },
    
    {
      icon:<SiFirebase />,
      name:"Firebase"
    },
    {
      icon:<FaGitAlt />,
      name:"GitLens"
    },
    {
      icon:<SiPostman />,
      name:"Postman"
    },
    {
      icon:<SiRedux/>,
      name:"Redux Tools"
    },
    {
      icon:<VscVscode />,
      name:"VsCode"
    }
  ]
}
const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
     <div className="container mx-auto">
      <Tabs 
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className=" min-h-[70vh] w-full">
          <TabsContent value="experience" className='w-full'>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
              <ScrollArea className='h-[400px] overflow-y-scroll'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((items,index)=>{
                    return (<li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                      <span className="text-accent">{items.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.position}</h3>
                      <div className="flex items-center gap-3 ">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{items.comapny}</p>
                      </div>
                    </li>)
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className='w-full'>
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
              <ScrollArea className='h-[400px] overflow-y-scroll '>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                  {education.items.map((items,index)=>{
                    return (<li className="bg-[#232329] ] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                      <span className="text-accent ">{items.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{items.degree}</h3>
                      <div className="flex items-center gap-3 ">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                        <p className="text-white/60 ">{items.institution}</p>
                      </div>
                    </li>)
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className='w-full h-full'>
            <div className="flex flex-col gap-[30px]">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
            </div>
            <ScrollArea className='h-[400px] overflow-y-scroll  sm:ml-1'>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {
                  skills.skillList.map((skill,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className="text-7xl group-hover:text-accent transition-all duration-300 mb-6 ">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })
                }
              </ul>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="about" className='w-full text-center xl:text-left'>
           <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
                return(
                  <li key={index} className="flex items-center justify-center xl:justif">
                    <span className="text-white/60">{item.fieldname}</span><span className="">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>
           </div>
          </TabsContent>
        </div> 
      </Tabs>
     </div>
    </motion.div>
  )
}

export default Resume ;
