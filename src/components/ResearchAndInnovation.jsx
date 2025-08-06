import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const OurContributions = () => {
    const navigate = useNavigate(); 
  return (
    <section className="bg-gray-50 py-16 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block mt-6 px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
          Our Contributions
        </span>
        <h2 className="text-3xl sm:text-4xl text-[40px] font-playfair font-semibold text-[#0D2E37] mb-4">
          Empowering Tomorrow with AI Ecosystems <br className="hidden sm:block" /> Today
        </h2>
        <p className="text-[#6A7282] h-full w-full text-[18px] leading-[150%]">
          At CAiRL, we are more than just an AI research hub—we are architects of the AI revolution.
          Our contributions span cutting-edge research, ecosystem development, mentorship, and AI-driven social impact.
        </p>
      </div>

       <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side Image with Only Image Hover Effect */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://cdn.analyticsvidhya.com/wp-content/uploads/2024/11/What-is-an-Agentic-AI-Planning-Pattern_.webp"
              alt="AI Research"
              className="w-[636px] h-[382.6611022949219px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI Research & Thought <br className="hidden md:block" /> Leadership
          </h2>
          <p className="text-[#6A7282] font-Intter font-normal mb-4">
            We curate high-stakes AI hackathons that push the boundaries of problem-solving. Our hackathons:
          </p>
          <ul className="list-disc list-inside font-Intter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>Pioneering AI research in Generative AI, Explainable AI, and AI Ethics.</li>
            <li>Collaborating with top research institutes to drive fundamental AI advancements.</li>
            <li>Publishing AI white papers, frameworks, and best practices for industry adoption.</li>
          </ul>
          <button
          onClick={() => navigate('/thought-leadership')}
           className="
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
    </section>

<section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI Education & Skill <br className="hidden md:block" /> Development
          </h2>
          <p className="text-[#6A7282] font-Intter font-normal mb-4">
            AI’s power lies in people who understand and build it. That’s why CAiRL is shaping the next generation of AI innovators through:
          </p>
          <ul className="list-disc list-inside font-Intter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>
              AI Bootcamps & Upskilling Programs - Equipping professionals and students with AI expertise.
            </li> 
            <li>
              AI Curriculum Development – Designing AI learning modules for universities & enterprises.
            </li>
            <li>
              Industry-Recognized AI Certifications – Ensuring AI skills are job-ready.
            </li>
          </ul>
          <p className="text-[#6A7282] italic">
            <strong>Why It Matters:</strong> We’re building the AI workforce of the future.
          </p>
<div className="mt-6">
          <button
          onClick={() => navigate('/services')}
          className="
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
        {/* Right Side: Image */}
       <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/68501fef845467aff6b8da16_fuhrung-ohne-hierarchie-was-daos-web3-fur-hr-bedeuten-konnten.jpg"
              alt="AI Research"
              className="w-[636px] h-[382.6611022949219px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
<section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2020/06/BP-Future-of-technology-in-Education_body_.jpg"
              alt="AI Research"
              className="w-[636px] h-[382.6611022949219px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>


        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI Ecosystem Building & <br className="hidden md:block" /> Partnerships
          </h2>
          <p className="text-[#6A7282] font-Intter font-normal mb-4">
            AI progress thrives on collaboration. CAiRL bridges the gap between:
          </p>
          <ul className="list-disc list-inside font-Intter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>Government, academia, startups, and enterprises to drive AI adoption.</li>
            <li>AI-focused partnerships with research labs, policymakers, and industry pioneers.</li>
            <li>Global AI initiatives to set benchmarks in AI regulation and innovation.</li>
          </ul>
          <p className="text-[#6A7282] italic">
            <strong>Why It Matters:</strong> A connected AI ecosystem accelerates responsible and scalable AI deployment.
          </p>
          <div className="w-full flex justify-start mt-6 ">
           <button 
           onClick={() => navigate('/mous')}
           className="
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
    </section>
<section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI Hackathons & <br className="hidden md:block" />
            Innovation Challenges
          </h2>

          <p className="text-[#6A7282] font-Inter font-normal mb-4">
            We don’t just discuss AI—we build it. CAiRL’s hackathons are where:
          </p>

          <ul className="list-disc list-inside font-Intter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>Top AI talent solves real-world challenges in healthtech, finance, and sustainability.</li>
            <li>Winning solutions receive funding, mentorship, and enterprise partnerships.</li>
            <li>Startups get fast-tracked for AI adoption and scale..</li>
          </ul>

          <p className="text-[#6A7282] italic mb-6">
            <strong>Why It Matters:</strong> We turn AI ideas into real-world solutions with measurable impact.
          </p>
 <div className="mt-6">
          <button
          onClick={() => navigate('/hackathons-innovation')}
          className="
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
    hover:text-[#9e6b6b]
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
        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQEyR2GCyh7zZw/article-cover_image-shrink_600_2000/B56Zbm6V6dG4AU-/0/1747630778300?e=2147483647&v=beta&t=Rf8oDfpETg6NODTYQhHJ72FKAGOeSOixdHW5w0_m6E0"
              alt="AI Research"
              className="w-[636px] h-[382.66px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  
  <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://assets.hannover-re.com/image/533267266226/image_8p2lji23ol2ph7ljsfpki70q4s/-FJPG-T16:9-S352x198/Prof_Data_Hero_601375366.jpg"
              alt="AI Research"
              className="w-[636px] h-[382.6611022949219px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI for Social Good &<br className="hidden md:block" />
            Sustainability
          </h2>

          <p className="text-[#6A7282] font-Inter font-normal mb-4">
            AI should not just drive profits—it should drive positive change. CAiRL leads AI initiatives for:
          </p>

          <ul className="list-disc list-inside font-Intter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>Climate resilience – AI-driven solutions for agriculture, energy efficiency & sustainability.</li>
            <li>AI in public healthcare – Early disease detection, telemedicine, and resource optimization.</li>
            <li>Rural AI outreach – Bringing AI-powered education and resources to underprivileged areas.</li>
          </ul>

          <p className="text-[#6A7282] italic ">
            <strong>Why It Matters:</strong> AI must be inclusive, ethical, and used for the greater good.
          </p>

          <div className="mt-6">
           <button
           onClick={() => navigate('/services')}
           className="
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
    hover:text-[#9e6b6b]
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
    </section>

     <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-Inter font-semibold text-[#005BA9] mb-4">
            AI Mentorship &<br className="hidden md:block" />
            Startup Support
          </h2>

          <p className="text-[#6A7282] font-Inter font-normal mb-4">
            We nurture the AI disruptors of tomorrow by offering:
          </p>

          <ul className="list-disc list-inside font-Inter font-normal text-[#6A7282] space-y-2 mb-4">
            <li>Mentorship from AI experts, researchers, and industry veterans.</li>
            <li>Investor and corporate connects for AI-driven startups.</li>
            <li>Access to AI compute resources, datasets, and technical guidance.</li>
          </ul>

          <p className="text-[#6A7282] italic">
            <strong>Why It Matters:</strong> Startups drive innovation—CAiRL ensures they succeed.
          </p>

          <div className="mt-6">
           <button
           onClick={() => navigate('/incubators-hubs')}
           className="
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
    hover:text-[#9e6b6b]
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

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://imageio.forbes.com/blogs-images/bernardmarr/files/2018/12/AdobeStock_206783935-1200x800.jpeg?format=jpg&height=900&width=1600&fit=bounds"
              alt="AI Research"
              className="w-[636px] h-[382.6611022949219px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
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

export default OurContributions;
