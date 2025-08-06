import React, { useState, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const incubatorsData = [
  {
    id: 1,
    title: "T-Hub Innovation Program",
    description:
      "Leading innovation hub offering startup incubation, mentorship, and funding access. Duration: 6 Months.",
    date: "Aug 1, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub, Hyderabad",
    price: "Free",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430009/Depth_6_Frame_1_evtzb0.png",
  },
  {
    id: 2,
    title: "FinTech Accelerator",
    description:
      "Specialized program supporting early-stage fintech startups with capital and market access.",
    date: "Sep 10, 2025",
    time: "10:00 AM - 12:00 PM (IST)",
    location: "Bengaluru Innovation Center",
    price: "Free",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430172/Depth_6_Frame_1_2_nbude7.png",
  },
  {
    id: 3,
    title: "AI Startup Incubation Camp",
    description:
      "An exclusive incubation program for AI-based startups focusing on product-market fit and scaling.",
    date: "Oct 5, 2025",
    time: "11:30 AM - 1:30 PM (IST)",
    location: "Delhi AI Hub",
    price: "Free",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430136/Depth_6_Frame_1_1_bl3cyk.png",
  },
  {
    id: 4,
    title: "Data Science Bootcamp-3",
    description:
      "Comprehensive Data Science Bootcamp focusing on Machine Learning, Data Analysis, and Visualization. Duration: 16 Weeks. Prerequisites: Statistics and Programming Fundamentals.",
    date: "May 5, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430172/Depth_6_Frame_1_2_nbude7.png",
  },
  {
    id: 5,
    title: "Data Science Bootcamp-2",
    description:
      "Comprehensive Data Science Bootcamp focusing on Machine Learning, Data Analysis, and Visualization. Duration: 16 Weeks. Prerequisites: Statistics and Programming Fundamentals.",
    date: "Aug 11, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430172/Depth_6_Frame_1_2_nbude7.png",
  },
  {
    id: 6,
    title: "AI Product Design Lab",
    description:
      "User experience design bootcamp focusing on AI-driven product design, user research, and AI prototyping. Duration: 10 Weeks. Prerequisites: Design Thinking Basics.",
    date: "Sep 6, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430136/Depth_6_Frame_1_1_bl3cyk.png",
  },
  {
    id: 7,
    title: "AI & Machine Learning Bootcamp-3",
    description:
      "Immersive AI and Machine Learning Program covering Neural Networks, NLP, and Computer Vision. Duration: 12 Weeks. Prerequisites: Basic Programming Knowledge.",
    date: "Aug 20, 2025",
    time: "10:00 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430009/Depth_6_Frame_1_evtzb0.png",
  },
  {
    id: 8,
    title: "AI Product Design Lab-2",
    description:
      "User experience design bootcamp focusing on AI-driven product design, user research, and AI prototyping. Duration: 10 Weeks. Prerequisites: Design Thinking Basics.",
    date: "July 20, 2025",
    time: "11:30 AM - 12:00 PM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430136/Depth_6_Frame_1_1_bl3cyk.png",
  },
  {
    id: 9,
    title: "AI Product Design Lab-3",
    description:
      "User experience design bootcamp focusing on AI-driven product design, user research, and AI prototyping. Duration: 10 Weeks. Prerequisites: Design Thinking Basics.",
    date: "Aug 31, 2025",
    time: "11:00 AM - 11:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430136/Depth_6_Frame_1_1_bl3cyk.png",
  },
  {
    id: 10,
    title: "Data Science Bootcamp",
    description:
      "Comprehensive Data Science Bootcamp focusing on Machine Learning, Data Analysis, and Visualization. Duration: 16 Weeks. Prerequisites: Statistics and Programming Fundamentals.",
    date: "Aug 15, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430172/Depth_6_Frame_1_2_nbude7.png",
  },
];

const highlightDates = incubatorsData.map((b) => new Date(b.date));

const tabs = [
  { label: "All", filter: "all" },
  { label: "Ongoing", filter: "ongoing" },
  { label: "Upcoming", filter: "upcoming" },
  { label: "Past", filter: "past" },
];

const isPastDate = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const StartupIncubatorsAndInnovationHubs = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      setActiveTab('past');
    } else if (date.toDateString() === new Date().toDateString()) {
      setActiveTab('ongoing');
    } else {
      setActiveTab('upcoming');
    }
    setVisibleCount(4);
  };

  const filteredIncubators = useMemo(() => {
    const now = new Date();
    return incubatorsData.filter((b) => {
      const eventDate = new Date(b.date);
      const [startTime] = b.time.split('-');
      const eventStart = new Date(`${b.date} ${startTime.trim()}`);

      if (activeTab === 'past') return eventStart < now;
      if (activeTab === 'ongoing') {
        const endTime = b.time.split('-')[1] ? b.time.split('-')[1].trim() : null;
        const eventEnd = endTime ? new Date(`${b.date} ${endTime}`) : new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
        return (
          eventDate.toDateString() === now.toDateString() &&
          eventStart <= now &&
          eventEnd > now
        );
      }
      if (activeTab === 'upcoming') return eventStart > now;
      return true;
    });
  }, [activeTab]);

  const paginatedIncubators = filteredIncubators.slice(0, visibleCount);

  const selectedIncubators = useMemo(() => {
    if (!selectedDate) return [];
    return incubatorsData.filter(
      (b) => new Date(b.date).toDateString() === selectedDate.toDateString()
    );
  }, [selectedDate]);

  const handleEnrollClick = (item) => {
    if (isPastDate(item.date)) return;
    navigate('/enroll-now', { state: { item } });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <section className="px-6 py-10 md:px-12 bg-[#f9f9f9] font-nunito">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="bg-blue-100 text-[#005BA9] px-3 py-3 rounded-full font-Intter text-sm font-medium">
           Startup Incubators & Innovation Hubs
            </span>
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mt-4">
              Startup Incubators & Innovation Hubs
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-start gap-4 mb-10">
            {tabs.map(({ label, filter }) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveTab(filter);
                  setSelectedDate(null);
                  setVisibleCount(4);
                }}
                className={`px-4 py-2 border rounded-full text-sm font-medium ${
                  activeTab === filter
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Events list */}
            <div className="md:col-span-2 space-y-6">
              {paginatedIncubators.map((event) => (
                <div key={event.id} className="bg-white border rounded-lg p-4 flex gap-4 shadow-sm">
                  <img src={event.image} alt={event.title} className="w-28 h-28 object-cover rounded" />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
                    <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-3">{event.description}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-blue-700 font-semibold">{event.price}</span>
                      {!isPastDate(event.date) && (
                        <button
                          onClick={() => handleEnrollClick(event)}
                          className="px-6 py-[12px] rounded-full font-semibold text-white bg-[#005BA9] hover:bg-[#0A8FED] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#005BA9]"
                        >
                          Enroll now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {visibleCount < filteredIncubators.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-[12px] rounded-full font-semibold text-white bg-[#005BA9] hover:bg-[#0A8FED] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#005BA9]"
                  >
                    Add more
                  </button>
                </div>
              )}
            </div>

            {/* Calendar */}
            <div className="border rounded-lg p-4 shadow-sm bg-transparent">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#000000] mb-2">Schedule</h3>
                <Calendar
                  className="w-full rounded-full text-[#000000]"
                  onChange={handleDateChange}
                  value={selectedDate}
                  tileClassName={({ date }) =>
                    highlightDates.some(
                      (d) =>
                        d.getDate() === date.getDate() &&
                        d.getMonth() === date.getMonth() &&
                        d.getFullYear() === date.getFullYear()
                    )
                      ? 'highlight-date'
                      : null
                  }
                />
              </div>

              {selectedDate && (
                <div className="mt-4">
                  <h4 className="text-sm text-[#000000] font-semibold">
                    Selected Events: <span className="text-xs">{selectedDate.toDateString()}</span>
                  </h4>
                  {selectedIncubators.length > 0 ? (
                    selectedIncubators.map((event) => (
                      <div key={event.id} className="mt-3 bg-gray-50 text-[#000000] border p-3 rounded text-sm">
                        <div className="font-bold">{event.title}</div>
                        <div className="text-gray-600 text-xs">
                          {event.time} | {event.location}
                        </div>
                        <div className="text-[#0E0D1399] text-xs font-semibold mt-1">{event.price}</div>
                        {!isPastDate(event.date) && (
                          <button
                            onClick={() => navigate('/enroll-now', { state: { item: event } })}
                            className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition text-center mt-2"
                          >
                            Enroll Now
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 mt-2">No events on this date.</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-6 py-12 md:px-12 bg-[#f9f9f9] font-sans">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <span className="bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full font-Intter text-sm font-medium">
            Past Events
          </span>
          <h2 className="text-3xl font-semibold font-playfair text-gray-800 mt-4">
            Watch Past Events On-Demand
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="relative aspect-video bg-gray-200">
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-[#005BA9] font-semibold text-base">AI & Healthcare</h3>
              <p className="text-sm text-[#000000] mt-1">Transforming patient care with AI.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="relative aspect-video bg-gray-200">
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-[#005BA9] font-semibold text-base">Generative AI & Ethics</h3>
              <p className="text-sm text-[#000000] mt-1">Responsible AI adoption strategies.</p>
            </div>
          </div>
        </div>

        {/* Centered third card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div className="relative aspect-video bg-gray-200">
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-[#005BA9] font-nunito font-semibold text-base">AI in FinTech</h3>
              <p className="text-sm text-[#000000] mt-1">How AI is redefining financial services.</p>
            </div>
          </div>
        </div>

        <div className="text-center text-[20px] text-black font-medium mt-10 px-4 leading-8">
          Same design for all the Capacity Building & Knowledge Empowerment
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
    </>
  );
};

export default StartupIncubatorsAndInnovationHubs;
