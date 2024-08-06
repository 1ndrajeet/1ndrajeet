"use client";

import { Github, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl">
            Contact Me 📬
          </h2>
          <p className="text-gray-400 md:text-xl">
            Feel free to reach out to me through any of the following platforms
            or by filling out the form below.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8 hover:text-emerald-400 transition-colors duration-300" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8 hover:text-rose-500 transition-colors duration-300" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8 hover:text-blue-600 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="mt-12">
          <form
            action={process.env.NEXT_PUBLIC_FORM_SUBMIT_URL}
            method="post"
            className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <input
              type="hidden"
              name="_next"
              value={process.env.NEXT_PUBLIC_WEBSITE_URL + "thanks"}
            />
            <input
              type="hidden"
              name="_subject"
              value="Someone visited our profile!"
            />
            <input type="hidden" name="_captcha" value="false" />
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              Send me a message
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-1 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-1 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 mt-1 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-emerald-500 text-white rounded-md shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
