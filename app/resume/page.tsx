"use client";
import { useState } from 'react';
import { FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPostman, SiMongodb, SiMysql, SiDjango, SiRedux, SiFirebase, SiFlask, SiPostgresql, SiJquery } from 'react-icons/si';
import { TbBrandReactNative, TbCircleLetterC } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { IoLogoDocker } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5'; // Import the close icon
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface ExperienceItem {
  company?: string;
  position?: string;
  duration: string;
  offerLetterUrl?: string;
  certificateUrl?: string;
  letterofappreciation?: string;
  evaluationreport?: string;
}

const about = {
  title: "About me",
  description: "Enthusiastic and motivated beginner MERN Stack Developer eager to kickstart a career in web development. Passionate about learning and applying new technologies to create innovative solutions. Seeking an entry-level position where I can contribute to projects while further developing my skills.",
  info: [
    { fieldname: "Name", fieldValue: "Krish Ramani" },
    { fieldname: "Phone", fieldValue: "(+91) 7977713644" },
    { fieldname: "Experience", fieldValue: "1+ Years" },
    { fieldname: "Nationality", fieldValue: "Indian" },
    { fieldname: "Email", fieldValue: "krishramani02@gmail.com" },
    { fieldname: "Language", fieldValue: "English, Hindi, Gujarati" },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience.',
  description: "Crafting seamless digital experiences from front-end elegance to back-end robustness as a full stack developer.",
  items: [
    { company: "Teknogeeks", position: 'Backend Developer Intern', duration: 'June 2024 - Aug 2024', 
      offerLetterUrl: 'https://drive.google.com/file/d/1j8LY1KiF6SBashAxLt8zLHL6NysmGDEv/view?usp=sharing', 
      certificateUrl: 'https://drive.google.com/file/d/1NfW97Mumo6JRxHVO-dYLg4IREo2TDDQA/view?usp=sharing',
      letterofappreciation:'https://drive.google.com/file/d/1iJZhHbhRD7tCyxA3bV-JzqJrpDtZ5bFX/view?usp=sharing',
      evaluationreport:'https://drive.google.com/file/d/1Bf3wxNXpUCDbuUCLCX05ahYtxbYhapNP/view?usp=sharing',
    },
    { company: "DJS Antariksh", position: 'Coding Team Member', duration: 'Apr 2024 - Present' },
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "My Education details:",
  items: [
    { institution: 'Dwarkadas J.Sanghvi College of Engineering', degree: 'BTech Electronics & Telecommunication Engineering (CGPA:8.25)', duration: "2023-2027", href: "/" },
    { institution: 'Rahul International School, Mira Road', degree: 'CBSE(Percentage:76%)', duration: "2023", href: "/" },
    { institution: 'RBK Kankia School', degree: 'ICSE(Percentage:96.2%)', duration: "2020", href: "/" },
  ]
};

const skills = {
  title: "My skills",
  description: "Proficient in designing and developing scalable full-stack applications utilizing modern technologies and frameworks.",
  skillList: [
    { icon: <TbCircleLetterC />, name: "C" },
    { icon: <BiLogoCPlusPlus />, name: "C++" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <TbBrandReactNative />, name: "React Native" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGitAlt />, name: "GitLens" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <FaLinux />, name: "Linux (Ubuntu)" },
    { icon: <IoLogoDocker />, name: "Docker" }
  ]
};
const achievements = {
  icon: '/assets/resume/badge.svg',
  title: 'My achievements.',
  description: "Recognized in multiple hackathons for innovative solutions and advanced problem-solving skills.",
  items: [
    { venue: "DJSCE", position: 'MERN Stack Developer', hackname: 'Shortlisted In Internal Hackathon For SIH(2024)', duration: 'Aug 2024'},
    { venue: "DJSCE", position: 'MERN Stack Developer',hackname: ' Shortlisted In DataHack 3.0', duration: 'October 2024', 
      certificateUrl: 'https://drive.google.com/file/d/1fsoxAQwX0gG34IdJqf2rtwJH__pjugw3/view' },
      { venue: "Atlas Skill Tech University", position: 'MERN Stack Developer',hackname: 'Shortlisted In MumbaiHack', duration: 'October 2024' },
  ]
};
const Resume = () => {
  const [selectedCompany, setSelectedCompany] = useState<ExperienceItem | null>(null);

  const handleCompanyClick = (company: ExperienceItem) => {
    setSelectedCompany(company);
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  };

  const closeDetails = () => {
    setSelectedCompany(null);
    document.body.style.overflow = 'auto'; // Enable background scrolling
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className='h-[400px] overflow-y-scroll'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer"
                        key={index}
                        onClick={() => handleCompanyClick(item)}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className='w-full'>
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
    <ScrollArea className='h-[400px] overflow-y-scroll'>
      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
        {education.items.map((item, index) => (
          <li
            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-2"
            key={index}
          >
            <span className="text-accent">{item.duration}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl text-center lg:text-left">{item.degree}</h3>
              <p className="text-white/60 text-center lg:text-left">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>

<TabsContent value="skills" className='w-full'>
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{skills.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
    <div className="overflow-y-scroll h-[300px]">
      <div className="flex flex-wrap gap-6 p-4">
        {skills.skillList.map((skill, index) => (
          <div className="flex flex-col items-center gap-2" key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-[135px] h-[90px] flex items-center justify-center border
                  border-gray-700 bg-[#1a1c22] text-5xl text-accent">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  </div>
</TabsContent>
<TabsContent value="achievements" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{achievements.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{achievements.description}</p>
                <ScrollArea className='h-[400px] overflow-y-scroll'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {achievements.items.map((item, index) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer"
                        key={index}
                        onClick={() => handleCompanyClick(item)}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[90px] text-center lg:text-left">{item.hackname}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.venue}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className='w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className='text-white/60 mx-auto xl:mx-0 flex flex-col gap-3'>
                  {about.info.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="font-semibold">{item.fieldname}:</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        {selectedCompany && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#1e1e1e] p-6 rounded-xl max-w-[90%] sm:max-w-[600px] relative">
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 text-white text-2xl p-1 rounded-full hover:bg-gray-700"
              >
                <IoClose />
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedCompany.company}</h2>
              <p><strong>Position:</strong> {selectedCompany.position}</p>
              <p><strong>Duration:</strong> {selectedCompany.duration}</p>
              {selectedCompany.offerLetterUrl && (
                <p><a href={selectedCompany.offerLetterUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Offer Letter</a></p>
              )}
              {selectedCompany.certificateUrl && (
                <p><a href={selectedCompany.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Certificate</a></p>
              )}
              {selectedCompany.letterofappreciation && (
                <p><a href={selectedCompany.letterofappreciation} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Letter of Appreciation</a></p>
              )}
              {selectedCompany.evaluationreport && (
                <p><a href={selectedCompany.evaluationreport} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Evaluation Report</a></p>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Resume;
