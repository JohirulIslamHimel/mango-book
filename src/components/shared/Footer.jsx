import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/*  Logo and description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white italic">
              Mango<span className="text-purple-500">Book</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              We are committed to making your digital library experience easy.
              Read books, spread knowledge.
            </p>
          </div>

          {/*  Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm hover:text-purple-400 transition-colors cursor-pointer">
                <FaEnvelope className="text-purple-500" /> support@mangobook.com
              </li>
              <li className="flex items-center gap-3 text-sm hover:text-purple-400 transition-colors cursor-pointer">
                <FaPhone className="text-purple-500" /> +880 1712-345678
              </li>
            </ul>
          </div>

          {/*  Social media links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} MangoBook Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
