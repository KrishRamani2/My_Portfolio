"use client";

import Link  from "next/link";
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion";
const services =[
  {
    num:'01',
    title:'Web Developement',
    description:'Specialize in designing, building, and maintaining Full Stack websites and web applications.',
    href:"/",
  },
  {
    num:'02',
    title:'App Developement',
    description:'App development in React Native leverages JavaScript to build cross-platform mobile applications efficiently.',
    href:"/",
  },
]
const Services = () => {
 
  return (
    <section className="min-h-[80vh]
    flex flex-col justify-center py-12 xl:py-8 
    ">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{
          delay:2.4,duration:0.4,ease:"easeIn"
        }}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px] ">
          {services.map((service,index)=>{
            return <div><div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500" >{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "><BsArrowDownRight className="text-primary text-3xl"/></Link>
              </div>
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
            <p className="mt-6 text-white/60">{service.description}</p>
            <div className="border-b border-white/20 w-full "></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
