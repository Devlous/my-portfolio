import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate front-end developer who loves building fast, accessible, and beautiful web experiences.
          I specialize in React, Next.js, and Tailwind CSS, and I enjoy turning design concepts into real, usable interfaces.
        </p>
      </section>
    </main>
  );
}
