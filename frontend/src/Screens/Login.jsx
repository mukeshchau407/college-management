import React, { useState, useEffect } from "react";
import { FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { setUserToken } from "../redux/actions";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import axiosWrapper from "../utils/AxiosWrapper";

// Auth storage helper
const authStorage = {
  set: (token, userType) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("userType", userType);
  },
  get: () => ({
    token: localStorage.getItem("userToken"),
    userType: localStorage.getItem("userType"),
  }),
  clear: () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
  },
};

const USER_TYPES = {
  STUDENT: "Student",
  FACULTY: "Faculty",
  ADMIN: "Admin",
};

const LoginForm = ({
  selected,
  onSubmit,
  formData,
  setFormData,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  };

  return (
    <form
      className="w-full p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
      onSubmit={onSubmit}
    >
      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-medium mb-2"
          htmlFor="email"
        >
          {selected} Email
        </label>
        <input
          type="email"
          id="email"
          required
          autoFocus
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleEmailChange}
          aria-label={`${selected} email address`}
          autoComplete="username"
        />
        {formData.email && !validateEmail(formData.email) && (
          <p className="mt-1 text-xs text-red-600">
            Please enter a valid email
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-medium mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            aria-label="Password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <Link
          className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          to="/forget-password"
        >
          Forgot Password?
        </Link>
      </div>
      <CustomButton
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 flex justify-center items-center gap-2"
        loading={isLoading}
        disabled={isLoading || !validateEmail(formData.email)}
      >
        {isLoading ? "Logging in..." : "Login"}
        {!isLoading && <FiLogIn className="text-lg" />}
      </CustomButton>
    </form>
  );
};

const UserTypeSelector = ({ selected, onSelect }) => (
  <div className="flex justify-center gap-4 mb-8 flex-wrap">
    {Object.values(USER_TYPES).map((type) => (
      <button
        key={type}
        onClick={() => onSelect(type)}
        className={`px-5 py-2 text-sm font-medium rounded-full transition duration-200 ${
          selected === type
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
        aria-label={`Login as ${type}`}
        aria-pressed={selected === type}
      >
        {type}
      </button>
    ))}
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [selected, setSelected] = useState(USER_TYPES.STUDENT);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserTypeSelect = (type) => {
    const userType = type.toLowerCase();
    setSelected(type);
    setSearchParams({ type: userType });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosWrapper.post(
        `/${selected.toLowerCase()}/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = response.data.data;
      authStorage.set(token, selected);
      dispatch(setUserToken(token));
      navigate(`/${selected.toLowerCase()}`);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { token, userType } = authStorage.get();
      if (token && userType) {
        try {
          // Add token validation API call here if needed
          // await axiosWrapper.get('/validate-token');
          navigate(`/${userType.toLowerCase()}`);
        } catch (error) {
          authStorage.clear();
        }
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    if (type) {
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      if (Object.values(USER_TYPES).includes(capitalizedType)) {
        setSelected(capitalizedType);
      }
    }
  }, [type]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl lg:w-1/2 px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          {selected} Login
        </h1>
        <UserTypeSelector selected={selected} onSelect={handleUserTypeSelect} />
        <LoginForm
          selected={selected}
          onSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
        />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Login;
