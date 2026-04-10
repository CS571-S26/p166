import { Link } from "react-router-dom";
import type { Destination } from "../data/destinations";

function DestinationCard({ destination }: { destination: Destination }) {
  const { id, name, country, image, ratings } = destination;

  return (
    <Link
      to={`/destination/${id}`}
      className="group block rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow no-underline"
    >
      <div className="aspect-3/2 overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{country}</p>
          </div>
          <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
            <span>{ratings.overall}</span>
            <span className="text-xs">/5</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;
