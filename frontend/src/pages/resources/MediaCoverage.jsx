import React from "react";

const MediaCoverage = () => {
  const mediaArticles = [
    {
      id: 1,
      title: "Empowering Women in Rural Nepal",
      source: "Nepal Times",
      date: "March 15, 2023",
      description:
        "A detailed report highlighting the efforts of Tharu Women Upliftment Center in improving education and livelihood opportunities for marginalized women in Bardiya, Nepal.",
      link: "#",
    },
    {
      id: 2,
      title: "Community Resilience Amidst Adversity",
      source: "The Himalayan Post",
      date: "January 20, 2023",
      description:
        "An inspiring story about how the community-led programs have made significant contributions to disaster recovery and resilience-building initiatives.",
      link: "#",
    },
    {
      id: 3,
      title: "Leadership Programs for Women Gain National Attention",
      source: "Kathmandu Chronicle",
      date: "October 10, 2022",
      description:
        "Coverage of the recent leadership workshops held for young women in rural areas, fostering leadership and self-reliance.",
      link: "#",
    },
    {
      id: 4,
      title: "Breaking Barriers with Health Awareness Drives",
      source: "National Daily",
      date: "August 5, 2022",
      description:
        "This feature highlights the success of health and wellness campaigns led by the organization, which have improved health outcomes in remote villages.",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-5xl font-extrabold text-blue-700 text-center mb-12">
        Media Coverage
      </h2>
      <p className="text-xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto mb-12">
        Explore how local and national media have recognized our journey of
        empowerment, resilience, and community transformation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              <strong>{article.source}</strong> &bull; {article.date}
            </p>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Read Full Article &rarr;
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold text-blue-700 mb-4">
          Share Our Story
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Help spread the word about our work and impact by sharing our
          achievements with your network.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/contact-us"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/donate-us"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
