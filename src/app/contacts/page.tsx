import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-4">Email me at:</p>
        <a href="mailto:youremail@example.com" className="text-blue-600 text-lg font-semibold">
          youremail@example.com
        </a>
      </section>
    </main>
  );
}
