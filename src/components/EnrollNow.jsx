import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Brain, Users, Briefcase, GraduationCap } from 'lucide-react';

const EnrollNow = () => {
  const location = useLocation();
  const bootcamp = location.state?.bootcamp;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    company: "",
    linkedin: "",
    location: "",
    payment: "",
    quantity: "1",
  });

 // const [name, setName] = useState('');
  //const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
   
  };

  if (!bootcamp) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Bootcamp not found.</p>
      </div>
    );
  }

  const curriculum = [
    {
      week: "Week 1-4: Foundations of AI",
      details: "Python, Data Analysis, Statistics",
    },
    {
      week: "Week 5-8: Machine Learning",
      details: "Supervised and Unsupervised Learning, Model Evaluation",
    },
    {
      week: "Week 9-10: Deep Learning and Neural Networks",
      details: "Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks",
    },
    {
      week: "Week 11-12: AI Applications and Career Preparation",
      details: "Natural Language Processing, Computer Vision, Portfolio Building, Interview Skills",
    },
  ];

  const instructors = [
    { name: "Nathaniel Reed", title: "Lead AI Instructor" },
    { name: "Isabella Carter", title: "Senior Machine Learning Engineer" },
    { name: "Elijah Bennett", title: "AI Research Scientist" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 md:px-16 py-12">
        <div className="rounded-2xl shadow-md grid md:grid-cols-2 w-full max-w-6xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">{bootcamp.title}</h2>
            <ul className="text-gray-600 mb-6 space-y-1">
              <li>• Part-time • 12 weeks • Online</li>
              <li>• {bootcamp.date}</li>
            </ul>
            <p className="text-gray-600 mb-6">{bootcamp.description}</p>
            <div className="flex gap-4">
              <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">Enroll Now</button>
              <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-100 transition">Download Brochure</button>
            </div>
          </div>
          <div className="h-full md:h-auto">
            <img src={bootcamp.image} alt={bootcamp.title} className="object-cover w-full h-full md:rounded-r-2xl" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white text-gray-800 px-6 md:px-20 py-12">
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 font-semibold font-playfair text-gray-900">About the Bootcamp</h2>
          <p className="text-lg text-gray-700">
            Our AI and Machine Learning Bootcamp is a comprehensive program...
          </p>
        </section>

        {/* Key Features */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold font-playfair mb-6 text-[#000000]">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[Brain, Users, Briefcase, GraduationCap].map((Icon, i) => (
              <div key={i} className="border rounded-lg p-6 text-center hover:shadow-md transition">
                <Icon className="mx-auto mb-2 text-[#000000]" size={28} />
                <h4 className="font-semibold text-[#000000]">
                  {["AI-Focused Curriculum", "Community Support", "Career Services", "Certification"][i]}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Curriculum */}
      <div className="bg-gray-50 py-12 px-6 md:px-20 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-semibold font-playfair text-[#000000] mb-10">Curriculum Overview</h2>
        <div className="space-y-6">
          {curriculum.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold font-Intter text-[#000000] mb-1">{item.week}</h3>
              <p className="border-l-2 border-gray-300 pl-4 text-gray-600">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Software & Instructors */}
      <div className="bg-gray-50 text-gray-800 px-6 md:px-20 py-12">
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-[#000000]">Software and Tools</h2>
          <p className="text-gray-700 leading-relaxed">
            Hands-on experience with Python, TensorFlow, PyTorch, and more...
          </p>
        </section>

        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair mb-6 text-[#000000]">Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div className="w-full h-40 bg-gray-200 rounded-lg" />
                <p className="font-semibold text-gray-900">{instructor.name}</p>
                <p className="text-sm text-gray-500">{instructor.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Application and Form */}
      <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-12 text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <span className="inline-block mt-6 px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
                Application
              </span>
              <p className="text-gray-700 text-lg">
                Apply before <strong>July 31st, 2024</strong>. Cohort starts <strong>August 15th, 2024</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Pricing</h2>
              <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h3 className="font-bold text-lg text-gray-900">AI and Machine Learning Bootcamp</h3>
                <p className="text-3xl font-semibold text-gray-800">₹0 <span className="text-base font-normal">Total</span></p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li>✓ 12-week immersive program</li>
                  <li>✓ Hands-on projects</li>
                  <li>✓ Expert instructors</li>
                  <li>✓ Career support</li>
                  <li>✓ Certificate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-8">Enroll Now</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "First Name*", name: "firstName", type: "text", required: true, placeholder: "John" },
                { label: "Last Name*", name: "lastName", type: "text", required: true, placeholder: "Doe" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "Phone number" },
                { label: "Business Email Address*", name: "email", type: "email", required: true, placeholder: "example@company.com" },
                { label: "Role", name: "role", type: "text", placeholder: "Designation" },
                { label: "Company Name*", name: "company", type: "text", required: true, placeholder: "Company" },
                { label: "LinkedIn URL", name: "linkedin", type: "url", placeholder: "https://linkedin.com/in/example" },
                { label: "Location", name: "location", type: "text", placeholder: "City, Country" },
                { label: "Payment", name: "payment", type: "number", placeholder: "0" }
              ].map(({ label, name, type, required, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-medium mb-1">{label}</label>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                    className="w-full border rounded px-3 py-2 shadow-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 shadow-sm"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollNow;