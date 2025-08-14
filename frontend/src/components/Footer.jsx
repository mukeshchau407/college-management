import { Link } from "react-router-dom";

const Footer = () => {
  const linkSections = [
    {
      title: "Academics",
      links: [
        { name: "Departments", path: "/departments" },
        { name: "Courses", path: "/courses" },
        { name: "Exams", path: "/exams" },
        { name: "Results", path: "/results" },
        { name: "Academic Calendar", path: "/academic-calendar" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { name: "Apply Online", path: "/apply" },
        { name: "Fee Structure", path: "/fees" },
        { name: "Scholarships", path: "/scholarships" },
        { name: "Important Dates", path: "/admission-dates" },
        { name: "Contact Admission Office", path: "/contact-admissions" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Desk", path: "/help-desk" },
        { name: "Student Portal", path: "/login" },
        { name: "Faculty Login", path: "/login" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "FAQs", path: "/faqs" },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 border-t border-gray-300/40">
      <div className="flex flex-col md:flex-row sm:flex-col items-start justify-between gap-10 pt-10 mb-5 text-gray-700">
        <div>
          <img className="w-14 h-10 mb-4" src="" alt="College Logo" />
          <p className="max-w-[410px] text-md leading-relaxed">
            Welcome to Everest College. Empowering students and faculty with a
            seamless academic experience through modern digital solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[60%] gap-6">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-gray-800 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-md space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:underline transition hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-3 text-center text-sm md:text-base text-gray-500/80 border-t border-gray-300/30">
        © 2025 Everest College. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
