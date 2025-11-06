import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle submit
  const handleMessageSubmit = () => {
    if (name && email && message) {
      toast.success(`${name} 
        Thank you for message
         `);
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or partnership inquiries? We’d love to hear
          from you. Let’s make your food experience amazing!
        </p>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-gray-200">
        {/* Left Section — Info */}
        <div className="bg-red-600 text-white flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-6 text-red-100">
            Reach out anytime — our support team is available 24/7 to help you
            with orders, feedback, or restaurant partnerships.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl" />
              <p className="text-lg">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <p className="text-lg">support@redBelly.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <p className="text-lg">
                45 MG Road, Cannaught Place, Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Section — Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              onClick={() => handleMessageSubmit()}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-gray-500 mt-10 text-sm">
        © 2025 redBelly — Delivering happiness one bite at a time 🍔
      </p>
    </div>
  );
};

export default Contact;
