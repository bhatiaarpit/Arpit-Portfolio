import { useState } from "react";
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";
import profileImage from "../assets/profile.png";
import bannerImage from "../assets/banner.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const tabs = ["Posts", "Replies", "Media", "Likes"];

  return (
    <div className="w-full max-w-2xl mx-auto text-white bg-black min-h-screen">
      {/* Banner & Profile Picture */}
      <div className="relative">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-[-40px] left-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-black"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Arpit Bhatia</h1>
            <p className="text-gray-400">@arpit_bhatia_</p>
          </div>
          <button className="border px-4 py-2 rounded-full text-sm hover:bg-gray-800">
            Edit profile
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-300">
          Software Engineer | Shopify Dev | CSE'25 🎓
        </p>

        {/* Profile Details */}
        <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" /> Bengaluru, India
          </div>
          <div className="flex items-center">
            <LinkIcon size={16} className="mr-1" />
            <a
              href="https://linkedin.com/in/bhatiaarpit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/bhatiaarpit
            </a>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" /> Joined November 2022
          </div>
        </div>

        {/* Followers Count */}
        <div className="mt-2 flex space-x-4 text-sm">
          <span><strong>149</strong> Following</span>
          <span><strong>33</strong> Followers</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-3 flex-1 text-center border-b-4 transition-all ${
              activeTab === tab ? "border-white font-semibold" : "border-transparent text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts Section */}
      <div className="p-4 text-center text-gray-400">
        {activeTab === "Posts" ? "No posts yet" : `No ${activeTab.toLowerCase()} yet`}
      </div>
    </div>
  );
};

export default Profile;