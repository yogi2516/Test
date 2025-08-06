import React from 'react';

const EventsSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mt-6 px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
            Happening
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#0D2E37] ">
            Happenings at CAiRL
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            AI is an ever-evolving field, and at CAiRL, we ensure you stay ahead of the curve.
            Our events, webinars, and visual journeys bring together the brightest minds,
            groundbreaking innovations, and real-world impact.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://aseankmp.com/_next/image?url=https://ahkmp-storage.is3.cloudhost.id/news/pumJW80rvtmhyvdw9nLFsAKilkOFaQuZkLZqBxyT.jpg&w=256&q=75"
                alt="Events"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-Intter font-normal text-[#005BA9] mb-4">Events</h3>
            <p className="text-[#6A7282] mb-4">
              CAiRL hosts and collaborates on high-impact AI events that bring together:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#6A7282]">
              <li>
                Global AI Leaders – Experts from industry, academia, and government.
              </li>
              <li>
                Innovators & Researchers – Pioneering breakthroughs in AI.
              </li>
              <li>
                Startups & Enterprises – Scaling AI adoption across industries.
              </li>
            </ul>
            <p className="italic text-[#6A7282] mt-4">
              <strong>Why It Matters:</strong> CAiRL’s events shape AI conversations and ignite industry collaboration.
            </p>

           <div className="mt-6">
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
      </div>

       
    <section>
  <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 md:p-12 rounded-lg shadow-md">
    {/* Left: Content */}
    <div className="w-full md:w-1/2 px-4 md:pr-8 order-2 md:order-1">
      <h2 className="text-2xl font-Intter font-normal text-[#005BA9] mb-4">Webinars</h2>
      <p className="text-[#6A7282] mb-4">
        Our webinars provide on-demand AI expertise from world-class speakers:
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#6A7282]">
        <li>
        Exclusive Fireside Chats – Conversations with AI pioneers.
        </li>
        <li>
          Live Demos & Workshops – Deep dives into AI applications.
        </li>
        <li>
        Expert Panels– Discussing AI trends, regulations, and innovations.
        </li>
      </ul>
      <p className="italic text-[#6A7282] font-semibold mt-6">
        Why It Matters:
        <span className="font-normal not-italic ml-1">
          Stay ahead with AI insights from global experts.
        </span>
      </p>
<div className="mt-6">
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

    {/* Right: Image */}
    <div className="w-full md:w-1/2 order-1 md:order-2">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0M-lqpn6HEndqTaCn8b_qNkhZZyJvW0xj4a3w2IVyywMmBDA_"
        alt="Webinar"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>

<section>
  <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 md:p-12 rounded-lg shadow-md">

    {/* Left: Image */}
    <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*FC8CyMGcQEXGiv37J0STJg.jpeg"
        alt="Visual Journey"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Right: Content + Button */}
    <div className="w-full md:w-1/2 md:pl-8 flex flex-col">
      <h2 className="text-2xl font-Intter font-normal text-[#005BA9] mb-4">Visual Journey</h2>
      <p className="text-[#6A7282] mb-4">
        A picture speaks a thousand words—our Visual Journey captures the milestones, achievements, and impact of CAiRL.
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#6A7282]">
        <li>
         Awards & Recognitions – Honouring our contributions to AI innovation.
        </li>
        <li>
          Achiever's Journey – Showcasing winners of CAiRL Hackathons & Challenges.
        </li>
        <li>
          Event Highlights – A glimpse into our summits, conferences, and AI bootcamps.
        </li>
      </ul>
      <p className="text-[#6A7282] mb-6">
        Explore our journey through images & videos – See how CAiRL is shaping AI’s future!
      </p>

     <div className="mt-6">
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
</section>


    </section>
  );
};

export default EventsSection;
