import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaBook,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdComputer, MdLibraryBooks } from "react-icons/md";

const About = () => {
  // College statistics
  const stats = [
    {
      value: "50+",
      label: "Years of Excellence",
      icon: <FaAward className="text-3xl" />,
    },
    {
      value: "10,000+",
      label: "Students",
      icon: <FaUsers className="text-3xl" />,
    },
    {
      value: "500+",
      label: "Faculty Members",
      icon: <FaChalkboardTeacher className="text-3xl" />,
    },
    {
      value: "100+",
      label: "Courses Offered",
      icon: <FaBook className="text-3xl" />,
    },
  ];

  // Key features of the college
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl mb-4 text-blue-600" />,
      title: "Quality Education",
      description:
        "Our institution is committed to providing world-class education with a curriculum designed to meet global standards.",
    },
    {
      icon: <MdComputer className="text-4xl mb-4 text-blue-600" />,
      title: "Modern Facilities",
      description:
        "State-of-the-art labs, smart classrooms, and advanced research facilities to support innovative learning.",
    },
    {
      icon: <MdLibraryBooks className="text-4xl mb-4 text-blue-600" />,
      title: "Extensive Library",
      description:
        "A vast collection of books, journals, and digital resources to support academic and research activities.",
    },
  ];

  // Leadership team
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      bio: "With over 20 years of experience in education, Dr. Johnson leads our institution with vision and dedication.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Prof. Michael Chen",
      position: "Vice Principal",
      bio: "An accomplished academic with numerous publications in educational methodologies.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Dr. Anita Desai",
      position: "Dean of Academics",
      bio: "Specialist in curriculum development and quality assurance in higher education.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}

      <div className="relative bg-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our College
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering minds since 1970 through excellence in education,
            research, and innovation.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To provide accessible, high-quality education that transforms
              students into competent professionals and responsible global
              citizens, while fostering innovation, research, and community
              engagement.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600">
              To be a premier institution recognized nationally and
              internationally for academic excellence, cutting-edge research,
              and positive societal impact, preparing students to meet the
              challenges of a rapidly changing world.
            </p>
          </div>
        </div>
      </div>

      {/* College Statistics */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Why Choose Our College
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Our History
            </h2>
            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-blue-500 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    1970 - Foundation
                  </h3>
                  <p className="text-gray-600">
                    Established with just 200 students and 15 faculty members,
                    offering three undergraduate programs.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    1985 - Expansion
                  </h3>
                  <p className="text-gray-600">
                    Added graduate programs and built the North Campus with new
                    science and engineering facilities.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    2000 - Accreditation
                  </h3>
                  <p className="text-gray-600">
                    Received national accreditation with distinction for
                    excellence in teaching and research.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    2020 - Digital Transformation
                  </h3>
                  <p className="text-gray-600">
                    Launched comprehensive digital learning platforms and smart
                    campus initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Our Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">
                  {person.name}
                </h3>
                <p className="text-blue-600 mb-4">{person.position}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Accreditation & Affiliations
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150x80?text=National+Board"
                  alt="National Accreditation Board"
                  className="h-16 object-contain"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150x80?text=ISO+Certified"
                  alt="ISO Certified"
                  className="h-16 object-contain"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/150x80?text=Global+Alliance"
                  alt="Global Education Alliance"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our college can help you achieve your academic and
            professional goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-3 bg-red-600 border-2 border-white text-white font-bold rounded-full hover:bg-white 
            hover:text-blue-600 transition-colors duration-300"
            >
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Take a Campus Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
