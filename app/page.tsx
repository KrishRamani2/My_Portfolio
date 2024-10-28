"use client";

import { useState } from 'react';
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    const pdfUrl = '/assets/resume/Krish_Ramani.pdf';
    
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error('Failed to fetch the file');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'KrishRamani_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Could not download the file. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Full Stack Developer
            </span>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Hello I{"'"}m <br />
              <span className="text-accent">Krish Ramani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social 
                containerStyles="flex flex-row gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;