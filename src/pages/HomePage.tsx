import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function HomePage() {
  return (
    <div>
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          EuroWeekender
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Crowd-sourced ratings and tips for weekend trips across Europe.
          Built by study-abroad students, for study-abroad students.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
