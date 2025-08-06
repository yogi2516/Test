import React from "react";


const MoUsSection = () => {
  return (
    <>
    <div className="bg-gray-50 text-center py-16 px-4">
      {/* Tag/Label */}
      <div className="inline-block mt-6 px-4 py-2 mb-6 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
        Our Contributions
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#0D2E37]  mb-4">
        MoUs & Strategic Partnerships
      </h2>

      
      <p className="text-[#6A7282] max-w-2xl mx-auto text-base md:text-lg">
        Collaborating with leading institutions to shape the future of responsible AI in India.
      </p>
    </div>

  <div className="bg-gray-50 py-12 px-6 mb-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl  md:text-4xl font-semibold font-playfair text-[#005BA9] mb-6">MoU with T-Hub MATH</h2>
          
          <div className="mb-6">
            <h3 className=" text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">About T-Hub MATH</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              T-Hub MATH (Machine Learning and AI Technology Hub) is a flagship AI innovation ecosystem established by T-Hub and the Department of Science & Technology, Government of India. It supports deeptech startups, facilitates AI research, and fosters strategic industry collaboration.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">CAiRL’s Strategic Partnership</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              Our MoU with T-Hub MATH enables CAiRL to co-create an innovation-driven environment for AI startups and researchers. We collaborate on hackathons, CoE development, and mentorship programs. This partnership amplifies our mission to accelerate ethical, real-world AI adoption and nurtures the next generation of AI leaders.
            </p>
          </div>

          <p className="italic text-[#374151] font-semibold mb-6">
            Want to co-host innovation challenges or access incubation support?
          </p>

          <button className="bg-blue-800 hover:bg-blue-800 text-white font-medium px-3 py-2 rounded-full transition duration-300">
            Partner with CAiRL
          </button>
        </div>

        {/* Right: Logos */}
        <div className="lg:w-1/3 flex justify-center items-center gap-10">
          <img
            src="https://png.pngitem.com/pimgs/s/679-6796486_t-hub-logo-png-thub-logo-png-transparent.png"
            alt="T-Hub Logo"
            className="w-32 md:w-40 object-contain"
          />
          <img
            src="https://www.mat-hub.ai/wp-content/uploads/2023/09/MATH-Final-Logo-01-1.png" 
            alt="MATH Logo"
            className="w-32 md:w-40 object-contain"
          />
        </div>
      </div>
    </div>

    <section className="bg-white px-6 py-12 md:px-20 lg:px-32">
     <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-shrink-0 w-[200px] md:w-[250px]">
          <img
            src="https://biofaba.org.in/wp-content/uploads/2025/06/logo.png" 
            alt="FABA Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl  md:text-4xl font-semibold font-playfair text-[#005BA9] mb-6">
            MoU with FABA (Federation of Asian Biotech Associations)
          </h2>

          <div className="mt-6">
            <h3 className=" text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">About FABA</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              FABA is a pioneering platform advancing biotechnology, healthcare, and life sciences
              through multi-stakeholder collaboration. With global reach and scientific depth,
              FABA is committed to accelerating research-led innovation in the bioeconomy.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">CAiRL’s Strategic Partnership</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              CAiRL's partnership with FABA positions us at the intersection of AI and biotech
              innovation. Together, we're exploring AI applications in genomics, drug discovery,
              and clinical diagnostics. This collaboration fuels our 1000+ AI Use Cases in Life
              Sciences initiative, and helps design AI training programs aligned with biopharma
              needs.
            </p>
          </div>

          <p className="italic text-[#374151] mt-4 font-semibold mb-6">
            Are you building AI in life sciences? Let’s co-create the future.
          </p>

          <button className="mt-4 bg-blue-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-800 transition">
            Join Our Research Network
          </button>
        </div>
      </div>

      </section>
       <section className="bg-white px-6 py-12 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl  md:text-4xl font-semibold font-playfair text-[#005BA9] mb-6">
            Academic Institutions
          </h2>
          <div className="mt-6">
            <h3 className="text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">CAiRL’s Academic Engagement Model</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              We co-develop AI curricula, drive interdisciplinary research, and support PhD projects.
              Our AI Bootcamps, Faculty Development Programs, and AI Fridays enable universities to
              integrate responsible AI into core learning. This collaboration also connects students
              with real-world industry challenges through hackathons and innovation labs.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[24px] font-normal font-Intter text-[#0D2E37] leading-[120%] mb-2">About the Collaboration</h3>
            <p className="text-[#6A7282] text-18px font-normal">
              CAiRL partners with leading academic institutions such as IIT Hyderabad, IIIT Hyderabad,
              and other top universities to strengthen India’s AI education and research backbone.
            </p>
          </div>

          <p className="italic text-[#374151] mt-4 font-semibold mb-6">
            If you’re an educator or researcher looking to scale your AI impact, CAiRL is your platform.
          </p>

          <button className="mt-4 bg-blue-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-800 transition">
            Collaborate with Us
          </button>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-[400px]">
          <img
            src="https://images.stockcake.com/public/4/0/9/409f05f8-f569-4afa-a5e1-dc9cfcd48a3b_medium/interactive-starry-display-stockcake.jpg" // ✅ Replace with your image path
            alt="Academic Engagement"
            className="w-[375px] h-[302px] object-cover"
          />
        </div>
      </div>

      <section className="bg-white px-[20px]  md:px-[80px] py-[60px]">
      <div className="flex flex-col md:flex-row items-center gap-[48px]">
        {/* Left - Logo */}
        <div className="w-[180px] md:w-[230px] h-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Emblem_of_Telangana.svg/1200px-Emblem_of_Telangana.svg.png"
            alt="Government of Telangana"
            className="w-full justify-start h-auto object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[36px] font-semibold font-playfair text-[#005BA9] leading-[120%] mb-[24px]">
            Government Engagements
          </h2>

          
          <div className="mb-[24px]">
            <h3 className="text-[22px] md:text-[24px] font-medium text-[#0D2E37] leading-[120%] mb-[10px]">
              About the Engagement
            </h3>
            <p className="text-[#6A7282] text-[18px] leading-[28px]">
              CAiRL works closely with the Telangana Government and national agencies to align AI
              innovation with public policy, digital transformation, and societal development.
            </p>
          </div>

          <div className="mb-[24px]">
            <h3 className="text-[22px] md:text-[24px] font-medium text-[#0D2E37] leading-[120%] mb-[10px]">
              Driving AI for Public Good
            </h3>
            <p className="text-[#6A7282] text-[18px] leading-[28px]">
              From policy co-creation and ethics-driven frameworks to grassroots applications in
              agri-tech and health-tech, CAiRL enables government bodies to harness AI responsibly.
              Our access to public datasets, like Telangana’s ADEx platform, and our focus on AI for
              Social Good make CAiRL a trusted enabler of impact-first AI programs.
            </p>
          </div>

          <p className="italic font-semibold text-[16px] text-[#374151]">
            Are you a policymaker or public agency exploring AI?
          </p>

        
          <button className="mt-[20px] bg-[#005BA9] text-white text-[16px] font-semibold py-[10px] px-[28px] rounded-full hover:bg-[#004b8a] transition">
            Partner with CAiRL for Strategic AI Implementation
          </button>
        </div>
      </div>
    </section>

        <section className="bg-[rgb(250,250,250)] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#0F172A] font-playfair text-[32px] md:text-[36px] font-bold mb-6">
          Why These Partnerships Matter
        </h2>
        <p className="text-[#64748B] text-[18px] leading-[32px]">
          These MoUs and strategic collaborations are not just symbolic — they form the backbone of
          CAiRL’s mission to build India’s most ethical, inclusive, and scalable AI ecosystem. By
          working with leaders across innovation, research, and governance, we enable meaningful,
          measurable outcomes that benefit both society and the economy.
        </p>
      </div>
    </section>
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
    
        </>
  );
};

export default MoUsSection;
