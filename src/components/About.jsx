import React, { useState, useRef, useEffect } from 'react';
import "../index.css"
//import { stringify } from 'postcss'
//import  {translateY,scrollY} from 'react';
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ArrowLeft, ArrowRight } from "lucide-react";


const About = () => {

const faqs = [
  {
    question: "What is CAiRL's mission?",
    answer: "CAiRL is dedicated to advancing AI innovation while ensuring that it is ethical, scalable, and aligned with societal needs. Our mission is to build an inclusive ecosystem where collaboration between academia, industry, and government leads to AI solutions that have a meaningful, real-world impact.",
  },
  {
    question: "How does CAiRL collaborate with startups?",
    answer: " CAiRL partners with startups through incubators like T-Hub, where we offer mentorship, resources, and connections to industry leaders. We help AI startups scale their solutions and facilitate AI adoption across various industries, ensuring that innovation leads to tangible societal benefits.",
  },
  {
    question: "What sectors does CAiRL focus on?",
    answer: "CAiRL focuses on a variety of sectors, including healthcare, agriculture, biopharma, education, and more. We aim to use AI to solve pressing challenges in these fields and contribute to sustainable development.",
  },
  {
    question: "How can I collaborate with CAiRL?",
    answer: " We welcome collaborations with research institutions, AI innovators, industry leaders, and government bodies. Whether you are interested in co-developing AI solutions, conducting research, or exploring policy advocacy, CAiRL provides opportunities to collaborate on impactful projects.",
  },
  {
    question: "Does CAiRL provide AI education or training programs?",
    answer:
      " Yes, CAiRL offers a range of educational programs, including workshops, mentorship, and training to develop a skilled AI workforce. Our goal is to increase AI literacy and promote ethical AI education to ensure responsible development and deployment of AI technologies.",
  },
  {
    question: "How does CAiRL ensure ethical AI development?",
    answer: "At CAiRL, ethical AI is at the heart of everything we do. We develop frameworks for transparency, accountability, and fairness in AI systems. Our team works to minimize bias, ensure inclusivity, and uphold privacy and security standards in all AI solutions we develop or support.",
  },
  {
    question: "How can I apply for grants or funding at CAiRL?",
    answer: " CAiRL applies for various AI-related grants in sectors like education, ecosystem development, and enterprise adoption. You can reach out to our team to explore potential funding opportunities or partnerships related to AI research, innovation, or application.",
  },
  {
    question: "What are CAiRL’s future goals for AI in India?",
    answer: " CAiRL aims to position India as a global leader in AI by fostering innovation, building an inclusive AI workforce, and shaping national policies that support responsible AI development. We plan to continue growing the AI ecosystem, supporting startups, advancing research, and making AI accessible to all sectors.",
  },
  {
    question: "How can I stay updated with CAiRL's initiatives?",
    answer: "Stay connected with CAiRL through our website, newsletters, and social media channels to get the latest updates on our research, events, and initiatives. We also encourage you to subscribe to our newsletter to receive regular insights and updates.",
  },
];



const contents = [
  {
    title: "Facilitate Collaborative Research and Development",
    points: [
      "Foster cross-disciplinary research by connecting academia, industry, and government.",
      "Support large-scale research projects in AI across healthcare, biopharma, agriculture, and other critical sectors.",
      "Host knowledge-sharing events such as AI Fridays, where experts come together to exchange ideas and collaborate.",
    ],
  },
  {
    title: "Promote Ethical AI Practices",
    points: [
      "Encourage transparency, fairness, and accountability in AI systems.",
      "Develop frameworks for responsible data usage and AI deployment.",
      "Engage with policymakers to ensure regulatory alignment with ethical standards.",
    ],
  },
  {
    title: "Enable Skill Development in AI",
    points: [
      "Design training programs for students and professionals.",
      "Collaborate with universities for AI curriculum integration.",
      "Launch mentorship programs for emerging AI talent.",
    ],
  },
  {
    title: "Drive AI Innovation for Social Good",
    points: [
      "Support AI solutions that address challenges in sustainability, education, and accessibility.",
      "Work with NGOs and local governments for scalable impact.",
      "Measure societal benefits and optimize solutions accordingly.",
    ],
  },
 
];

const cardContents = [
    {
      title: "Advance AI for Public Good",
      points: [
        "Develop AI solutions that address pressing societal issues such as healthcare access, environmental sustainability, and economic empowerment.",
        "Focus on applications that improve public health outcomes, increase agricultural productivity, and create opportunities for underserved communities.",
        "Use AI to support inclusive economic growth, enabling marginalized groups to benefit from technological advancements.",
      ],
    },
    {
      title: "Build Inclusive AI Ecosystems",
      points: [
        "Empower underrepresented groups in AI research and development.",
        "Establish regional innovation hubs to decentralize AI access.",
        "Bridge the urban-rural divide in AI education and deployment.",
      ],
    },
    {
      title: "Promote Open Research and Knowledge Sharing",
      points: [
        "Publish open datasets and research findings.",
        "Create platforms for collaborative AI development.",
        "Encourage reproducibility and transparency in AI experimentation.",
      ],
    },
    {
      title: "Enhance AI Readiness in Education",
      points: [
        "Integrate AI literacy into school and college curricula.",
        "Support teacher training programs in emerging technologies.",
        "Develop open-access AI learning tools and simulations.",
      ],
    },
    {
      title: "Strengthen AI Policy and Governance",
      points: [
        "Contribute to national and global AI policy frameworks.",
        "Ensure privacy, security, and fairness in AI regulations.",
        "Promote dialogue between researchers, policymakers, and the public.",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Stephenie",
      role: "Founder of Claire’s",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      feedback:"Our team meetings became more efficient and productive. The AI-powered transcriptions and summaries saved us countless hours, and the action item tracking kept us on top of our tasks. It's been a game-changer for our team!",
    },
    {
      name: "Neha",
      role: "Founder of Altech",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback: "Team collaboration has significantly improved. With automated meeting transcriptions and concise summaries, we’ve cut down on post-meeting follow-ups. The built-in task tracking ensures everyone stays aligned and accountable.",
    },
    {
      name: "Akash",
      role: "Founder of Softtech",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "Meetings used to be chaotic, but not anymore. The AI does the heavy lifting—summarizing discussions, capturing key points, and even tracking action items. Now we can focus on getting things done.",
  },
  
  ];

  const logos = [
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751944452/image_204_1_uumtmz.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947871/image_202_1_ebdbto.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947897/image_203_bp4qtn.png",
  "https://res.cloudinary.com/dt271v2h3/image/upload/v1751947918/image_205_1_chuidl.png",
];


const testimonialsSectionRef = useRef(null);
const [testimonialParallax, setTestimonialParallax] = useState(0);
const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

const [current, setCurrent] = useState(1); // Start at 1 for infinite carousel
const [isTransitioning, setIsTransitioning] = useState(false);
const sliderRef = useRef(null);
const carouselTestimonials = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

useEffect(() => {
  const handleScroll = () => {
    if (!testimonialsSectionRef.current) return;
    const rect = testimonialsSectionRef.current.getBoundingClientRect();
    // Only apply parallax if section is in viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTestimonialParallax(window.scrollY - testimonialsSectionRef.current.offsetTop);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  if (!isTransitioning) return;
  const currentSlider = sliderRef.current;
  const handle = () => {
    setIsTransitioning(false);
    // Instantly jump to real slide if at the cloned ends, but do NOT animate the jump
    if (current === 0) {
      if (currentSlider) {
        currentSlider.style.transition = 'none';
        currentSlider.style.transform = `translateX(calc(50% - ${(carouselTestimonials.length - 2) * 320 + 160}px))`;
        setTimeout(() => {
          setCurrent(carouselTestimonials.length - 2);
         currentSlider.style.transition = '';
        }, 20); // let browser apply the transform before resetting transition
      } else {
        setCurrent(carouselTestimonials.length - 2);
      }
    } else if (current === carouselTestimonials.length - 1) {
      if (currentSlider) {
        currentSlider.style.transition = 'none';
       currentSlider.style.transform = `translateX(calc(50% - ${1 * 320 + 160}px))`;
        setTimeout(() => {
          setCurrent(1);
         currentSlider.style.transition = '';
        }, 20);
      } else {
        setCurrent(1);
      }
    }
  };
  currentSlider?.addEventListener('transitionend', handle, { once: true });
  return () => currentSlider?.removeEventListener('transitionend', handle);
}, [isTransitioning, current, carouselTestimonials.length]);


  const [activeIndex, setActiveIndex] = useState(0);
 const [index1, setIndex1] = useState(0);
 const scrollTimeout1 = useRef(null);
 const [hovered1, setHovered1] = useState(false);

 const handleWheel1 = (e) => {
 if (!hovered1) return;
 e.preventDefault();
 if (scrollTimeout1.current) return;
 scrollTimeout1.current = setTimeout(() => {
 scrollTimeout1.current = null;
 }, 400);
 if (e.deltaY > 0) {
 setIndex1((prev) => Math.min(prev + 1, contents.length - 1));
 } else {
 setIndex1((prev) => Math.max(prev - 1, 0));
 }
 };

 const [index2, setIndex2] = useState(0);
 const scrollTimeout2 = useRef(null);
 const [hovered2, setHovered2] = useState(false);

 const handleWheel2 = (e) => {
 if (!hovered2) return;
 e.preventDefault();
 if (scrollTimeout2.current) return;
 scrollTimeout2.current = setTimeout(() => {
 scrollTimeout2.current = null;
 }, 400);
 if (e.deltaY > 0) {
 setIndex2((prev) => Math.min(prev + 1, cardContents.length - 1));
 } else {
 setIndex2((prev) => Math.max(prev - 1, 0));
 }
};

 useEffect(() => {
 const preventScroll = (e) => {
 if (hovered1 || hovered2) e.preventDefault();
 };
 window.addEventListener("wheel", preventScroll, { passive: false });
 return () => {
 window.removeEventListener("wheel", preventScroll);
 };
 }, [hovered1, hovered2]);

 const progressPercent = ((index1 + 1) / contents.length) * 100;
 const progressPercentage = ((index2 + 1) / cardContents.length) * 100;


const touchStart1 = useRef(null);
const touchEnd1 = useRef(null);
const touchStart2 = useRef(null);
const touchEnd2 = useRef(null);

const handleTouchStart1 = (e) => {
  touchStart1.current = e.changedTouches[0].clientY;
};
const handleTouchEnd1 = (e) => {
  touchEnd1.current = e.changedTouches[0].clientY;
  handleSwipe1();
};
const handleSwipe1 = () => {
  if (!touchStart1.current || !touchEnd1.current) return;
  const distance = touchStart1.current - touchEnd1.current;

  if (distance > 50) {
    
    setIndex1((prev) => Math.min(prev + 1, contents.length - 1));
  } else if (distance < -50) {
  
    setIndex1((prev) => Math.max(prev - 1, 0));
  }
};

const handleTouchStart2 = (e) => {
  touchStart2.current = e.changedTouches[0].clientY;
};
const handleTouchEnd2 = (e) => {
  touchEnd2.current = e.changedTouches[0].clientY;
  handleSwipe2();
};
const handleSwipe2 = () => {
  if (!touchStart2.current || !touchEnd2.current) return;
  const distance = touchStart2.current - touchEnd2.current;

  if (distance > 50) {
    
    setIndex2((prev) => Math.min(prev + 1, cardContents.length - 1));
  } else if (distance < -50) {
    
    setIndex2((prev) => Math.max(prev - 1, 0));
  }
};

//const [isOpen, setIsOpen] = useState(false);


const handlePrev = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);
  setCurrent((prev) => prev - 1);
};
const handleNext = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);
  setCurrent((prev) => prev + 1);
};
useEffect(() => {
  if (!isTransitioning) return;
    const currentSlider = sliderRef.current;
  const handle = () => {
    setIsTransitioning(false);
   
    // Instantly jump to real slide if at the cloned ends
    if (current === 0) {
      setCurrent(carouselTestimonials.length - 2);
      currentSlider.style.transition = 'none';
      currentSlider.style.transform = `translateX(calc(50% - ${(carouselTestimonials.length - 2) * 320 + 160}px))`;
      void currentSlider.offsetWidth;
      currentSlider.style.transition = '';
    } else if (current === carouselTestimonials.length - 1) {
      setCurrent(1);
      currentSlider.style.transition = 'none';
      currentSlider.style.transform = `translateX(calc(50% - ${1 * 320 + 160}px))`;
      void currentSlider.offsetWidth;
      currentSlider.style.transition = '';
    }
  };
 currentSlider.addEventListener('transitionend', handle, { once: true });
  return () => currentSlider && currentSlider.removeEventListener('transitionend', handle);
}, [isTransitioning, current, carouselTestimonials.length]);

  //const goToSlide = (index) => {
    //setCurrent(index);
  //};
  
   const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
       <section className="relative w-full h-full bg-gray-50 overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
  <div className="w-full bg-gray-50 relative z-50 text-center">
    
    {/* ✅ Background image */}
    <div
      className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none hidden md:block"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dt271v2h3/image/upload/v1751537449/Element_3_vvicjz.png')",
      }}
    ></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mt-6 px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full font-Intter text-[16px] font-normal">
          About us
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold font-playfair text-[#0D2E37] leading-snug">
          India’s Collaborative AI Ecosystem Social  <br className="hidden sm:block" />
          <span>Good, Research & Innovation</span>
        </h1>

       {/* AI Image */}
        <div className="rounded-xl overflow-hidden shadow-lg my-10 max-w-5xl mx-auto">
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751267438/Frame_1000003496_fhk40l.png"
            alt="AI Ecosystem"
            className="w-full h-full max-sm:h-full  items-center justify-center rounded-lgr"
          />
        </div>
      </div>

  
<section className="relative w-full py-20 overflow-hidden">
  {/* Parallax Background Shape */}
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/40/T-Hub_Logo-PNG.png?20200106045618"
    alt="Parallax Shape"
    className="absolute w-60 z-0 pointer-events-none"
    style={{
      transform: `translateY(${offsetY * 0.1}px)`,
      transition: "transform 0.1s ease-out",
    }}
  />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto space-y-6 px-4 sm:px-6 text-center">
    {/* Badge */}
    <div className="inline-block px-4 py-2 bg-blue-100 text-[#005BA9] rounded-full text-sm font-normal">
      Our Journey
    </div>

    {/* Heading */}
    <h2 className="text-[30px] md:text-[40px] font-playfair font-semibold text-[#0D2E37] mb-4">
      Bridging Innovation and Impact
    </h2>

    {/* Paragraphs */}
    <div className="text-[#6A7282] w-full h-full text-[18px] sm:text-[16px] font-Intter font-medium text-left space-y-6 leading-relaxed">
      <p>
        The Collaborative AI Research Labs Foundation (CAiRL) was founded with a clear and
        focused mission: to harness the transformative power of artificial intelligence
        (AI) to drive meaningful change across industries and communities. Established in
        Hyderabad, India, CAiRL serves as a hub for collaboration, innovation, and ethical
        development in the AI space, uniting key stakeholders from academia, industry, and
        government to address some of the world’s most pressing challenges.
      </p>
      <p>
        At CAiRL, we believe that AI has the potential to create a positive societal impact
        when developed responsibly and inclusively. Our foundation is committed to
        advancing AI technologies that are not only cutting-edge but also scalable,
        ethical, and aligned with the betterment of society. We work across a wide range of
        sectors including healthcare, agriculture, biopharma, education, and more, driving
        forward AI solutions that make a tangible difference in the world.
      </p>
    </div>
  </div>
 
</section>
 </div>

  {/* marquee */}
<div className="relative w-[2250px] mt-[60.61px] md:my-[20px] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-[40px] py-[20px] pr-[40px]">
          {repeatedLogos.map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                alt={`Logo ${index}`}
                src={src}
                className="h-[100px] max-w-[1512pxpx] object-cover"
                style={{
                  height:
                    index % 4 === 1
                      ? "40px"
                      : index % 4 === 2
                      ? "61px"
                      : "60px",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
 
{/* Testimonials */}
  <section
    ref={testimonialsSectionRef}
    className="relative w-full bg-[#FAFAFC] py-16 px-4 text-center overflow-hidden"
  >
    {/* Parallax Background Image */}
    <img
      src="/parallax-img.jpeg"
      alt="Parallax"
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      style={{
        transform: `translateY(${testimonialParallax * 0.2}px)`,
        transition: "transform 0.1s linear",
        opacity: 0.12,
        objectFit: "cover",
      }}
    />
    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="inline-block bg-[#E1F0FF] font-nunito font-normal text-[#007BFF] px-4 py-1 rounded-full text-sm  mb-4">
        Client Stories
      </div>
      <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#0D2E37] mb-10">
        What they say about us
      </h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Gradients for seamless illusion */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FAFAFC] to-transparent z-20 pointer-events-none" />
        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${current * 320 + 160}px))`,
            gap: '24px',
            transition: isTransitioning
              ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)'
              : 'none'
          }}
        >
          {carouselTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[320px] flex-shrink-0 rounded-2xl p-6 transition-all duration-300 ${
                index === current
                  ? "bg-white scale-105 shadow-lg"
                  : "bg-white opacity-60 scale-95"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold text-[#0D2E37]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#8C8F94]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-left text-[#0D2E37]">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 gap-6">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5 text-[#0D2E37]" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-200 transition"
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 text-[#0D2E37]" />
        </button>
      </div>
    </div>
  </section>
    
<section className=" w-full px-4 sm:px-6 mb-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-2 font-nunito font-normal bg-blue-100 text-[#005BA9] rounded-full text-sm ">
          Our Mission
</div>
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl w-full h-full lg:text-4xl items-center font-semibold font-playfair text-[#0D2E37] mb-4">
          Building an Ecosystem of<br/> Innovation and Responsibility
        </h2>

        {/* Subheading */}
        <p className="text-[#6A7282] font-Intter  font-normal text-[18px] sm:text-[16px] max-w-3xl mx-auto">
          Our mission is to lead the charge in AI innovation by creating an ecosystem that fosters collaboration and drives impactful change. We focus on developing AI technologies that are both ethical and practical, and we aim to make AI accessible and impactful across diverse sectors.
        </p>
      </div>

      {/* Main content (Image + Text) */}
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751268460/Frame_1000003623_xlqpki.png"
            alt="CAIRL Center Graphic"
            className="w-[902px]  object-contain"
          />
        </div>

        {/* Mission Points */}
        <div className="w-full lg:w-1/2 flex text-[#F6F6F6] flex-col gap-4">
          <div className="p-4 rounded-lg bg-gray-100 w-[410px] top-20 right-16 bottom-20 left-16 radius-12 h-full gap-40 text-[#000000] text-left">
            <strong className="font-bold font-Intter w-[378px] h-[108px]">Advance AI research and development</strong> in<br/> domains like healthcare, agriculture, and<br/> biopharma, leveraging AI to solve real-world<br/> problems.
          </div>

          <div className="p-4 rounded-lg bg-gray-100 w-[410px] top-20 right-16 bottom-20 left-16 gap-40 h-full text-[#000000] text-left">
   <strong className="font-bold font-Intter ">Build an inclusive AI ecosystem</strong> that<br/> promotes interdisciplinary collaboration and<br/> fosters diverse perspectives.
          </div>

          <div className="p-4 rounded-lg bg-gray-100 w-[410px] top-20 right-16 bottom-20 left-16 gap-40 h-full text-[#000000] text-left">
 <strong className="font-bold font-Intter ">Champion ethical AI development</strong>,<br/> ensuring that our work is responsible,<br/> transparent, and aligned with societal<br/> values.
          </div>
        </div>
      </div>
    </section>

     <section className=" bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
       {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 font-nunito text-[#005BA9] font-medium rounded-full text-sm">
          Our Vision
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl w-full  font-semibold font-playfair text-[#0D2E37] mb-4">
          A World Empowered by AI
        </h2>
        <p className="text-[#6A7282] sm:text-[16px] wtext-[18px] font-Intter font-medium max-w-3xl mx-auto">
          Our vision is to create a future where AI is seamlessly integrated into every aspect of life, improving human welfare, enabling sustainable development, and empowering communities around the world. At CAiRL, we aim to be a leader in the global AI ecosystem, driving responsible AI innovation that benefits humanity.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid  grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border-[8px] border-blue-500 rounded-xl p-6 text-center shadow-sm">
          <h3 className="text-lg text-[#0D2E37] font-Intter text-left font-semibold mb-4">AI for Societal<br/> Impact</h3>
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751436851/image_85_gh3ifz.svg "// Replace with actual icon
            alt="Icon 1"
            className="mx-auto  mb-4"
          />
          <div className="bg-blue-50 text-sm font-Intter text-left w-full font-normal text-[#000000] p-3 rounded-md">
          
            We seek to leverage AI to improve public health, enhance productivity, and drive sustainable development across industries.
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-[8px] border-yellow-500 rounded-xl p-6 text-center shadow-sm">
          <h3 className="text-lg text-[#0D2E37] font-Intter text-left font-semibold mb-4">Global Leadership in<br/> Collaborative AI</h3>
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751436734/image_86_pq2xiw.svg" // Replace with actual icon
            alt="Icon 2"
            className="mx-auto mb-4"
          />
          <div className="bg-yellow-50 text-sm font-Intter text-left w-full font-normal text-[#000000] p-3 rounded-md">
            Our goal is to position India as a leader in the global AI landscape by fostering collaboration, innovation, and policy advocacy.
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-[8px] border-green-500 rounded-xl p-6 text-center shadow-sm">
          <h3 className="text-lg text-[#0D2E37] font-Intter text-left font-semibold mb-4">Ethical and<br/> Responsible AI</h3>
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751436788/image_124_rgizi7.svg" // Replace with actual icon
            alt="Icon 3"
            className="mx-auto mb-4"
          />
          <div className="bg-green-50 text-sm font-Intter text-left w-full font-normal text-[#000000] p-3 rounded-md">
            We are committed to ensuring that AI technologies respect ethical boundaries, prioritize inclusivity, and minimize bias.
          </div>
        </div>
      </div>
    </section>

  
<section className="bg-white w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Text Block */}
        <div className="lg:w-1/2 text-left">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#005BA9] font-nunito font-normal rounded-full text-sm">
            Our Objectives
          </div>
          <h2 className="text-2xl sm:text-3xl text-[#0D2E37] font-playfair font-semibold mb-4">
            Guiding Principles for AI<br /> Excellence
          </h2>
          <p className="text-[#6A7282] text-[16px] md:text-[18px] font-Intter font-medium">
            CAiRL’s objectives reflect our commitment to advancing AI in ways
            that are ethical, impactful, and aligned with the needs of society.
          </p>
        </div>

        {/* Right Box with Scrollable Content */}
        <div className="flex gap-4 items-center">
          {/* Blue Card with Scroll-controlled Content */}
          <div
            onWheel={handleWheel1}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            onTouchStart={handleTouchStart1}
  onTouchEnd={handleTouchEnd1}
            className="lg:w-[480px] w-[360px] bg-gradient-to-br h-[400px] from-blue-400 to-blue-600 text-white rounded-2xl p-6 shadow-md relative"
          >
            <h3 className="text-lg sm:text-xl font-Intter font-medium mb-4">
              {contents[index1].title}
            </h3>
            <div className="bg-white text-[#6A7282] p-4 h-[320px] font-Intter font-medium rounded-xl text-sm shadow-inner overflow-y-auto">
              <ul className="list-disc pl-5 font-Intter font-medium text-[#6A7282] sm:text-[18px] text-[16px] leading-[150%] space-y-2">
                {contents[index1].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vertical Progress Bar - Desktop Only */}
<div className="hidden lg:flex flex-col items-center h-72 justify-between">
  <span className="text-sm text-[#000000] font-medium">
    {String(index1 + 1).padStart(2, "0")}
  </span>
  <div className="w-2 h-full relative bg-gray-200 rounded-full">
    <div
      className="absolute top-0 left-0 w-2 bg-sky-500 rounded-full transition-all duration-300"
      style={{ height: `${progressPercent}%` }}
    />
  </div>
  <span className="text-sm text-[#000000] font-medium">
    {String(contents.length).padStart(2, "0")}
  </span>
</div>

          </div>
        </div>
      

      {/* Mobile - horizontal */}
<div className="flex sm:hidden mt-11 flex-row items-center w-full gap-2">
  <span className="text-sm text-[#000000] font-medium">
    {String(index1 + 1).padStart(2, "0")}
        </span>
  <div className="flex-1 h-2 bg-gray-200 relative rounded-full">
    <div
      className="absolute top-0 left-0 h-2 bg-sky-500 rounded-full transition-all duration-300"
      style={{ width: `${progressPercent}%` }}
    />
  </div>
 <span className="text-sm text-[#000000] font-medium">
  {String(contents.length).padStart(2, "0")}</span>
</div>
</section>

<section className="bg-white w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side: Vertical Slider + Rotating Card */}
         <div className="flex flex-col lg:flex-row items-start gap-6 w-full lg:w-1/2">
          
 {/* Vertical Progress Bar - Desktop Only */}
<div className="hidden lg:flex flex-col items-center h-72 justify-between">
  <span className="text-sm text-[#000000] font-medium">
    o{index2 + 1}
  </span>
  <div className="w-2 h-full relative bg-gray-200 rounded-full">
    <div
      className="absolute top-0 left-0 w-2 bg-sky-500 rounded-full transition-all duration-300"
      style={{ height: `${progressPercentage}%` }}
    />
  </div>
  <span className="text-sm text-[#000000] font-medium">o5</span>
</div>

          {/* Blue Card (Scroll-Controlled) */}
          <div
            onWheel={handleWheel2}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
              onTouchStart={handleTouchStart2}
  onTouchEnd={handleTouchEnd2}
            className="flex-1 bg-gradient-to-b h-[385px] font-nunito font-normal from-blue-400 to-blue-600 sm:text-[16px] rounded-2xl p-6 text-white shadow-lg overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl font-medium mb-4">
              {cardContents[index2].title}
            </h3>

            <div className="bg-white text-[#6A7282] p-4 h-[320px] font-Intter font-medium rounded-xl text-sm shadow-inner overflow-y-auto">
              <ul className="list-disc pl-5 font-Intter font-medium text-[#6A7282] md:text-[18px] text-[16px] leading-[150%] space-y-2">
                {cardContents[index2].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile - horizontal */}
<div className="flex sm:hidden flex-row mb-6 items-center w-full gap-2">
  <span className="text-sm text-[#000000] font-medium">
              o{index2 + 1}
            </span>
  <div className="flex-1 h-full w-2 bg-gray-200 relative rounded-full">
   
    <div
      className="absolute top-0 left-0 h-2 bg-sky-500 rounded-full transition-all duration-300"
      style={{ width: `${progressPercent}%` }}
    />
  
  </div>
  <span className="text-sm text-[#000000] font-medium">o5</span>
</div>

        {/* Right Side Static Content */}
        <div className="lg:w-1/2 w-full text-left">
          <div className="lg:w-1/2 text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#005BA9] font-nunito font-normal rounded-full text-sm">
              Our Goals
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl text-[#0D2E37] font-playfair font-semibold mb-4">
            Goals for Impactful and Inclusive AI Innovation
          </h2>
          <p className="text-[#6A7282] text-[16px] md:text-[18px] font-Intter font-medium">
            The Collaborative AI Research Labs Foundation is driven by a clear
            set of goals that guide our efforts to make meaningful contributions
            to society through AI. Our goals reflect our commitment to long-term
            impact, responsible innovation, and global engagement.
          </p>
        </div>
     </div>
    </section>


<section className="bg-[#FAFAFC]  text-[#0D2E37]">
  <div className="text-center mt-8">
    <span className="inline-block bg-blue-100 mt-7 text-[#005BA9] text-[16px] font-nunito font-normal px-4 py-2 rounded-full">
      Advisory Team
    </span>
  </div>

  {/* Strategic Advisors */}
  <div className="text-center">
    <h2 className="text-[40px] md:text-[30px]  text-[#0D2E37] font-playfair font-semibold">
      Strategic Advisors
    </h2>
    <div className="grid grid-cols-1 font-Plus text-[#000000] text-[20px] font-medium sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          name: "Prof. Pallu Reddanna",
          role: "President – FABA",
          image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRukypFDpvhRBYaA-7Sc9Oz4TKjgM5XrMAuSUXtzVD6k621H1TK",
        },
        {
          name: "Dr. Ratnakar Palakodeti",
          role: "Secretary General – FABA",
          image: "https://media.licdn.com/dms/image/v2/D5603AQGTjpgjiSitmA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725973364962?e=2147483647&v=beta&t=Tn27Q57o1rgg1KZjbQodfeMa8DM5wPd9FAXEZCp9Tvk",
        },
        {
          name: "Mr. Rahul Paith",
          role: "CEO–MATH (T-Hub)",
          image: "https://t-hub.co/wp-content/uploads/2025/02/Image-1.jpg",
        },
      ].map((advisor, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-[320px] h-[320px] object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{advisor.name}</h3>
          <p className="text-sm text-[#6A7282]">{advisor.role}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Academic Advisors */}
  <div className="text-center mt-8">
    <h2 className="text-[20px] md:text-[30px] font-playfair font-semibold mb-6">
     Academic Advisors
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 font-pl md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          name: "Mr. Neil Gogte",
          role: "Founder & Director of KMIT, NGIT, KMEC, KSJC",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-8sGiVT3BtkQalciwJRQMgp897f2AmdVnw&sK",
        },
        {
          name: "Dr. Prasad Nuli",
          role: "Physician Entrepreneur",
          image: "https://media.licdn.com/dms/image/v2/C5603AQHTMoXEfpdulg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667996819351?e=2147483647&v=beta&t=RReVAzEpJ5pmAEihZ0DjfXebjmZKIKwhI77G-hVGNts",
        },
        {
          name: "Dr. Ravi Gujjula",
          role: "PhD from IIT Hyderabad",
          image: "https://pbs.twimg.com/profile_images/1899510955211718657/OtyTfgpc_400x400.jpg",
        },
      ].map((advisor, idx) => (
        <div key={idx} className=" p-4 rounded-xl shadow-sm text-center">
          <img
            src={advisor.image}
            alt={advisor.name}
            className=" w-[320px] h-[320px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">{advisor.name}</h3>
          <p className="text-sm text-[#6A7282]">{advisor.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     <section className="bg-[#FAFAFC]  lg:px-24 text-[#0D2E37]">

  {/* Strategic Advisors */}
  <div className="text-center mt-10">
    <h2 className="text-[40px] md:text-[30px]  text-[#0D2E37] font-playfair font-semibold">
      Industry Advisors
    </h2>
    <div className="grid grid-cols-1 font-sans text-[#000000] text-[20px] font-medium sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          name: "Dr. Suhit Anantula",
          role: "Founder - The Helix Lab",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQEmn-yhmImeFw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726437192671?e=2147483647&v=beta&t=lJDqnrqLw7RVOuMduH4_61xZETJD8wb9kIYL9uZVVT8",
        },
        {
          name: "Mr. Anurag Garg",
          role: "Global Engineering Executive & General Manager",
          image: "https://media.licdn.com/dms/image/v2/D5603AQHjoZrYUjzehg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681208069949?e=2147483647&v=beta&t=diymKXEVZ6hBWu_eTbw0s2PM39frNESqMEQUsJGXTXA",
        },
        {
          name: "Dr. Suraj Bhansali",
          role: "Experienced Leader at GCC & CRO",
          image: "https://cdn.theorg.com/df6d8836-c89d-4a14-88f6-bec6cb43109f_thumb.jpg",
        },
      ].map((advisor, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow-sm text-center">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-[320px] h-[320px] object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold">{advisor.name}</h3>
          <p className="text-sm text-[#6A7282]">{advisor.role}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Academic Advisors */}
  <div className="text-center mt-8">
    <h2 className="text-[40px] md:text-[30px] mb-8 text-[#0D2E37] font-playfair font-semibold">
      Technology Advisors
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 font-pl md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          name: "Mr. Sharath Doddla",
          role: "Founder, CTO at ADQ Services",
          image: "https://www.adqservices.com/wp-content/uploads/2024/12/Sharath-Dodda-adq-services.jpg",
        },
        {
          name: "Mr. Aswani Kumar Iraganaboina",
          role: "Founder & CEO of RunCode",
          image: "https://res.cloudinary.com/dt271v2h3/image/upload/v1751435971/image_92_u4ngdi.svg",
        },
        {
          name: "Dr. Meenakshi S",
          role: "PhD from IIT Hyderabad",
          image: "https://res.cloudinary.com/dt271v2h3/image/upload/v1751435873/image_94_gl3qlt.svg",
        },
      ].map((advisor, idx) => (
        <div key={idx} className=" rounded-xl shadow-sm text-center">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-[320px] h-[320px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">{advisor.name}</h3>
          <p className="text-sm text-[#6A7282]">{advisor.role}</p>
        </div>
      ))}
    </div>
  </div>
  </section>
    {/* Board Members & Management Team Section */}
<section className="bg-[#FAFAFC] mt-6 lg:px-24">
  <div className="text-center mb-6">
    <span className="inline-block bg-blue-100 text-[#005BA9] text-sm font-nunito px-4 py-2 rounded-full">
      Our Team
    </span>
    <h2 className="text-2xl md:text-4xl font-playfair font-semibold text-[#0D2E37] mt-4">
      Board Members & Management Team
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/C5603AQHEAkX1w6atQg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659432143765?e=2147483647&v=beta&t=KTGM3WGbLN3czjrGS6cKpZbCf9pyMpLfYrgTMjJSpJQ"
        alt="Mr. Rammohan Manamasa"
        className="w-full h-[320px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-[#0D2E37]">Mr. Rammohan Manamasa</h3>
      <p className="text-sm text-[#6A7282]">Founder & Chairman</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqa9S__pp17pl7FkW-TtH2uMf0qSyLwKJaxYWVlnRjUFlfzpd4"
        alt="Mr. Ram Katamaraja"
        className="w-[320px] h-[320px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-[#0D2E37]">Mr. Ram Katamaraja</h3>
      <p className="text-sm text-[#6A7282]">Co-Founder</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <img
        src="https://pbs.twimg.com/profile_images/1783358722179235841/8r2Bv2E4_200x200.jpg"
        alt="Mr. Sarvesh Singh"
        className="w-[320px] h-[320px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-[#0D2E37]">Mr. Sarvesh Singh</h3>
      <p className="text-sm text-[#6A7282]">Director General</p>
    </div>
  </div>
</section>
    
        <section className="bg-white w-full items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left">
        <div className="w-full flex justify-center sm:justify-start">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#005BA9] font-nunito font-normal rounded-full text-sm">
            MoUs
          </div>
          </div>
         <div className="w-full flex justify-center sm:justify-start">
           <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair mb-6 w-full h-full font-semibold text-[#0D2E37] text-center sm:text-left">
      MoUs and Strategic Partnerships
    </h2>
          </div>
          <p className="text-[#6A7282] text-left place-items-center font-Intter font-medium mb-6">
            At CAiRL, we understand that collaboration is key to driving innovation and creating impactful AI solutions. We are proud to have formed several strategic partnerships and signed Memorandums of Understanding (MoUs) with leading organizations, institutions, and corporations to advance AI research, development, and application.
          </p>
          <div className="w-full flex justify-center sm:justify-start">
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
        {/* Right Image */}
        <div className="w-full flex  bg-gray-200 rounded-[20px] ">
          <img
            src="https://res.cloudinary.com/dt271v2h3/image/upload/v1751267765/image_83_cazukt.png" // Replace with actual image path
            alt="MoU Signing"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        
      </div>
    </section>

<div class="w-full mt-6 max-sm:mx-auto">
  </div>
    <section className="w-full md:flex hidden flex-col items-center lg:p-[120px] py-[40px] px-[16px] justify-center font-['Inter']">
        <div className="w-full flex flex-col items-center gap-[20px] justify-center">
          <button className="bg-[#009BDE1A] py-[8px] px-[12px] gap-[10px] flex items-center justify-center text-[#005BA9] font-['Nunito'] rounded-[900px]">
            FAQs
          </button>
          <div className="w-full flex items-center justify-center md:text-[40px] text-[30px] font-['Playfair_Display'] text-[#0D2E37] leading-[120%] font-semibold">
            Frequently Asked Questions
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col relative md:pt-[40px] pt-[20px] gap-[40px]">
          {/* Left side: Questions */}
          <div className="md:w-1/2 w-full flex flex-col pt-[25px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group hover:bg-[#F2FAFD] px-[16px] py-[24px] cursor-pointer transition-all duration-200 ${
                  activeIndex === index ? "bg-[#F2FAFD]" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-start justify-between w-full hover:font-semibold">
                  <div className="flex gap-[16px] w-full">
                    <svg width="24" height="25" fill="none">
                      <circle
                        cx="12"
                        cy="12.23"
                        r="12"
                        className={`${
                          activeIndex === index
                            ? "fill-[#019BDE]"
                            : "fill-[#B3E1F5]"
                        }`}
                      ></circle>
                    </svg>
                    <p className="text-black text-[16px] leading-[24px]">
                      {faq.question}
                    </p>
                  </div>
                  <svg width="24" height="25" fill="none">
                    <path
                      d="M8 4.23L16 12.23L8 20.23"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${
                        activeIndex === index
                          ? "stroke-[#007BFF]"
                          : "stroke-[#B3E1F5]"
                      } transition-colors duration-300`}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Answer */}
          <div className="md:w-1/2 w-full h-[698px] bg-[#B3E1F51A] rounded-[20px] px-[40px] py-[40px] flex flex-col gap-[40px] transition-all duration-300 ease-in-out">
            {faqs[activeIndex] && (
              <>
                <h3 className="text-[20px] font-bold font-['Inter'] text-[#18191F] leading-[150%]">
                  {faqs[activeIndex].question}
                </h3>
                <p className="text-[18px] text-[#6A7282] font-['Inter'] leading-[150%] w-[90%]">
                  {faqs[activeIndex].answer}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ✅ Mobile View (Accordion) */}
      <section className="w-full md:hidden flex flex-col pt-[40px] gap-[20px] px-[16px] font-['Inter']">
        <div className="flex flex-col items-center gap-[20px]">
          <button className="bg-[#009BDE1A] py-[8px] px-[12px] gap-[10px] flex items-center justify-center text-[#005BA9] font-['Nunito'] rounded-[900px]">
            FAQs
          </button>
          <div className="text-[30px] font-['Playfair_Display'] text-[#0D2E37] leading-[120%] font-semibold text-center">
            Frequently Asked Questions
          </div>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F2FAFD] rounded-xl px-4 py-3 transition-all duration-300"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left"
            >
              <p className="text-[#0D2E37] font-semibold text-[16px] leading-[150%]">
                {faq.question}
              </p>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 4.23L16 12.23L8 20.23"
                  stroke="#007BFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="mt-2 text-[#6A7282] text-[15px] leading-[150%]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>

  {/* contact form */}
<section className="flex items-center justify-center mb-14 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-5xl">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1 font-Intter font-normal text-sm text-blue-700 bg-blue-100 rounded-full mb-4">
        Contact
      </div>
      <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-[#0D2E37]">
        Get in Touch
      </h2>
      <p className="mt-2 text-gray-600 max-w-xl mx-auto">
        Reach out to us for collaboration, inquiries, or to learn more about our AI initiatives.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-6">
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          // Add logic here to handle form data
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="John"
              name="fullName"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 invisible">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              name="lastName"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address<span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="example@cairl.com"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number<span className="text-red-500">*</span></label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              name="phone"
              required
              pattern="[0-9]{10,}"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Organization name"
              name="organization"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn Profile<span className="text-red-500">*</span></label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/example"
              name="linkedin"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type of Engagement<span className="text-red-500">*</span>
            </label>
            <select
              required
              name="engagement"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
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

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message<span className="text-red-500">*</span></label>
          <textarea
            name="message"
            placeholder="Tell us briefly about your interest"
            rows="4"
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="bg-[#005BA9] hover:bg-[#004a88] text-white font-medium px-6 py-3 rounded-full transition flex items-center gap-2"
          >
            Submit{" "}
            <span className="text-xl">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 3.33325L10.6667 7.99992L6 12.6666"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>



{/* Maps */}
     <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
        <iframe
          title="Google Map - Hussain Sagar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30453.939254696284!2d78.45391688998063!3d17.42414538883127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97558c2e9b6b%3A0x25705363cc844e9d!2sHussain%20Sagar!5e0!3m2!1sen!2sin!4v1752473136707!5m2!1sen!2sin"
          className="w-full h-full rounded-xl shadow-md"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

 <footer className="bg-gradient-to-b from-black via-gray-900 w-full h-full   to-[#001f2f] rounded-lg text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 ">
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
   
        <div>
          <h4 className="text-white font-Intter  font-normal mb-3">Quick lines</h4>
          <ul className="space-y-2 text-sm  text-[#FFFFFF99]">
            <li>About Us</li>
            <li>Services</li>
            <li>Research & Innovation</li>
            <li>Focus Groups</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-Intter font-medium mb-3">Phone</h4>
          <p className="text-sm text-[#FFFFFF99] mb-2">+91-9391335191</p>

          <h4 className="text-white font-Intter font-medium mb-2">Email</h4>
          <p className="text-sm text-[#FFFFFF99] mb-2">info@cairl.org</p>

          <h4 className="text-white font-Intter font-medium mb-2">Address</h4>
          <p className="text-sm text-[#FFFFFF99]">
            T-Hub, 2.0, Inorbit Mall Rd, <br />
            Vittal Rao Nagar, Madhapur, <br />
            Hyderabad, Telangana 500081
          </p>
        </div>
      </div>
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


      {/* Bottom copyright */}
      <div className="text-right text-gray-500 text-xs mt-12">
        Copyright © 2024. All rights reserved.
      </div>
    
  </footer>
 </section>
 
  
   
    );
  };

export default About;