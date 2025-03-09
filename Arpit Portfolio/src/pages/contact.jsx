import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Handle form submission logic (send to email, API, etc.)
  };

  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 text-gray-300 font-mono p-6 h-full">
      <h1 className="text-lg sm:text-xl text-green-400">/** Contact Me */</h1>
      <p className="text-gray-400">// Feel free to reach out.</p>

      <form 
        onSubmit={handleSubmit} 
        className="mt-6 w-full max-w-lg bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg"
      >
        <label className="text-gray-500 block">const name = </label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full bg-gray-700 text-green-400 px-3 py-2 rounded outline-none border border-gray-600 focus:border-green-400 mb-3"
        />

        <label className="text-gray-500 block">const email = </label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full bg-gray-700 text-green-400 px-3 py-2 rounded outline-none border border-gray-600 focus:border-green-400 mb-3"
        />

        <label className="text-gray-500 block">const message = </label>
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange}
          required
          placeholder="Type your message..."
          className="w-full bg-gray-700 text-green-400 px-3 py-2 rounded outline-none border border-gray-600 focus:border-green-400 h-28 resize-none"
        />

        <button 
          type="submit" 
          className="mt-4 w-full bg-gray-700 text-green-400 px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
