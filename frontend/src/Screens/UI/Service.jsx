import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";

const Service = () => {
  const service = [
    {
      icon: <FaUserGraduate className="text-4xl text-blue-600" />,
      title: "Student Management",
      description:
        "Comprehensive student records, attendance tracking, performance analytics, and personalized learning paths.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
      title: "Faculty Management",
      description:
        "Teacher profiles, class scheduling, workload management, and performance evaluation systems.",
    },
    {
      icon: <FaBook className="text-4xl text-purple-600" />,
      title: "Academic Administration",
      description:
        "Curriculum planning, course registration, exam management, and gradebook automation.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-orange-600" />,
      title: "Digital Learning Platform",
      description:
        "Online classrooms, assignment submission, e-library access, and interactive learning modules.",
    },
    {
      icon: <FaChartLine className="text-4xl text-red-600" />,
      title: "Analytics & Reporting",
      description:
        "Real-time dashboards, institutional KPIs, predictive analytics, and accreditation reports.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-teal-600" />,
      title: "Parent & Alumni Portal",
      description:
        "Secure access to student progress, event calendars, communication tools, and alumni networking.",
    },
  ];

  return (
    <section id="service" className="scroll-mt-16">
      <div className="min-h-screen mt-2 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-700 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              College Management Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Streamlining education through integrated technology solutions for
              institutions, students, and parents
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              System Features
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Administrative Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated timetable generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fee management and payment gateway</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Inventory and resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>HR and payroll integration</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  User Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mobile app for on-the-go access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Role-based secure access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-800 text-white py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to help you implement a tailored college
            management solution
          </p>
          <div className="flex justify-center">
            <button className="flex items-center gap-x-1 bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
