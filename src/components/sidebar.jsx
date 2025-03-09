import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Darklogo from '../assets/black-x-logo.svg';
import Lightlogo from '../assets/white-x-logo.svg';
import { Home, Search, Bell, Mail, List, User, MoreHorizontal } from "lucide-react";

const menuItems = [
  { id: 1, label: "Home", icon: <Home size={28} />, path: "/" },
  { id: 2, label: "Explore", icon: <Search size={28} />, path: "/explore" },
  { id: 3, label: "Notifications", icon: <Bell size={28} />, path: "/notification" },
  { id: 4, label: "Messages", icon: <Mail size={28} />, path: "/messages" },
  { id: 5, label: "Lists", icon: <List size={28} />, path: "/lists" },
  { id: 6, label: "Profile", icon: <User size={28} />, path: "/profile" },
  { id: 7, label: "More", icon: <MoreHorizontal size={28} />, path: "/more" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sidebar for Desktop & Tablet */}
      <div className="sidebar md:flex fixed left-0 top-0 h-full md:w-1/4 bg-white dark:bg-black border-r border-black dark:border-gray-700 flex-col p-4 transition-all overflow-y-auto">
        {/* Logo */}
        <div className="sidebar__logo mb-6 flex justify-start size-10 ml-2">
          <a href="/">
            <img
              src={isDarkMode ? Lightlogo : Darklogo}
              alt="X Logo"
              className="w-full h-full transition-all"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav flex flex-col space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`sidebar__nav-item flex items-center space-x-4 p-3 rounded-full transition text-black dark:text-white 
                ${location.pathname === item.path ? "bg-gray-300 dark:bg-gray-700 font-semibold" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Post Button */}
        <button className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full w-full">
          Post
        </button>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="sidebar__bottom-nav fixed bottom-0 left-0 w-full bg-white dark:bg-black border-t border-black dark:border-gray-700 flex justify-around p-3 md:hidden">
        {menuItems.slice(0, 5).map((item) => (
          <button 
            key={item.id} 
            onClick={() => navigate(item.path)} 
            className={`sidebar__bottom-nav-item text-black dark:text-white p-2 rounded-full 
              ${location.pathname === item.path ? "bg-gray-200 dark:bg-gray-800" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
