import React from "react";
import { motion } from "framer-motion";

const Achievements = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">Achievements</h2>
    <ul className="list-disc mt-4 ml-5">
      <li>Project Excellence Award: Recognized for leading a high-impact project.</li>
      <li>Best Mentor: Awarded for fostering a culture of continuous learning.</li>
    </ul>
  </motion.div>
);

export default Achievements;
