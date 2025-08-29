import React, { useState } from "react";
import { Phone, ChevronDown } from "lucide-react"; // icons from lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-2xl font-bold italic">Logo</div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
                    <a href="#" className="hover:text-blue-600">
                        Home
                    </a>

                    {/* Services dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-1 hover:text-blue-600"
                        >
                            Services <ChevronDown size={16} />
                        </button>
                        {isOpen && (
                            <div className="absolute top-8 left-0 bg-white border shadow-lg rounded-md py-2 w-48">
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                                >
                                    Web Security Audits
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                                >
                                    Cloud Assessments
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                                >
                                    Training
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="hover:text-blue-600">
                        Blogs
                    </a>
                </div>

                {/* Contact Button */}
                <div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                        <Phone size={16} /> Contact us
                    </button>
                </div>
            </div>
        </nav>
    );
}
