"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [leetcodeSolved, setLeetcodeSolved] = useState<number>(0);

  const stats = [
    {
      num: 1,
      text: "Years of Experience",
    },
    {
      num: 11,
      text: "Projects Completed",
    },
    {
      num: leetcodeSolved  || 303,
      text: "DSA Questions Solved",
    },
    {
      num: 359,
      text: "Code Commits",
    },
  ];

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/KrishRamani");
        const data = await res.json();
        if (data.status === "success") {
          setLeetcodeSolved(data.totalSolved);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
      }
    };

    fetchLeetcodeData();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-8 xl:pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15
                    ? "max-w-[100px]"
                    : "max-w-[150px] leading-snug text-white/80"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
