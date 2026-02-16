import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-6 mt-10"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-4">Edupulse</h3>
          <p className="text-sm text-gray-200">
            Empowering educational institutions with innovative solutions for efficient management and enhanced learning experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-200 hover:text-white relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-200 hover:text-white relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-200 hover:text-white relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Services
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-200 hover:text-white relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-200 flex items-center mb-2">
            <Mail size={18} className="mr-2" /> info@edupulse.com
          </p>
          <p className="text-sm text-gray-200 flex items-center">
            <Phone size={18} className="mr-2" /> +1 (123) 456-7890
          </p>
          <p className="text-sm text-gray-200 mt-4">
            123 Edupulse Ave, Suite 400, Learning City, LC 12345
          </p>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-200 hover:text-white">
              <Facebook size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-200 hover:text-white">
              <Twitter size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-200 hover:text-white">
              <Linkedin size={24} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-gray-200 hover:text-white">
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
        &copy; {currentYear} Edupulse. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
