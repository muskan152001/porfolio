import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-4xl font-bold">Contact Me</h2>
    <form className="mt-4 grid gap-4 max-w-md">
      <input type="text" placeholder="Your Name" className="p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="p-2 border rounded" />
      <textarea placeholder="Your Message" rows="5" className="p-2 border rounded"></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  </motion.div>
);

export default Contact;
