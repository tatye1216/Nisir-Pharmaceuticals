import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after they scroll down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          href="https://wa.me/251000000000" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-colors flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
            Chat with Sales
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
