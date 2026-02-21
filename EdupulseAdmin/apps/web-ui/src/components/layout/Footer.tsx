import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Github, Twitter, Linkedin, Mail, Globe, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const appVersion = '1.0.0';

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Dashboard', to: '/dashboard' },
        { label: 'Classes', to: '/classes' },
        { label: 'Students', to: '/students' },
        { label: 'Finance', to: '/finance' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', to: '#' },
        { label: 'Documentation', to: '#' },
        { label: 'System Status', to: '#' },
        { label: 'Contact Us', to: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: '#' },
        { label: 'Terms of Service', to: '#' },
        { label: 'Cookie Policy', to: '#' },
        { label: 'Compliance', to: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-border dark:border-border-dark pt-12 pb-8 px-4 mt-auto w-full">
      <div className="w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Layout size={22} />
              </div>
              <span className="text-xl font-bold tracking-tight">EduPulse <span className="text-primary">Admin</span></span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
              The next-generation educational management system. Empowering institutions with intelligent data and seamless operations.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-text dark:text-text-dark">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
            <span>&copy; {currentYear} Edupulse System</span>
            <span className="flex items-center gap-1.5"><Globe size={12} /> Global v{appVersion}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
              <Shield size={12} className="text-success" />
              Secure Data Encryption
            </div>
            <div className="h-4 w-px bg-border dark:bg-neutral-800" />
            <button className="flex items-center gap-2 text-[11px] font-medium text-gray-400 hover:text-primary uppercase tracking-wider transition-colors">
              <HelpCircle size={12} />
              Help Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
