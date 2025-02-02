"use client";

import { useState } from "react";
// import { Input } from "../components/input";
import Particles from "../components/Particles";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", pass: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to submit form");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-center pointer-events-none -z-10">
        <Particles />
      </div>
      <div className="flex flex-col p-10 items-center justify-center h-screen space-y-2">
        <h1 className="text-[40px] font-bold">
          <span className="text-white font-overpass">Register</span>
          <span className="text-blue-500">.</span>
        </h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-2 flex flex-col justify-center items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.pass}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-4 py-1 bg-white text-black rounded-md hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
