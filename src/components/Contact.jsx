// src/components/ContactSection.jsx
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * InfoCard
 * Props:
 *  - Icon: lucide-react icon component
 *  - title: string
 *  - lines: array of strings
 *  - iconBg: tailwind color string for icon background (e.g. "bg-[#0A64A8]")
 *  - titleColor: tailwind class for title color (e.g. "text-[#0D3740]")
 *  - lineColor: tailwind class for lines (e.g. "text-gray-600")
 */
const InfoCard = ({ Icon, title, lines = [], iconBg = "bg-[#0A64A8]", titleColor = "text-[#0D3740]", lineColor = "text-gray-600" }) => {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex gap-4 items-start min-h-[140px]">
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${iconBg} flex items-center justify-center`}>
          <Icon className="text-white" size={20} />
        </div>
      </div>

      <div className="flex-1">
        <h3 className={`text-lg md:text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
        <div className={`space-y-1 ${lineColor}`}>
          {lines.map((line, idx) => (
            <p key={idx} className={`${idx === 0 ? "text-sm md:text-base font-medium" : "text-sm"}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    linkedin: "",
    engagement: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API call or other logic
    console.log("Form submitted:", formData);

    // Reset
    setFormData({
      fullName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      linkedin: "",
      engagement: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 invisible">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@cairl.com"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              name="phone"
              required
              pattern="[0-9]{10,}"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organization<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Organization name"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn Profile<span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/example"
              name="linkedin"
              required
              value={formData.linkedin}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type of Engagement<span className="text-red-500">*</span>
            </label>
            <select
              required
              name="engagement"
              value={formData.engagement}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select One
              </option>
              <option>Membership</option>
              <option>Partnership</option>
              <option>Sponsorship</option>
              <option>General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Tell us briefly about your interest"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-[#005BA9] hover:bg-[#004a88] text-white font-medium px-5 py-2.5 rounded-full transition flex items-center gap-2"
          >
            Submit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M6 3.33325L10.6667 7.99992L6 12.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactSection = () => {
  return (
    <main className="bg-[#f9f9f9] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-8">
          <div className="inline-block px-3 py-1 font-Intter font-normal text-sm text-blue-700 bg-blue-100 rounded-full mb-3">
            Contact
          </div>
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-[#0D3740]">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Reach out to us for collaboration, inquiries, or to learn more about our AI initiatives.
          </p>
        </header>

       
        <section className="flex items-center justify-center mb-8">
          <div className="w-full max-w-5xl">
            <ContactForm />
          </div>
        </section>

        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            Icon={Phone}
            title="Phone"
            lines={["+91-9391335191", "Monday - Friday, 09:00 AM - 06:00PM"]}
            iconBg="bg-[#0A64A8]"        
            titleColor="text-[#0D2E37]"  
            lineColor="text-[#005BA9CC]"    
          />

          <InfoCard
            Icon={Mail}
            title="Email"
            lines={["info@cairl.org", "We'll respond as soon as possible"]}
            iconBg="bg-[#005BA9]"        
            titleColor="text-[#0D2E37]"   
            lineColor="text-[#005BA9CC]"   
          />

          <InfoCard
            Icon={MapPin}
            title="Location"
            lines={[
              "T-Hub, 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur,",
              "Hyderabad, Telangana 500081",
            ]}
            iconBg="bg-[#005BA9]"        
            titleColor="text-[#0D2E37]"
            lineColor="text-[#005BA9CC]"   
          />
        </section>

        {/* Map */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Google Map - LB Nagar Metro Station"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2926298015664!2d78.54545397440315!3d17.34964640389281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98a34ea959a9%3A0x9005a4e2335ace09!2sMetro%20Station%20L%20B%20Nagar%2C%20Snehapuri%20Colony%2C%20L.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500074!5e0!3m2!1sen!2sin!4v1754476388477!5m2!1sen!2sin"
              className="w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactSection;
