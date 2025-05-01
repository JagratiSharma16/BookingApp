import React from "react";
import {assets} from "../assets/assets_frontend/assets";


const speakers = [
  {
    id: 1,
    name: "Dr. A.P. Verma",
    title: "Professor, IIT Kanpur",
    image: assets.doc1 , // Place in public/images/
    bio: "Expert in AI and Machine Learning with 15+ years of teaching and research experience.",
    topics: ["Deep Learning", "AI Ethics", "Computer Vision"]
  },
  {
    id: 2,
    name: "Ms. Ritu Sharma",
    title: "Lead Developer, Microsoft India",
    image: assets.doc2,
    bio: "Key contributor to Azure Cloud development and speaker at multiple tech summits.",
    topics: ["Cloud Computing", "DevOps", "Security"]
  },
  {
    id: 3,
    name: "Prof. S. K. Rao",
    title: "Dean, NIT Bhopal",
    image: assets.doc3,
    bio: "Renowned academic leader focused on smart education and technology integration in academia.",
    topics: ["Education 5.0", "IoT in Learning", "Smart Campuses"]
  }
];

const Featuredspeakers = () => {
  return (
    <section className=" py-10 px-6 2xl:px-24">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-center text-amber-800 mb-14 drop-shadow-lg">
        Featured Speakers & Institutions
      </h2>

      <div className="grid gap-12 md:grid-cols-3 2xl:grid-cols-3">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 2xl:p-8"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-70 2xl:h-80 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-2xl 2xl:text-3xl font-bold text-gray-800">{speaker.name}</h3>
            <p className="text-lg 2xl:text-xl text-amber-700 mb-3">{speaker.title}</p>
            <p className="text-gray-600 mb-4 2xl:text-lg">{speaker.bio}</p>
            <div className="flex flex-wrap gap-2">
              {speaker.topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-amber-200 text-amber-800 text-sm 2xl:text-base px-3 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featuredspeakers;
