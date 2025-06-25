import React, { useState, useEffect } from "react";
import Salesperson from "../../assets/Salesperson.png";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const welcome = "Are hello sunitaa ji Abhi Development phase me haii";
      const utterance = new SpeechSynthesisUtterance(welcome);
      speechSynthesis.speak(utterance);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-20 h-20 shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <img
          src={Salesperson}
          alt="Drona Avatar"
          className="w-20 h-20 rounded-full"
        />
      </button>      
    </div>
  );
}
