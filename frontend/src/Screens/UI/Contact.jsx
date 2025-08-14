import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In a real application, this would be an API call to your backend
      await axios.post("/api/contact", formData);
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out through any of these channels.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md h-full p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>

              {/* Address - Click to open maps */}
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-full p-3 text-white mr-4">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-1">
                      Address
                    </h5>
                    <a
                      href="https://maps.google.com?q=123+College+Avenue+University+Town+State+12345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 hover:underline"
                    >
                      123 College Avenue
                      <br />
                      University Town, State 12345
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone - Click to call */}
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500 rounded-full p-3 text-white mr-4">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-1">
                      Phone
                    </h5>
                    <div className="text-gray-600">
                      <a
                        href="tel:1234567890"
                        className="hover:text-green-600 hover:underline"
                      >
                        Main: (123) 456-7890
                      </a>
                      <br />
                      <a
                        href="tel:1234567891"
                        className="hover:text-green-600 hover:underline"
                      >
                        Admissions: (123) 456-7891
                      </a>
                      <br />
                      <a
                        href="tel:1234567899"
                        className="hover:text-green-600 hover:underline"
                      >
                        Emergency: (123) 456-7899
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email - Click to email */}
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-400 rounded-full p-3 text-white mr-4">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-1">
                      Email
                    </h5>
                    <div className="text-gray-600">
                      <a
                        href="mailto:info@college.edu"
                        className="hover:text-blue-600 hover:underline"
                      >
                        General: info@college.edu
                      </a>
                      <br />
                      <a
                        href="mailto:admissions@college.edu"
                        className="hover:text-blue-600 hover:underline"
                      >
                        Admissions: admissions@college.edu
                      </a>
                      <br />
                      <a
                        href="mailto:support@college.edu"
                        className="hover:text-blue-600 hover:underline"
                      >
                        Support: support@college.edu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mb-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-3 text-white mr-4">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-gray-900 mb-1">
                      Office Hours
                    </h5>
                    <p className="text-gray-600">
                      Monday-Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              {submitStatus && (
                <div
                  className={`rounded-md p-4 mb-6 ${
                    submitStatus.success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admissions">Admissions Inquiry</option>
                      <option value="Academic">Academic Questions</option>
                      <option value="Financial Aid">Financial Aid</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="-ml-1 mr-3 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24103.984431526165!2d85.2815451118988!3d27.692643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b26c5a3df7%3A0xd49ea11f56ff8ac5!2sEverest%20College!5e1!3m2!1sen!2snp!4v1748712527529!5m2!1sen!2snp"
                  allowFullScreen=""
                  loading="lazy"
                  title="College Location"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Departments Contact */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Department Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  Admissions Office
                </h5>
                <div className="text-gray-600">
                  <a
                    href="tel:1234567891"
                    className="inline-flex items-center hover:text-green-600 hover:underline"
                  >
                    <FaPhone className="mr-2 text-gray-500" /> (123) 456-7891
                  </a>
                  <br />
                  <a
                    href="mailto:admissions@college.edu"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaEnvelope className="mr-2 text-gray-500" />{" "}
                    admissions@college.edu
                  </a>
                  <br />
                  <a
                    href="https://maps.google.com?q=Administration+Building,+Room+101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />{" "}
                    Administration Building, Room 101
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  Registrar's Office
                </h5>
                <div className="text-gray-600">
                  <a
                    href="tel:1234567892"
                    className="inline-flex items-center hover:text-green-600 hover:underline"
                  >
                    <FaPhone className="mr-2 text-gray-500" /> (123) 456-7892
                  </a>
                  <br />
                  <a
                    href="mailto:registrar@college.edu"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaEnvelope className="mr-2 text-gray-500" />{" "}
                    registrar@college.edu
                  </a>
                  <br />
                  <a
                    href="https://maps.google.com?q=Administration+Building,+Room+201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />{" "}
                    Administration Building, Room 201
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  Student Services
                </h5>
                <div className="text-gray-600">
                  <a
                    href="tel:1234567893"
                    className="inline-flex items-center hover:text-green-600 hover:underline"
                  >
                    <FaPhone className="mr-2 text-gray-500" /> (123) 456-7893
                  </a>
                  <br />
                  <a
                    href="mailto:studentservices@college.edu"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaEnvelope className="mr-2 text-gray-500" />{" "}
                    studentservices@college.edu
                  </a>
                  <br />
                  <a
                    href="https://maps.google.com?q=Student+Center,+Room+105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-blue-600 hover:underline"
                  >
                    <FaMapMarkerAlt className="mr-2 text-gray-500" /> Student
                    Center, Room 105
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
