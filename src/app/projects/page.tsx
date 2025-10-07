import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "Built with Next.js & Tailwind CSS", link: "https://my-portfolio-t4mw-ay48r1ed3-watchman1.vercel.app/projects#" },
    { title: "E-commerce front-end design", description: "React + GraphQL data visualizations", link: "https://github.com/Devlous/Akira-site" },
    // { title: "Weather App", description: "Next.js + OpenWeather API integration", link: "#" },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
