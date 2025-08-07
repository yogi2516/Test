
import React from "react";


const features = [
  {
    title: "Collaboration",
    description:
      "Connect with leading researchers, policymakers, and innovators in the AI ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21a6 6 0 0118 0" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8l4-1" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Access cutting-edge research, tools, and methodologies driving ethical AI development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9 18a6 6 0 006-6c0-2.21-1.79-4-4-4-2.21 0-4 1.79-4 4 0 1.657 1.007 3.063 2.418 3.634" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2v3" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6l-2 1" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6l2 1" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Growth",
    description:
      "Expand your knowledge and impact through specialized training and networking opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" stroke="#0A74B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const plans = [
  {
    id: "platinum",
    badge: "Platinum",
    price: "₹10,000",
    features: [
      "Lifetime Access",
      "50% Discount on Events, Training & Certifications",
      "VIP access, long-term savings, priority invites",
    ],
  },
  {
    id: "gold",
    badge: "Gold",
    price: "₹2,500",
    features: [
      "Annual Access",
      "25% Discount on Events, Training & Certifications",
      "Great for active professionals and educators",
    ],
  },
  {
    id: "silver",
    badge: "Silver",
    price: "₹1,500",
    features: [
      "6 months Access",
      "15% Discount on Events, Training & Certifications",
      "Ideal for learners and short-term contributors",
    ],
  },

  
  {
    id: "bronze",
    badge: "Bronze",
    price: "₹1,000",
    features: [
      "3 months Access",
      "10% Discount on Events, Training & Certifications",
      "Entry-level access to workshops and events",
    ],
  },
];


const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="#005BA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const FeatureCard = ({ icon, title, description }) => (
  <article className="bg-white rounded-2xl shadow-md p-8 md:p-10 flex flex-col items-center text-center gap-6 min-h-[320px] hover:shadow-lg transition-shadow">
    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
      <div className="w-8 h-8 text-[#0A74B3]">{icon}</div>
    </div>

    <h3 className="text-xl md:text-2xl font-semibold text-[#0D3740]">{title}</h3>

    <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">{description}</p>
  </article>
);

const PlanCard = ({ plan }) => (
  <article className="bg-gray-100 rounded-2xl shadow-sm p-8 flex flex-col justify-between min-h-[380px] md:min-h-[420px]">
    <div>
      <div className="inline-block bg-blue-100 text-[#005BA9] px-3 py-1 rounded-full text-sm font-medium mb-6">
        {plan.badge}
      </div>

      <div className="text-4xl md:text-2xl font-Intter font-semibold text-[#005BA9] mb-6">
        {plan.price}
      </div>

      <ul className="space-y-4 text-[#334155]">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-1">
              <span className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center">
                <CheckIcon className="w-4 h-4" />
              </span>
            </span>
            <span className="text-sm leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <a
        href="#becomeamember"
        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-[#005BA9] text-white font-medium hover:bg-[#0A74C3] transition-shadow shadow"
        aria-label={`Join ${plan.badge} plan`}
      >
        Join Now
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </article>
);

const Check = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="#005BA9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EngageWithUs = () => {
  return (
    <main className="bg-[#f6f6f6]">
      {/* Top engage section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-3xl font-playfair font-semibold text-[#0D2E37] tracking-tight">
              Engage With Us
            </h2>
            <p className="mt-6 text-[#6A7282] font-Inter font-normal max-w-2xl mx-auto text-[14px] md:text-xl leading-relaxed">
              Join the movement to build a responsible and inclusive AI ecosystem. Whether you're an innovator,
              policymaker, researcher, or funder — there’s a way for you to grow with CAiRL.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} icon={f.icon} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-engage" className="bg-[#f7f7f7] py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <span className="block w-40 h-[1px] bg-[#30393b] opacity-60" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold font-playfair leading-tight text-[#0D3740] tracking-tight mb-6">
            Why Engage with CAiRL?
          </h1>

          <p className="mx-auto text-lg sm:text-xl text-[#6A7282] leading-relaxed max-w-3xl">
            CAiRL is building India’s leading AI ecosystem that prioritizes collaboration, ethical innovation,
            and inclusive growth. From students and startups to governments and industry leaders — we welcome all
            to contribute and co-create AI for good.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership-plans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-blue-50 text-[#005BA9] rounded-full text-sm font-medium mb-4">
              Pricing
            </div>

            <h2 className="text-4xl md:text-3xl font-playfair font-semibold text-[#0D3740] mb-4" style={{ lineHeight: 1.05 }}>
              Membership Plans
            </h2>

            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Get exclusive access, discounts, and opportunities within the CAiRL ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 font-Intter lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <PlanCard key={p.id} plan={p} />
            ))}
          </div>
        </div>

         <div className="max-w-7xl mt-6 mx-auto px-6">
      <div className="bg-gray-100 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
         
          <div className="flex-1 md:flex-none md:w-48">
            <div className="inline-block bg-blue-50 text-[#005BA9] font-nunito px-3 py-1 rounded-full text-sm font-normal mb-4">
              Community
            </div>

            <div className="text-4xl md:text-2xl font-nunito font-semibold text-[#0D3740]">
              ₹0
            </div>
          </div>

          {/* Middle: Features */}
          <div className="flex-1">
            <ul className="space-y-4 text-[#334155]">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">
                  <span className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                </span>
                <span className="text-sm leading-relaxed font-medium">Free</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1">
                  <span className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                </span>
                <span className="text-sm text-[#0D2E37] leading-relaxed">
                  Access to resources, blogs, newsletters, free events & recorded courses.
                  Discounts on webinars & workshops.
                </span>
              </li>
            </ul>
          </div>

        
          <div className="md:flex-none md:w-44 flex items-center justify-end">
            <a
              href="#becomeamember"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#005BA9] text-white font-medium hover:bg-[#0A74C3] transition-shadow shadow"
              aria-label="Join Community"
            >
              Join Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-8">
        <h3 className="text-lg md:text-md font-Intter  font-bold text-[#000000]">
          WhatsApp Community Access Included
          <span className="text-base font-normal text-[#6A7282]"> &nbsp;for all members</span>
        </h3>
      </div>
    </div>
      </section>
    </main>
  );
};

export default EngageWithUs;
