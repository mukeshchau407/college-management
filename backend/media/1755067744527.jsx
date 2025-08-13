import { useState } from "react";
import {
  FiCalendar,
  FiPlus,
  FiSearch,
  FiFilter,
  FiEdit2,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";

const AcademicCalendarSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "academic",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    status: "upcoming",
  });

  // Sample academic events data
  const academicEvents = [
    {
      id: 1,
      title: "Fall Semester Begins",
      type: "academic",
      startDate: "2023-09-05",
      endDate: "2023-09-05",
      location: "Campus-wide",
      description: "First day of fall semester classes",
      status: "completed",
    },
    {
      id: 2,
      title: "Midterm Examinations",
      type: "exam",
      startDate: "2023-10-16",
      endDate: "2023-10-20",
      location: "Assigned Classrooms",
      description: "Midterm exams for all courses",
      status: "completed",
    },
    {
      id: 3,
      title: "Thanksgiving Break",
      type: "holiday",
      startDate: "2023-11-22",
      endDate: "2023-11-24",
      location: "Campus-wide",
      description: "College closed for Thanksgiving holiday",
      status: "completed",
    },
    {
      id: 4,
      title: "Final Examinations",
      type: "exam",
      startDate: "2023-12-11",
      endDate: "2023-12-15",
      location: "Assigned Classrooms",
      description: "Final exams for fall semester courses",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Winter Commencement",
      type: "ceremony",
      startDate: "2023-12-18",
      endDate: "2023-12-18",
      location: "Main Auditorium",
      description: "Graduation ceremony for fall semester graduates",
      status: "upcoming",
    },
    {
      id: 6,
      title: "Spring Semester Begins",
      type: "academic",
      startDate: "2024-01-08",
      endDate: "2024-01-08",
      location: "Campus-wide",
      description: "First day of spring semester classes",
      status: "upcoming",
    },
    {
      id: 7,
      title: "Spring Break",
      type: "holiday",
      startDate: "2024-03-11",
      endDate: "2024-03-15",
      location: "Campus-wide",
      description: "Spring break - no classes",
      status: "upcoming",
    },
    {
      id: 8,
      title: "Registration for Fall 2024",
      type: "registration",
      startDate: "2024-04-01",
      endDate: "2024-04-05",
      location: "Online",
      description: "Priority registration for continuing students",
      status: "upcoming",
    },
  ];

  const eventTypes = [
    "All Types",
    "Academic",
    "Exam",
    "Holiday",
    "Ceremony",
    "Registration",
  ];

  const eventStatuses = ["All Statuses", "Upcoming", "Completed", "Cancelled"];

  // Current month and year for calendar view
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Filter events based on search and filters
  const filteredEvents = academicEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      activeFilter === "all" ||
      (activeFilter !== "all" && event.type === activeFilter.toLowerCase());
    return matchesSearch && matchesType;
  });

  // Get events for the current month view
  const getEventsForMonth = () => {
    return filteredEvents.filter((event) => {
      const eventDate = new Date(event.startDate);
      return (
        eventDate.getMonth() === currentMonth &&
        eventDate.getFullYear() === currentYear
      );
    });
  };

  // Handle month navigation
  const navigateMonth = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  // Add new event
  const handleAddEvent = () => {
    // In a real app, this would send data to your backend
    console.log("Adding new event:", newEvent);
    setShowAddEventModal(false);
    setNewEvent({
      title: "",
      type: "academic",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      status: "upcoming",
    });
  };

  // Get month name
  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  // Get days in month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    const monthEvents = getEventsForMonth();

    let days = [];
    let dayCounter = 1;

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 p-1 border border-gray-100 bg-gray-50"
        ></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(currentYear, currentMonth, day);
      const dateString = currentDate.toISOString().split("T")[0];
      const dayEvents = monthEvents.filter(
        (event) => event.startDate === dateString
      );

      days.push(
        <div
          key={`day-${day}`}
          className="h-24 p-1 border border-gray-200 overflow-y-auto"
        >
          <div className="flex justify-between items-start">
            <span
              className={`text-sm font-medium ${
                currentDate.toDateString() === new Date().toDateString()
                  ? "bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  : ""
              }`}
            >
              {day}
            </span>
            {dayEvents.length > 0 && (
              <span className="text-xs text-gray-500">
                {dayEvents.length} event{dayEvents.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={`event-${event.id}-${day}`}
                className={`text-xs p-1 rounded truncate ${
                  event.type === "exam"
                    ? "bg-red-100 text-red-800"
                    : event.type === "holiday"
                    ? "bg-green-100 text-green-800"
                    : event.type === "ceremony"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-blue-100 text-blue-800"
                }`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-4 p-4">
      {/* Header and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Academic Calendar</h2>
          <p className="text-sm md:text-base text-gray-500">
            View and manage academic events and schedules
          </p>
        </div>
        <div className="w-full md:w-auto">
          <button
            onClick={() => setShowAddEventModal(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full md:w-auto"
          >
            <FiPlus /> <span className="hidden sm:inline">Add Event</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-3 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3">
            <FiFilter className="text-gray-500" />
            <select
              className="bg-transparent py-2 focus:outline-none text-sm md:text-base"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {eventTypes.map((type) => (
                <option
                  key={type}
                  value={type === "All Types" ? "all" : type.toLowerCase()}
                >
                  {type.length > 12 ? `${type.substring(0, 10)}...` : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <button
            onClick={() => navigateMonth("prev")}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>
          <h3 className="text-lg font-semibold">
            {getMonthName(currentMonth)} {currentYear}
          </h3>
          <button
            onClick={() => navigateMonth("next")}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {/* Day headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {generateCalendarDays()}
        </div>
      </div>

      {/* Upcoming Events List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredEvents.filter((event) => event.status === "upcoming")
            .length > 0 ? (
            filteredEvents
              .filter((event) => event.status === "upcoming")
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        event.type === "exam"
                          ? "bg-red-100 text-red-600"
                          : event.type === "holiday"
                          ? "bg-green-100 text-green-600"
                          : event.type === "ceremony"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <FiCalendar />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{event.title}</h4>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <FiClock className="mr-1" />
                        {new Date(event.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        {event.endDate !== event.startDate && (
                          <>
                            <span className="mx-1">to</span>
                            {new Date(event.endDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </>
                        )}
                      </div>
                      {event.location && (
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <FiMapPin className="mr-1" />
                          {event.location}
                        </div>
                      )}
                      {event.description && (
                        <p className="mt-2 text-sm text-gray-600">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No upcoming events found
            </div>
          )}
        </div>
      </div>

      {/* All Events Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">All Academic Events</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-sm">{event.title}</div>
                      {event.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {event.description}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          event.type === "exam"
                            ? "bg-red-100 text-red-800"
                            : event.type === "holiday"
                            ? "bg-green-100 text-green-800"
                            : event.type === "ceremony"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      {new Date(event.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {event.endDate !== event.startDate && (
                        <>
                          <span className="mx-1">to</span>
                          {new Date(event.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{event.location}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        {event.status === "completed" ? (
                          <FiCheckCircle className="text-green-500 mr-1" />
                        ) : event.status === "cancelled" ? (
                          <FiAlertCircle className="text-red-500 mr-1" />
                        ) : (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        )}
                        <span className="capitalize">{event.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <FiEdit2 />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No events found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Add New Academic Event
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                    value={newEvent.title}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                    placeholder="e.g., Midterm Examinations"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type
                    </label>
                    <select
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                      value={newEvent.type}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, type: e.target.value })
                      }
                    >
                      {eventTypes
                        .filter((t) => t !== "All Types")
                        .map((type) => (
                          <option key={type} value={type.toLowerCase()}>
                            {type}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                      value={newEvent.status}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, status: e.target.value })
                      }
                    >
                      {eventStatuses
                        .filter((s) => s !== "All Statuses")
                        .map((status) => (
                          <option key={status} value={status.toLowerCase()}>
                            {status}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                      value={newEvent.startDate}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                      value={newEvent.endDate}
                      onChange={(e) =>
                        setNewEvent({ ...newEvent, endDate: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                    value={newEvent.location}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, location: e.target.value })
                    }
                    placeholder="e.g., Main Auditorium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, description: e.target.value })
                    }
                    placeholder="Event details..."
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowAddEventModal(false)}
                  className="px-3 py-1 md:px-4 md:py-2 border rounded-lg hover:bg-gray-100 text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEvent}
                  className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm md:text-base"
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicCalendarSection;
