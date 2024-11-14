"use client";
import React, { useState } from "react";
import SocialLinks from "../socialinks/page";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xgvwvnpo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contactbox flex flex-col items-center justify-center px-4 py-12 md:py-20 relative z-10 animate-fadeIn">
      {/* Social Icons on the Left */}
      <SocialLinks />

      <h2 className="contactheader text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-300">
        Let&apos;s Chat!
      </h2>

      {submitted ? (
        <p className="thxmsg text-white text-center bg-black p-5 bg-opacity-25">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="formbox w-full max-w-lg p-6 md:p-8 rounded-lg shadow-xl text-black bg-opacity-80"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="formbtn flex justify-center text-white font-semibold px-6 py-2 rounded-md bg-emerald-400 hover:bg-emerald-500 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
