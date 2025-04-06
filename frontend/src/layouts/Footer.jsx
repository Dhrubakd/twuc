import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              The Tharu Women Upliftment Center is dedicated to empowering women through sustainable development, education, and leadership programs.
            </p>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/works/programs" className="hover:text-white">Our Works</Link></li>
              <li><Link to="/gallery/photos" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/donate-us" className="hover:text-white">Donate</Link></li>
            </ul>
          </div>

          {/* Projects
          <div>
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about/running" className="hover:text-white">Running Projects</Link></li>
              <li><Link to="/about/completed" className="hover:text-white">Completed Projects</Link></li>
            </ul>
          </div> */}
          {/* Our Works */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Works </h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/works/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/works/achievements" className="hover:text-white">Achievements</Link></li>
              <li><Link to="/works/milestone" className="hover:text-white">Milestones</Link></li>
              <li><Link to="/works/geographical" className="hover:text-white">Geographical Reach</Link></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">External Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.swc.org.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Social Welfare Council
                </a>
              </li>
              <li>
                <a
                  href="https://www.ngofederation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  NGO Federation of Nepal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info and Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-4">
              Gulariya-7, Bardiya, Nepal <br />
              Land-line: 084 - 420350 / 347 <br />
              Email: <a href="mailto:twuc.bardiya2049@gmail.com" className="hover:text-white">twuc.bardiya2049@gmail.com</a>
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Credits Section */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Tharu Women Upliftment Center. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed by <a href="https://qubicconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Qubic Consulting Pvt. Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
