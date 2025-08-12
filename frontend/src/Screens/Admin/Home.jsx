import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../../components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import Notice from "../Notice";
import Student from "./Student";
import Faculty from "./Faculty";
import Subjects from "./Subject";
import Admin from "./Admin";
import Branch from "./Branch";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions";
import axiosWrapper from "../../utils/AxiosWrapper";
import Profile from "./Profile";
import Exam from "../Exam";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiBell,
  FiAward,
  FiBookmark,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const MENU_ITEMS = [
  { id: "home", label: "Home", component: null, icon: <FiHome /> },
  { id: "student", label: "Student", component: Student, icon: <FiUsers /> },
  { id: "faculty", label: "Faculty", component: Faculty, icon: <FiUser /> },
  { id: "branch", label: "Branch", component: Branch, icon: <FiBookmark /> },
  { id: "notice", label: "Notice", component: Notice, icon: <FiBell /> },
  { id: "exam", label: "Exam", component: Exam, icon: <FiAward /> },
  { id: "subjects", label: "Subjects", component: Subjects, icon: <FiBook /> },
  { id: "admin", label: "Admin", component: Admin, icon: <FiSettings /> },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [profileData, setProfileData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("userToken");

  const fetchUserDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      toast.loading("Loading user details...");
      const response = await axiosWrapper.get(`/admin/my-details`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (response.data.success) {
        setProfileData(response.data.data);
        dispatch(setUserData(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Error fetching user details"
      );
    } finally {
      setIsLoading(false);
      toast.dismiss();
    }
  }, [userToken, dispatch]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const pathMenuId = urlParams.get("page") || "home";
    const validMenu = MENU_ITEMS.find((item) => item.id === pathMenuId);
    setSelectedMenu(validMenu ? validMenu.id : "home");
  }, [location.search]);

  const getMenuItemClass = (menuId) => {
    const isSelected = selectedMenu === menuId;
    return `
      flex items-center px-4 py-3 cursor-pointer
      font-medium text-sm w-full
      rounded-md
      transition-all duration-300 ease-in-out
      ${
        isSelected
          ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
          : "text-gray-700 hover:bg-blue-50"
      }
    `;
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">Loading...</div>
      );
    }

    const MenuItem = MENU_ITEMS.find(
      (item) => item.id === selectedMenu
    )?.component;

    if (selectedMenu === "home" && profileData) {
      return <Profile profileData={profileData} />;
    }

    return MenuItem && <MenuItem />;
  };

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
    navigate(`/admin?page=${menuId}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-16">
        {/* Sidebar */}
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 border-r bg-white z-40 overflow-y-auto">
          <div className="flex-1 py-2">
            {MENU_ITEMS.map((item) => (
              <div
                key={item.id}
                className={getMenuItemClass(item.id)}
                onClick={() => handleMenuClick(item.id)}
              >
                <span className="text-2xl mx-3">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 ml-64 p-6 bg-gray-50">{renderContent()}</div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Home;
