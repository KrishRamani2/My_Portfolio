"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: "ZENARA Mutli Vendor E-commerce (FullStack)",
    title: "Ecommerce Website",
    description: "Developed ZENARA e-commerce using MERN stack, ensuring high performance and seamless user experience.Crafted a visually appealing, responsive interface for ZENARA, enhancing the overall shopping experience.Implemented advanced product filtering and user-friendly Add to Cart functionality for efficient navigation.Designed and built an admin dashboard, empowering sellers with analytics and efficient management tools.",
    stack: [{ name: "MERN Stack" }],
    image: '/assets/work/Ecommerce.jpeg',
    live: "/",
    github: "https://github.com/KrishRamani2/Ecommerce_Website",
  },
  {
    num: '02',
    category: "Plant Disease Detection Project (FullStack)",
    title: "फसलFIXER",
    description: "Integrated a third-party API to identify plant diseases and detect common agricultural issues from uploaded images.Designed and implemented RESTful APIs for image upload functionality, using Cloudinary for image storage and serving",
    stack: [{ name: "MERN Stack" }],
    image: '/assets/work/Plant.jpeg',
    live: "https://docs.google.com/forms/d/e/1FAIpQLSerQf6Gpdy8X7_T3KS8PgVQEzoYKeBGyK0E1KamELxgqan3DQ/viewform",
    github: "https://github.com/KrishRamani2/Plant_Disease_Detection/tree/main",
  },
  {
    num: '03',
    category: "Voxify -AI APP — React Native app ",
    title: "Jarvo",
    description: "Voxify utilizes cutting-edge speech recognition technology to accurately transcribe spoken words into text in realtime.",
    stack: [{ name: "React Native" }],
    image: '/assets/work/Voxify.jpeg',
    live: "/",
    github: "https://github.com/KrishRamani2/Voxify_AI_APP",
  },
  {
    num: '04',
    category: "MagicStream:A Disney+Hotstar Clone (Frontend)",
    title: "MagicStream: A Disney+ Hotstar Clone",
    description: "MagicStream boasts an extensive collection of content spanning various genres, including blockbuster movies, pop-ular TV series, exclusive originals, and live sports broadcasts.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/Disney.png",
    live: "/",
    github: "https://github.com/KrishRamani2/Disney-plus-hotstar-clone",
  },
  
  {
    num: '05',
    category: "TinDog (FrontEnd)",
    title: "TinDog",
    description: "Are you tired of swiping left on dating apps that just don't get your paw-some lifestyle? Look no further than TinDog, the app that brings dogs together based on their playful personalities and tail-wagging interests.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }, { name: "BootStrap" }],
    image: '/assets/work/TinDog.jpeg',
    live: "/",
    github: "https://github.com/KrishRamani2/Tin_Dog_Project",
  },
];

interface ImagesLoadedState {
  [key: number]: boolean;
}

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [imagesLoaded, setImagesLoaded] = useState<ImagesLoadedState>({});

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <style jsx>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return <li key={index}
                      className="text-xl text-accent "
                    >{item.name}</li>;
                  })}
                </ul>
                <div className="border border-white/20" />
                <div className="flex flex-row gap-[25px]">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="">Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="">GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          {!imagesLoaded[index] && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="loader"></div>
                            </div>
                          )}
                          <Image
                            src={project.image}
                            fill
                            className={`object-cover transition-opacity duration-300 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                            alt="project image"
                            onLoad={() => handleImageLoad(index)}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary textr-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  iconStyles="items-center"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;