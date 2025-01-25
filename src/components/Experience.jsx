import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">Experience</h2>
    <div className="mt-4">
      <h3 className="text-2xl font-bold">Intern at Pegasus Consultancy</h3>
      <p className="mt-2">
        Managed international databases, optimized performance, and conducted data analysis to support decision-making
        processes.
      </p>
    </div>
  </motion.div>
);

export default Experience;
