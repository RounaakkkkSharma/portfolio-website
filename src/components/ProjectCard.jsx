export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-xl transform hover:-translate-y-2 transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 rounded shadow-md w-full h-40 md:h-48 object-cover"
        />
      )}
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-600 hover:underline font-medium"
      >
        View Project
      </a>
    </div>
  );
}
