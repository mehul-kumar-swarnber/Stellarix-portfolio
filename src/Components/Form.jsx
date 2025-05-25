import { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("Failed to send message. Try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md text-white">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 rounded-xl transition"
      >
        Send
      </button>
      {status && <p className="mt-2 text-sm text-cyan-300">{status}</p>}
    </form>

  );
}
