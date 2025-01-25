import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">About Me</h2>
    <p className="mt-4 text-lg">I am a software engineer specializing in MERN stack development. I love solving problems and creating impactful web applications.</p>
    <ul className="list-disc mt-4 ml-5">
      <li>Education: BS Computer Science, Sukkur IBA University</li>
      <li>Skills: React, Node.js, MongoDB, Python, Java</li>
      <li>Certifications: Advanced Java Programming, Data Structures and Algorithms</li>
    </ul>
  </motion.div>
);

export default About;
