import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <a
      href="https://calendly.com/naveeddamudi/20-minute-meeting-consultation-with-clients"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 z-50 flex gap-2 px-4 py-3 
        rounded-full bg-blue-600 text-white shadow-lg transition-all duration-500 
        hover:scale-110 hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      aria-label="Book a Call"
    >
      <FaPhoneAlt size={20} />
      <span className="text-sm font-semibold">Book a Call</span>
    </a>
  );
};

export default CallButton;
