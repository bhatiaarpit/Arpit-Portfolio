import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="relative flex flex-col items-start justify-center h-full p-6 md:p-12 text-gray-300 font-mono z-[1]">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 animate-bg"></div>

      <p className="text-xs md:text-sm text-gray-400 animate-fade-in-up">
        // Hi all. I am
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
        {data.name}
      </h1>
      <h2 className="text-sm sm:text-lg md:text-xl text-blue-400 animate-fade-in-up">
        {"> "}
        <TypeAnimation
          sequence={[data.role, 1000, ""]}
          speed={50}
          repeat={Infinity}
        />
      </h2>

      {/* Contact Info - Code Editor Style */}
      <div className="mt-4 md:mt-6 w-full max-w-lg bg-gray-800 p-3 md:p-4 rounded-lg border border-gray-700 shadow-lg animate-fade-in-up text-sm md:text-base">
        <p className="text-gray-500">// my number</p>
        <p className="text-green-400 break-all">{`const telephoneNum = "${data.contacts.phone}";`}</p>

        <p className="text-gray-500 mt-2">// my e-mail</p>
        <p className="text-green-400 break-all">{`const email = "${data.contacts.email}";`}</p>

        <p className="text-gray-500 mt-2">// my links</p>
        <p className="text-green-400 break-all">{`const githubLink = "${data.contacts.github}";`}</p>
        <p className="text-green-400 break-all">{`const behanceLink = "${data.contacts.behance}";`}</p>
        <p className="text-green-400 break-all">{`const linkedinPage = "${data.contacts.linkedin}";`}</p>
      </div>
    </section>
  );
};

export default Hero;
