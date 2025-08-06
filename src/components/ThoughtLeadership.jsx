import React from 'react';
import {GraduationCap,BarChart3, Landmark,  Boxes,} from "lucide-react";
import { Download } from "lucide-react"; 
 
const ThoughtLeadership = () => {

  const cards = [
    {
      title: "Academic Institutions",
      description:
        "Seeking real-world impact through collaborative research initiatives",
      icon: <GraduationCap className="w-6 h-6 text-[#005BA9]" />,
    },
    {
      title: "Corporates & Startups",
      description:
        "Solving domain-specific challenges through AI innovation",
      icon: <BarChart3 className="w-6 h-6 text-[#005BA9]" />,
    },
    {
      title: "Government Bodies",
      description:
        "Looking to map the societal impact of AI and develop policy frameworks",
      icon: <Landmark className="w-6 h-6 text-[#005BA9]" />,
    },
    {
      title: "Industry Alliances",
      description:
        "That want to co-author thought leadership on emerging technology themes",
      icon: <Boxes className="w-6 h-6 text-[#005BA9]" />,
    },
  ];

  const knowledgeFormats = [
  {
    title: "AI Use Case Compendiums",
    description: "Comprehensive collections of industry applications",
  },
  {
    title: "Sector-Specific White Papers",
    description: "Deep dives into vertical-specific AI applications",
  },
  {
    title: "Policy & Ethical Frameworks",
    description: "Guidelines for responsible AI implementation",
  },
  {
    title: "Impact Reports",
    description: "Measuring and evaluating AI transformation",
  },
];

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <span className="inline-block mt-6 px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
            AI Research & Thought Leadership
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold font-playfair text-[#0D2E37] leading-tight mb-6">
            Powering responsible<br />AI transformation
          </h2>

          <p className="text-[#6A7282] mb-6 leading-relaxed text-[17px]">
            At CAiRL, we believe that impactful innovation begins with deep, domain-informed research. Our Thought Leadership initiatives aim to identify, document, and share high-impact AI use cases, ensuring that innovation is not only experimental — but actionable, scalable, and ethical.
          </p>

          <p className="text-[#6A7282]  mb-8 leading-relaxed text-[17px]">
            Whether it's reimagining clinical diagnostics, optimizing agricultural yield, or streamlining policy frameworks, we work with leading partners to co-create knowledge that drives meaningful outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#005BA9] text-white font-semibold px-6 py-3 rounded-full  transition">
              Propose Research Collaboration
            </button>
            <button className="border border-[#005BA9] text-[#005BA9] font-semibold px-6 py-3 rounded-full  transition">
              Submit a Use Case
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQHqBLcqKIBPoyAku9-Lw7TxeAbV9GyVy-ssmYELdE7BkabUC"
            alt="AI Transformation"
            className="w-[636px] h-[382.6611022949219px] rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block mt-6 px-3 py-1 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
          Collaborate
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-4 font-playfair text-[#0D2E37] leading-tight mb-6">
          Collaborate With Us on Research
        </h2>
        <p className="text-[#6A7282]  text-base">
          Join our network of researchers, innovators, and industry experts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border font-Intter font-medium border-blue-100 p-6 shadow-sm transition"
          >
            <div className="flex items-start text-[#6A7282]  gap-3">
              <div className="bg-blue-50 p-2 rounded-md">{card.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-[#6A7282] text-sm mt-1">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

     <div className="bg-[#f9fafb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block mt-6 px-3 py-1 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
          Our Research Formats
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold mt-4 font-playfair text-[#0D2E37] leading-tight mb-6">
          How We Share Knowledge
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {knowledgeFormats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              {/* Icon Placeholder */}
              <div className="w-6 h-6 bg-blue-100 rounded-sm mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     
      <div className="bg-white pt-20 pb-16 px-4">
      {/* Top Badge */}
      <div className="text-center mb-4">
        <span className="inline-block bg-blue-100 font-Intter text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
          Our Research Formats
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-4xl font-playfair font-semibold text-[#0D2E37] mb-10">
        How We Share Knowledge
      </h2>

      {/* Blue Section */}
      <div className="bg-gradient-to-r from-[#0067B8] to-[#009FE3] text-white rounded-3xl max-w-6xl mx-auto p-10">
      
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          1000 AI Use Cases for Lifesciences
        </h3>

        {/* Collaboration Tag */}
        <div className="inline-block bg-blue-50 text-blue-900 text-md font-nunito font-medium px-6 py-3 rounded-full mb-6">
          In collaboration with FABA (Federation of Asian Biotech Associations)
        </div>

        {/* Download Button */}
        <div>
          <button className="mt-4 inline-flex items-center gap-2 bg-white text-[#0067B8] text-base font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            <Download className="w-5 h-5" />
            Download Full Report
          </button>
        </div>
      </div>
    </div>

     <div className="bg-white py-16 px-4 max-w-5xl mb-6 mx-auto">
      
      <p className="text-lg text-[#0D2E37] text-left font-Intter font-medium mb-10">
        This pioneering compendium was developed by CAiRL and FABA to showcase
        how AI is accelerating transformation across the lifesciences and
        biotech sectors.
      </p>

      {/* Points */}
      <div className="space-y-10">
       
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold">
              1
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-Intter  text-[#0D2E37] ">
              Domain-specific use cases
            </h4>
            <p className="text-[#6A7282] text-sm">
              In genomics, diagnostics, clinical trials, and drug discovery
            </p>
          </div>
        </div>

       
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              2
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-Intter  text-[#0D2E37]">
              AI-readiness frameworks
            </h4>
            <p className="text-[#6A7282] text-sm">
              For hospitals, researchers, and policymakers
            </p>
          </div>
        </div>

        
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              3
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-Intter  text-[#0D2E37]">Real-world impact</h4>
            <p className="text-[#6A7282] text-sm">
              Implementation potential in the Indian healthcare landscape
            </p>
          </div>
        </div>
      </div>
    </div>

    <section className="bg-gradient-to-r from-[#002d2d] to-[#001f3f] h-[350px] rounded-xl p-8 md:p-12 text-white text-center mx-4 md:mx-16 my-10 relative overflow-hidden">
      {/* Optional background dots effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none rounded-xl"></div>

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
          Ready to make an impact with CAiRL?
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto">
          Explore how you can get involved as a student, researcher, partner, or sponsor.
        </p>

       
<div class="w-full pt-[40px] flex md:flex-row flex-col z-10 items-center justify-center gap-[20px]">
    <button class="
    px-6 py-[12px] 
    rounded-full 
    font-semibold 
    text-white 
    bg-transparent 
    transition-all 
    duration-300 
    ease-in-out 
    shadow-none
    text-[16px] font-['Inter']
    border-white cursor-pointer border

    hover:bg-[#DFEFFF] 
    hover:text-[#005BA9]
    hover:translate-y-[-2px]
    hover:rounded-full 
    hover:shadow-[4px_4px_0_0_#005BA9]

    active:bg-[#005BA9] 
    active:text-[white] 
    active:border-[4px] 
    active:border-[white] 
    active:shadow-none
  " fdprocessedid="7zrkyo">Become a member</button>
  <a href="/engage#becomeamember" class="block cursor-pointer">
  </a>
  <button class="
          px-6 py-[12px] 
          rounded-full 
          font-semibold 
          text-white 
          bg-transparent 
          transition-all 
          duration-300 
          ease-in-out 
          shadow-none
          text-[16px] font-['Inter']
          border-white  border
          cursor-pointer

          hover:bg-[#DFEFFF] 
          hover:text-[#005BA9]
          hover:translate-y-[-2px]
          hover:rounded-full 
          hover:shadow-[4px_4px_0_0_#005BA9]

          active:bg-[#005BA9] 
          active:text-[white] 
          active:border-[4px] 
          active:border-[white] 
          active:shadow-none
        " fdprocessedid="sybasc">Sponsor a Program</button><button class="
    px-6 py-[12px] 
    rounded-full 
    font-semibold 
    text-white 
    bg-transparent 
    transition-all 
    duration-300 
    ease-in-out 
    shadow-none
    text-[16px] font-['Inter']
    border-white  border
    cursor-pointer

    hover:bg-[#DFEFFF] 
    hover:text-[#005BA9]
    hover:translate-y-[-2px]
    hover:rounded-full 
    hover:shadow-[4px_4px_0_0_#005BA9]

    active:bg-[#005BA9] 
    active:text-[white] 
    active:border-[4px] 
    active:border-[white] 
    active:shadow-none
  " fdprocessedid="z2ux3">Start a Partnership</button>
  </div>
  </div>
  </section>
   <footer className="bg-gradient-to-r from-[#001f2b] to-[#000d1a] text-white py-10 px-6 md:px-20 rounded-t-3xl mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo & Newsletter */}
        <div className="md:col-span-1">
          <img src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751364097/image_54_klffqb.png" 
          alt="CAiRL Logo" 
          className="h-[120px] mb-4"/>
          <p className="text-sm w-[250px] h-[48px] mb-4">
            Subscribe to our newsletter or follow us online to stay ahead in AI.
          </p>
          <div className="w-full max-w-md bg-transparent rounded-full border border-gray-300 p-1 pl-5 flex items-center">
           <input
        type="email"
        placeholder="Enter your Email"
        className="flex-grow bg-transparent text-white placeholder-gray-300 text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-all"
      >
        Submit
      </button>
          </div>
        </div>

       {/* Center: Quick Links */}
<div className="space-y-2">
  <h3 className="text-white font-Intter font-normal mb-3">Quick Links</h3>
  <ul className="text-sm text-gray-300 space-y-1">
    <li><a href="/about" className="space-y-2 text-sm text-[#FFFFFF99]">About us</a></li>
    <li><a href="/services" className="space-y-2 text-sm text-[#FFFFFF99]">Services</a></li>
    <li><a href="/research-innovation" className="space-y-2 text-sm text-[#FFFFFF99]">Research & Innovation</a></li>
    <li><a href="/happenings" className="space-y-2 text-sm text-[#FFFFFF99]">Happenings</a></li>
    <li><a href="/focus-groups" className="space-y-2 text-sm text-[#FFFFFF99]">Focus Groups</a></li>
    <li><a href="/resources" className="space-y-2 text-sm text-[#FFFFFF99]">Resources</a></li>
  </ul>
</div>


        {/* Right: Contact Info */}
        <div className="space-y-2 text-sm text-gray-300">
          <h3 className="text-white font-Intter font-medium mb-3">Phone</h3>
          <p className='text-sm text-[#FFFFFF99] mb-2'>+91-9391335191</p>

          <h3 className="text-white font-Intter font-medium mb-2">Email</h3>
          <p className='text-sm text-[#FFFFFF99] mb-2'>info@cairl.org</p>

          <h3 className="ttext-white font-Intter font-medium mb-2">Address</h3>
          <p className='text-sm text-[#FFFFFF99] mb-2'
          >
            T-Hub, 2.0, Inorbit Mall Rd,<br/>
            Vittal Rao Nagar, Madhapur,<br />
            Hyderabad, Telangana 500081
          </p>

          <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

      <div class="flex space-x-4 w-full gap-[40px] justify-end   text-xl text-white ">
  
  <a href="/linkedin" class="hover:text-blue-500 w-[20.97px] h-[20.97px] text-[#C0C0C0]">
  <i class="fab fa-linkedin fa-lg"></i>
  </a>
  <a href="/twitter" class="hover:text-blue-400  w-[20px] h-[20px] text-[#C0C0C0]">
    <i class="fab fa-x-twitter fa-lg"></i>
  </a>
  <a href="/youtube" class="hover:text-red-500  w-[28px] h-[20px] text-[#C0C0C0] ">
    <i class="fab fa-youtube fa-lg"></i>
   </a></div>
        </div>
      
    </div>

      {/* Bottom copyright */}
      <div className="text-right text-gray-500 text-xs mt-12">
        Copyright © 2024. All rights reserved.
      </div>
    </footer>


    </section>
  );
};

export default ThoughtLeadership;
