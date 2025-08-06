import React from 'react';
import { useNavigate } from 'react-router-dom';



const Services = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "AI Bootcamps & Workshops",
      path: "/bootcamps",
      description:
        "Fast-paced, hands-on learning programs designed to build foundational and advanced AI skills across domains.",
      image: "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430009/Depth_6_Frame_1_evtzb0.png", // Replace with your actual image path or URL
    },
    {
      title: "Courses",
      path: "/bootcamps",
      description:
        "Custom-designed training sessions on cutting-edge AI topics delivered by expert practitioners and researchers.",
      image: "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430136/Depth_6_Frame_1_1_bl3cyk.png",
    },
    {
      title: "Center of Excellence",
      description:
        "Guidance and strategic support to set up AI-focused Centers of Excellence in research institutions and enterprises.",
      image: "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430172/Depth_6_Frame_1_2_nbude7.png",
    },
    {
      title: "AI Tech Conferences & Summits",
      description:
        "Annual flagship events that bring together AI thinkers, makers, and leaders to shape the future of responsible innovation.",
      image: "https://tse3.mm.bing.net/th/id/OIP.BrG9TqIlyaN4KQnO-7v4iAHaDt?pid=Api&P=0&h=180",
    },
  ];


const supportItems = [
  {
    title: "Hackathons & Innovation Challenges",
    description:
      "Solve real-world challenges through domain-specific AI hackathons and competitions co-hosted with partners.",
    image: "https://tse1.mm.bing.net/th/id/OIP.B-GdOl7jUm-eVeXul2za8QHaD3?pid=Api&P=0&h=180", // Optional image path if available
  },
  {
    title: "Startup Incubators & Innovation Hubs",
    description:
      "Structured support for early-stage AI startups with mentorship, infrastructure, access to compute, and industry networks.",
    image: "https://tse2.mm.bing.net/th/id/OIP.ppxvYq9JON-CFnluTaoC7QHaD4?pid=Api&P=0&h=180",
  },
  {
    title: "Joint Research Collaborations",
    description:
      "Collaborate with CAIRL to co-develop research, whitepapers, and deployable AI solutions across sectors.",
    image: "https://tse4.mm.bing.net/th/id/OIP.g4vMy2DIxmm07Tmx1ygfWwHaEb?pid=Api&P=0&h=180",
  },
];


const impactItems = [
  {
    title: "AI for Social Good & Rural Outreach",
    description:
      "Bringing AI to underserved communities by supporting initiatives in agriculture, public health, and education that create real social impact.",
    image: "https://tse2.mm.bing.net/th/id/OIP.PuhbmWODkZ1aFhZIK9EcpQHaDw?pid=Api&P=0&h=180", 
  },
  {
    title: "Liaising & Policy Engagement",
    description:
      "Connecting corporates, startups, academia, and policymakers to co-create AI frameworks, influence policy, and build sustainable ecosystems.",
    image: "https://tse3.mm.bing.net/th/id/OIP.SV9F4oXcogClRBRCl7qguwHaE7?pid=Api&P=0&h=180",
  },
];

  return (
   
     <section className="relative w-full bg-gray-50 overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
     
      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full text-[16px] font-normal">
          Our Services
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-playfair text-[#0D2E37] leading-snug">
          Driving responsible AI transformation through <br className="hidden sm:block" />
          <span>education, innovation, and collaboration.</span>
        </h1>

        
        <div className="mt-12 flex justify-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.RrcfHU8LPzUByIsfRQNXiAHaET?pid=Api&P=0&h=180" // Replace with your actual image URL
            alt="AI Collaboration Visual"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      <div className="bg-[#f9fafb] py-10 px-4 sm:px-6 lg:px-12">
<h2 className="text-2xl md:text-3xl font-playfair font-semibold text-center text-gray-800 mb-10">
        Capacity Building & Knowledge Empowerment
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {programs.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between cursor-pointer"
      onClick={() => {
        if (item.title === "AI Bootcamps & Workshops") {
          navigate('/bootcamps');
        }
        // You can add conditions for other titles here
         else if (item.title === "Courses") { navigate('/courses'); }
          else if (item.title === "Center of Excellence") { navigate('/coe'); }
          else if (item.title === "AI Tech Conferences & Summits") { navigate('/conferences'); }
      }}
    >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg text-[#000000] mb-2">{item.title}</h3>
                <p className="text-sm font-Intter font-normal text-gray-600">{item.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button 
                  className="bg-[#005BA9] hover:bg-blue-700 text-white items-end text-sm font-medium py-2 px-4 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.title === "AI Bootcamps & Workshops") {
                      navigate('/bootcamps');
                    }
                  }}
                >
                  Know more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <section className="bg-[#f9fafb] py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-center text-gray-800 mb-10">
        Innovation & Startup Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Card Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg text-[#000000] mb-2">{item.title}</h3>
                <p className="text-sm text-[#374151]">{item.description}</p>
              </div>

              <div className="w-full flex justify-end mt-4 ">
           <button className="
    px-6 py-[12px] 
    rounded-full 
    font-semibold 
    text-white 
    bg-[#005BA9]
    transition-all 
    duration-300 
    ease-in-out 
    shadow-none
    text-[16px] font-['Inter']
    cursor-pointer

    hover:bg-[#0A8FED] 
    hover:text-[white]
    hover:translate-y-[-2px]
    hover:rounded-full 
    hover:shadow-[4px_4px_0_0_#005BA9]

    active:bg-[#DFEFFF] 
    active:text-[#005BA9] 
    active:border-[4px] 
    active:border-[#005BA9] 
     active:shadow-none
  ">
      Know more
    </button>
        </div>
            </div>
          </div>
        ))}
      </div>
    </section>
 <section className="bg-[#f9fafb] py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-center text-[#0D2E37] mb-10">
        Ecosystem Building & Social Impact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impactItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              <div className="w-full flex justify-end mt-4 ">
           <button className="
    px-6 py-[12px] 
    rounded-full 
    font-semibold 
    text-white 
    bg-[#005BA9]
    transition-all 
    duration-300 
    ease-in-out 
    shadow-none
    text-[16px] font-['Inter']
    cursor-pointer

    hover:bg-[#0A8FED] 
    hover:text-[white]
    hover:translate-y-[-2px]
    hover:rounded-full 
    hover:shadow-[4px_4px_0_0_#005BA9]

    active:bg-[#DFEFFF] 
    active:text-[#005BA9] 
    active:border-[4px] 
    active:border-[#005BA9] 
     active:shadow-none
  ">
      Know more
    </button>
        </div>
            </div>
          </div>
        ))}
      </div>
    </section>

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
          <h3 className="text-white font-Intter  font-normal mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">About us</a></li>
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">Services</a></li>
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">Research & Innovation</a></li>
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">Happenings</a></li>
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">Focus Groups</a></li>
            <li><a className="space-y-2 text-sm  text-[#FFFFFF99]">Resources</a></li>
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

export default Services;