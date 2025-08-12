import { useState } from "react";
import { IoMdLink } from "react-icons/io";
import { HiOutlineCalendar } from "react-icons/hi";

const EventCalendar = ({ notices = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredNotice, setHoveredNotice] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Generate days array
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Navigation functions
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Get notices for a specific day
  const getNoticesForDay = (day) => {
    return notices.filter((notice) => {
      const noticeDate = new Date(notice.createdAt || notice.date);
      return (
        noticeDate.getDate() === day &&
        noticeDate.getMonth() === currentMonth &&
        noticeDate.getFullYear() === currentYear
      );
    });
  };

  // Handle mouse enter for notice hover
  const handleNoticeHover = (notice, e) => {
    setHoveredNotice(notice);
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left,
      y: rect.top + window.scrollY,
    });
  };

  // Handle mouse leave
  const handleNoticeLeave = () => {
    setHoveredNotice(null);
  };

  return (
    <div className="container mx-auto mt-4 relative">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevMonth}
              className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Today
            </button>
            <button
              onClick={nextMonth}
              className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {/* Weekday Headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="bg-gray-100 py-2 text-center text-sm font-medium text-gray-600"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="bg-white h-24"></div>
          ))}

          {/* Calendar days */}
          {days.map((day) => {
            const isToday =
              day === new Date().getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear();

            const dayNotices = getNoticesForDay(day);

            return (
              <div
                key={day}
                className={`bg-white h-24 p-1 border border-gray-100 ${
                  isToday ? "border-blue-500 border-2" : ""
                }`}
              >
                <div className="text-right p-1">
                  <span
                    className={`inline-block w-6 h-6 rounded-full text-center leading-6 ${
                      isToday ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {day}
                  </span>
                </div>
                <div className="overflow-y-auto max-h-16">
                  {dayNotices.map((notice) => (
                    <div
                      key={notice._id || notice.id}
                      className="bg-blue-100 text-blue-800 text-xs p-1 mb-1 rounded truncate cursor-pointer hover:bg-blue-200 transition-colors"
                      onMouseEnter={(e) => handleNoticeHover(notice, e)}
                      onMouseLeave={handleNoticeLeave}
                    >
                      {notice.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notice Description Tooltip */}
      {hoveredNotice && (
        <div
          className="absolute z-50 bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs"
          style={{
            left: `${hoverPosition.x}px`,
            top: `${hoverPosition.y + 30}px`,
          }}
        >
          <h4 className="font-semibold text-blue-600 mb-2">
            {hoveredNotice.title}
          </h4>
          <p className="text-sm text-gray-700">{hoveredNotice.description}</p>
          {hoveredNotice.link && (
            <a
              href={hoveredNotice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:underline mt-2 inline-block"
            >
              <IoMdLink className="inline mr-1" />
              Open Link
            </a>
          )}
          <div className="mt-2 text-xs text-gray-500">
            <HiOutlineCalendar className="inline mr-1" />
            {new Date(
              hoveredNotice.createdAt || hoveredNotice.date
            ).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
