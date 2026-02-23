import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Github, Twitter, Linkedin, Mail, Globe, Shield, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
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

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: Github, label: 'GitHub', color: 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400' },
    { icon: Mail, label: 'Email', color: 'hover:bg-rose-100 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-t border-blue-100/50 dark:border-blue-900/30 pt-16 pb-8 px-4 mt-auto w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
                <Layout size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">EduPulse</span>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-semibold tracking-widest uppercase">Admin Portal</span>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xs leading-relaxed">
              Revolutionizing educational management with intelligent data analytics and seamless operations. Empowering institutions worldwide.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <motion.button 
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all border border-blue-100/50 dark:border-slate-700 ${social.color}`}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.to} 
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 border border-blue-200/50 dark:border-blue-900/30 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Sparkles size={20} className="text-blue-500" />
              Stay Updated
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-blue-200/50 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder-slate-400"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-500/30"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-100/50 dark:border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-2">© {currentYear} Edupulse System</span>
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-100/50 dark:bg-blue-900/20 rounded-lg">
              <Globe size={12} className="text-blue-600 dark:text-blue-400" /> 
              Global v{appVersion}
            </span>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-green-100/50 dark:bg-green-900/20 rounded-lg uppercase tracking-wider border border-green-200/50 dark:border-green-900/30"
            >
              <Shield size={12} className="text-green-600 dark:text-green-400" />
              Secure & Encrypted
            </motion.div>
            <div className="h-5 w-px bg-blue-200/50 dark:bg-slate-700 hidden sm:block" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-wider transition-colors border border-transparent hover:border-blue-200/50 dark:hover:border-blue-900/30 rounded-lg"
            >
              <HelpCircle size={12} />
              Help Desk
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
        </div>
      </div>
    </footer>
  );
};
