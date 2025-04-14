"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectContent } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Link from 'next/link';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 8451013020',
    link: 'tel:+918451013020'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'krishramani02@gmail.com',
    link: 'mailto:krishramani02@gmail.com'
  },
  {
    icon: <FaWhatsapp />,
    title: 'Whatsapp',
    description: '(+91) 8451013020',
    link: 'https://wa.me/918451013020'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'Mumbai,Maharashtra India',
    link:"https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0822507,72.8811862,11z/data=!3m1!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu"
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
                Let{"'"}s work together
              </h3>
              <p className="text-white/60">For innovative web solutions, reach out today!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname"
                  placeholder="Firstname"
                />
                <Input type="lastname"
                  placeholder="Lastname"
                />
                <Input type="email"
                  placeholder="Email"
                />
                <Input type="phone"
                  placeholder="Phone"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup className="bg-black w-[335px] xl:w-[480px] text-3xl">
                      <SelectLabel>
                        Select a Service</SelectLabel>
                      <SelectItem value="est">
                        Web Development
                      </SelectItem>
                      <SelectItem value="cst">
                        App Development
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea className="h-[200px] mt-3 " placeholder="Type your message here." />
                <Button size="md" className="mt-5">Send Message</Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col mb-[25px]">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    {item.link ? (
                      <Link href={item.link} target={item.title !== 'Phone' ? "_blank" : "_self"} rel="noopener noreferrer">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center xl:mb-[28px] cursor-pointer hover:bg-accent hover:text-[#27272c] transition-colors duration-300">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                      </Link>
                    ) : (
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center xl:mb-[28px]">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                    )}
                    <div className="">
                      <p className="xl:mb-[28px] text-white/60">{item.title}</p>
                      <h3 className="xl:mb-[28px] xl:mt-[-25px] text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
