import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I am Onyeke Lotanna Louis</h1>
        <p className="text-lg text-gray-700 mb-8">
          Front-End Developer | React | Next.js 
        </p>
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>
    </main>
  );
}
