import React from "react";
import Frame from "../assets/frame.png";
import Rectangle from "../assets/rectangle.png";

export default function ContactForm() {
    return (
        <section
            className="relative py-12 px-6"
            style={{
                background:
                    "linear-gradient(179.22deg, #E5F5FF 16.4%, #8BD1FF 60.42%, #E5F5FF 97.72%)",
                height: "90vh",
            }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Left Content */}
                <div className="flex flex-col justify-start">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Let’s Secure Your Business
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Have questions about our services or need a custom security solution?
                        Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    <div className="mt-6 space-y-3 text-gray-800">
                        <p>📧 email@example.com</p>
                        <p>📞 +1 (555) 000-0000</p>
                        <p>📍 123 Sample St, Sydney NSW 2000 AU</p>
                    </div>

                    {/* Shield above rectangle */}
                    <div className="flex justify-center md:justify-start mt-50 relative">
                        <img src={Frame} alt="shield" className="w-52 z-10" />
                    </div>
                </div>

                {/* Right Form */}
                <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First name"
                            className="border p-2 rounded w-full"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="border p-2 rounded w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-2 rounded w-full"
                        />
                        <input
                            type="text"
                            placeholder="Phone number"
                            className="border p-2 rounded w-full"
                        />
                    </div>

                    <div>
                        <p className="font-medium">Service Type?</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="service" /> Web Application Security
                                Audits
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="service" /> PCI DSS Gap Assessments
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="service" /> Cloud Security Assessments
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="service" /> Security Awareness Training
                            </label>
                        </div>
                    </div>

                    <textarea
                        placeholder="Type your message..."
                        className="border w-full p-2 rounded h-28"
                    ></textarea>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" /> I accept the{" "}
                        <span className="text-blue-600">Terms</span>
                    </label>

                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Book your call
                    </button>
                </form>
            </div>

            {/* Rectangle bottom bar */}
            <div
                className="absolute bottom-0 left-0 w-full"
                style={{
                    boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <img
                    src={Rectangle}
                    alt="secure"
                    className="w-full h-5 object-cover"
                />
            </div>
        </section>
    );
}
