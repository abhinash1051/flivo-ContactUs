import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50" style={{

            backdropFilter: 'blur(0.5px)',



        }}>
            <div className="relative bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-2xl border-5 border-blue-400 text-center">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                    Let’s Secure Your Business
                </h2>
                <p className="mt-2 text-gray-600">
                    Our team will get back to you within 24 hours.
                </p>

                {/* Icons Row */}
                <div className="flex justify-between items-center mt-6 px-4">
                    <img src="/graduation.png" alt="left icon" className="w-24 h-24" />
                    <img src="/security.png" alt="right icon" className="w-24 h-24" />
                </div>

                {/* Continue button */}
                <button
                    onClick={onClose}
                    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Modal;
