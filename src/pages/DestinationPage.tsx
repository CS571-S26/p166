import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";
import RatingBar from "../components/RatingBar";

function DestinationPage() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Destination not found
        </h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to all destinations
        </Link>
      </div>
    );
  }

  const { name, country, description, image, ratings, tips } = destination;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block"
      >
        &larr; All destinations
      </Link>

      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <p className="text-gray-500 mb-4">{country}</p>
      <p className="text-gray-700 leading-relaxed mb-8">{description}</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Ratings</h2>
        <div className="space-y-3">
          <RatingBar label="Affordability" value={ratings.affordability} />
          <RatingBar label="Food" value={ratings.food} />
          <RatingBar label="Nightlife" value={ratings.nightlife} />
          <RatingBar label="Sightseeing" value={ratings.sightseeing} />
          <RatingBar label="Overall" value={ratings.overall} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Top Tips
        </h2>
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-blue-500 mt-0.5">&#8226;</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DestinationPage;
