import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
    <p className="mt-4 text-lg">I am Muskan Thakur, a MERN stack developer with a passion for creating scalable web applications.</p>
    <a
      href="/MuskanThakurResume.pdf"
      download
      className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
    >
      Download Resume
    </a>
  </motion.div>
);

export default Home;
