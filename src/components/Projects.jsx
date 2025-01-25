import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">Projects</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded shadow">
        <h3 className="text-2xl font-bold">Airline Reservation System</h3>
        <p className="mt-2">
          A comprehensive system for flight bookings, cancellations, and seat management using Java and SQL databases.
        </p>
      </div>
      <div className="p-4 border rounded shadow">
        <h3 className="text-2xl font-bold">Weather Application</h3>
        <p className="mt-2">
          A responsive app fetching real-time weather data with HTML, CSS, JavaScript, and API integration.
        </p>
      </div>
      <div className="p-4 border rounded shadow">
        <h3 className="text-2xl font-bold">Final Year Project: Skin Cancer Detection</h3>
        <p className="mt-2">
          Developed a skin cancer lesion detection system using the VOLO v10 model integrated into a React web application.
          Utilized the HAM10000 dataset for accurate multi-class prediction.
        </p>
      </div>
    </div>
  </motion.div>
);

export default Projects;
