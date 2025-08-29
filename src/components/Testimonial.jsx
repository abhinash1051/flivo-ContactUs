import React from "react";

export default function Testimonial() {
    return (
        <section className="py-12 px-6 bg-gray-100 text-center">
            <h3 className="text-lg font-semibold mb-4">Webflow</h3>
            <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
                "Security Council transformed our cybersecurity posture, providing
                invaluable insights and support that exceeded our expectations."
            </blockquote>
            <div className="mt-6">
                <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full"></div>
                <p className="mt-2 font-medium">John Doe</p>
                <p className="text-sm text-gray-600">CISO, TechCorp</p>
            </div>
        </section>
    );
}
