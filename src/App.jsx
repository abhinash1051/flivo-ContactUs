import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Show modal immediately on load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="font-sans relative">
      {/* Background Content */}
      <Navbar />
      <ContactForm />
      <Testimonial />
      <Footer />

      {/* Modal on top */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
