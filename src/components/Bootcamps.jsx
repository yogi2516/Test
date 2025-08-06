import React, { useState, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const bootcampsData = [
  
 {
    id: 1,
    title: "AI & Machine Learning Bootcamp",
    description:
      "Immersive AI and Machine Learning Program covering Neural Networks, NLP, and Computer Vision. Duration: 12 Weeks. Prerequisites: Basic Programming Knowledge.",
    date: "Aug 1, 2025",
    time: " 09:30 AM - 10:30 (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430009/Depth_6_Frame_1_evtzb0.png",
  },
{
    id: 2,
    title: "AI & Machine Learning Bootcamp-2",
    description:
      "Immersive AI and Machine Learning Program covering Neural Networks, NLP, and Computer Vision. Duration: 12 Weeks. Prerequisites: Basic Programming Knowledge.",
    date: "June 11, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
    image:
      "https://res.cloudinary.com/dt271v2h3/image/upload/v1753430009/Depth_6_Frame_1_evtzb0.png",
  },

  {
    id: 3,
    title: "AI Product Design Lab-4",
    description:
      "User experience design bootcamp focusing on AI-driven product design, user research, and AI prototyping. Duration: 10 Weeks. Prerequisites: Design Thinking Basics.",
    date: "May 25, 2025",
    time: "09:30 AM - 10:30 AM (IST)",
    location: "T-Hub",
    price: "Rs 4,500",
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
    time: "11:30 AM - 12:00PM (IST)",
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

const pastEvents = [
  {
    id: 1,
    title: "AI & ML Bootcamp",
    date: "2025-08-10",
    description: "A deep dive into AI technologies",
    image: "https://your-image-url.com",
  },
  {
    id: 2,
    title: "Web Dev Bootcamp",
    date: "2025-06-01",
    description: "Learn full-stack web development",
    image: "https://your-image-url.com",
  },
];

const highlightDates = bootcampsData.map((b) => new Date(b.date));

const tabs = [
  { label: "All", filter: "all" },
  { label: "Ongoing", filter: "ongoing" },
  { label: "Upcoming", filter: "upcoming" },
  { label: "Past", filter: "past" },
];

const isPastDate = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  return date < today.setHours(0, 0, 0, 0);
};

const Bootcamps = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4); // for pagination
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const today = new Date();
    if (date < today.setHours(0, 0, 0, 0)) {
      setActiveTab('past');
    } else if (date.toDateString() === today.toDateString()) {
      setActiveTab('ongoing');
    } else {
      setActiveTab('upcoming');
    }
    setVisibleCount(4); 
  };

  

  const filteredBootcamps = useMemo(() => {
    const now = new Date();
    return bootcampsData.filter((b) => {
      const eventDate = new Date(b.date);
      const [startTime] = b.time.split('-');
      const eventStart = new Date(`${b.date} ${startTime.trim()}`);

      if (activeTab === 'past') return eventStart < now;
      if (activeTab === 'ongoing') {
        return (
          eventDate.toDateString() === now.toDateString() &&
          eventStart <= now &&
          new Date(`${b.date} ${b.time.split('-')[1].trim()}`) > now
        );
      }
      if (activeTab === 'upcoming') return eventStart > now;
      return true;
    });
  }, [activeTab]);

  const paginatedBootcamps = filteredBootcamps.slice(0, visibleCount);

  const selectedBootcamps = useMemo(() => {
    if (!selectedDate) return [];
    return bootcampsData.filter(
      (b) => new Date(b.date).toDateString() === selectedDate.toDateString()
    );
  }, [selectedDate]);

  const handleEnrollClick = (bootcamp) => {
    if (isPastDate(bootcamp.date)) return;
    navigate(`/enroll/${bootcamp.id}`, { state: { bootcamp } });
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
              Bootcamps
            </span>
            <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mt-4">
              AI Bootcamps & Workshops
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
            {/* Bootcamps */}
            <div className="md:col-span-2 space-y-6">
              {paginatedBootcamps.map((bootcamp) => (
                <div key={bootcamp.id} className="bg-white border rounded-lg p-4 flex gap-4 shadow-sm">
                  <img src={bootcamp.image} alt={bootcamp.title} className="w-28 h-28 object-cover rounded" />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-800">{bootcamp.title}</h2>
                    <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-3">{bootcamp.description}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>{bootcamp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{bootcamp.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{bootcamp.location}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-blue-700 font-semibold">{bootcamp.price}</span>
                      {!isPastDate(bootcamp.date) && (
                        <button
                          onClick={() => handleEnrollClick('/enroll-now')}
                          className="px-6 py-[12px] rounded-full font-semibold text-white bg-[#005BA9] hover:bg-[#0A8FED] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#005BA9] active:bg-[#DFEFFF] active:text-[#005BA9] active:border-[4px] active:border-[#005BA9] active:shadow-none"
                        >
                          Enroll now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}


             {visibleCount < filteredBootcamps.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={handleLoadMore}
                   className="px-6 py-[12px] rounded-full font-semibold text-white bg-[#005BA9] hover:bg-[#0A8FED] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#005BA9] active:bg-[#DFEFFF] active:text-[#005BA9] active:border-[4px] active:border-[#005BA9] active:shadow-none"
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
                    Selected Bootcamps: <span className="text-xs">{selectedDate.toDateString()}</span>
                  </h4>
                  {selectedBootcamps.length > 0 ? (
                    selectedBootcamps.map((bootcamp) => (
                      <div key={bootcamp.id} className="mt-3 bg-gray-50 text-[#000000] border p-3 rounded text-sm">
                        <div className="font-bold">{bootcamp.title}</div>
                        <div className="text-gray-600 text-xs">
                          {bootcamp.time} | {bootcamp.location}
                        </div>
                        <div className="text-[#0E0D1399] text-xs font-semibold mt-1">{bootcamp.price}</div>
                        {!isPastDate(bootcamp.date) && (
                          <button
                          onClick={() => navigate('/enroll', { state: { bootcamp } })}
                          className="bg-blue-700 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition text-center"
                           >
                                 Enroll Now
                        </button>

                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 mt-2">No bootcamps on this date.</div>
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



    </>
  );
};

export default Bootcamps;