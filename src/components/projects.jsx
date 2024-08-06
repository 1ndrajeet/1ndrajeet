"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "../app/data.json"; // Adjust the path to your JSON file

export function Projects() {
  // Access the projects array from the JSON data
  const projects = data.projects || []; // Fallback to empty array if data.projects is undefined

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-100 tracking-tighter sm:text-4xl md:text-5xl">
            My Projects 🛠️
          </h2>
          <p className="text-gray-400 md:text-xl">
            Check out some of my super cool projects! Each one showcases my skills.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      project.status === "Active"
                        ? "bg-green-500 text-gray-900"
                        : "bg-yellow-500 text-gray-900"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.status === "Active" && project.link && (
                  <div className="mt-6 flex justify-end">
                    <Link
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      prefetch={false}
                    >
                      View Project 🔗
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
