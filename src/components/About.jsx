import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { kenneth2 } from "../assets";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>


  <div className='flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-12'>
    <img src={kenneth2} alt='portrait' className='mr-6 md:mr-8 mb-6 md:mb-0 w-48 md:w-48 h-48 md:h-48 object-cover'/>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-base md:text-lg max-w-lg md:max-w-3xl leading-[30px]'
    >
      I'm a software developer with a focus on programming languages such as C#, Java, Python, HTML, CSS, JavaScript, 
      as well as the MERN Stack, and experience with the content management system WordPress. I have skills in front-end 
      and I'm proficient in a variety of technologies used to build websites and web applications. I also am a business 
      owner as I started a SMMA named Weberu where we provide small to medium business and schools with digital services 
      to increase their revenue and brand awareness.
    </motion.p>
  </div>


  <br></br>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Services</p>
    <h2 className={styles.sectionHeadText}>What I Offer.</h2>
  </motion.div>

  <div className='mt-12 md:mt-20 flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-10'>
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
  </div>
  </>
  );
};

export default SectionWrapper(About, "about");