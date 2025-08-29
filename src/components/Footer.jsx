import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300 px-6 md:px-20 py-10 ">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6"
            >
                {/* Logo */}
                <div className="text-2xl font-[cursive] font-bold mb-6 md:mb-0">
                    Logo
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-800 mb-6 md:mb-0">
                    <a href="#" className="hover:underline">
                        Contact Us
                    </a>
                    <a href="#" className="hover:underline">
                        About Us
                    </a>
                    <a href="#" className="hover:underline">
                        Our Services
                    </a>
                    <a href="#" className="hover:underline">
                        Blog Insights
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 text-gray-800">
                    <a href="#" className="hover:text-gray-600">
                        <FaFacebookF size={18} />
                    </a>
                    <a href="#" className="hover:text-gray-600">
                        <FaInstagram size={18} />
                    </a>
                    <a href="#" className="hover:text-gray-600">
                        <FaTwitter size={18} />
                    </a>
                    <a href="#" className="hover:text-gray-600">
                        <FaLinkedinIn size={18} />
                    </a>
                    <a href="#" className="hover:text-gray-600">
                        <FaYoutube size={18} />
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 my-4" />

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2025 Security Council. All rights reserved.</p>
                <div className="flex gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms of Use
                    </a>
                    <a href="#" className="hover:underline">
                        Cookie Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
