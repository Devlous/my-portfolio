interface Props {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">
        View Project →
      </a>
    </div>
  );
}
