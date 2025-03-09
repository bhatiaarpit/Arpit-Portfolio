import React from "react";
import * as LucideIcons from "lucide-react"; // Import all Lucide icons dynamically

const socialLinks = [
  { icon: "Github", url: "https://github.com/bhatiaarpit" },
  { icon: "Linkedin", url: "https://www.linkedin.com/in/bhatiaarpit/" },
  { icon: "Twitter", url: "https://twitter.com/bhatiaarpit" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 font-mono border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
      {/* Left - "Find me in" text */}
      <div className="flex px-4">
        <div className="border-r-2 border-gray-700 py-1 px-4">find me on:</div>

        {/* Center - Social Links (Dynamically rendered) */}
        <div className="flex overflow-hidden">
          {socialLinks.map(({ icon, url }, index) => {
            const IconComponent = LucideIcons[icon]; // Dynamically select icon
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors py-2 border-r-2 border-gray-700 px-2"
              >
                {IconComponent ? <IconComponent size={18} /> : null}
              </a>
            );
          })}
        </div>
      </div>

      {/* Right - Username */}
      <div className="text-green-400 border-l-2 border-gray-700 px-4 py-1 hidden md:block">@bhatiaarpit</div>
    </footer>
  );
};

export default Footer;
