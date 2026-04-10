export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  ratings: {
    affordability: number;
    food: number;
    nightlife: number;
    sightseeing: number;
    overall: number;
  };
  tips: string[];
}

const destinations: Destination[] = [
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    description:
      "Colorful streets, incredible pastéis de nata, and stunning viewpoints over the Tagus River. One of the most affordable capitals in Western Europe.",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&h=400&fit=crop",
    ratings: { affordability: 5, food: 5, nightlife: 4, sightseeing: 5, overall: 5 },
    tips: [
      "Take Tram 28 through Alfama — touristy but worth it",
      "Eat pastéis de nata at Manteigaria, not Pastéis de Belém",
      "Bar hop in Bairro Alto on a Thursday or Friday night",
    ],
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description:
      "The City of Light needs no introduction. World-class museums, unbeatable food scene, and endless neighborhoods to wander through.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    ratings: { affordability: 2, food: 5, nightlife: 4, sightseeing: 5, overall: 4 },
    tips: [
      "Skip the Eiffel Tower line — the view from Sacré-Cœur is better and free",
      "Get a crêpe from a street stand in the Latin Quarter",
      "Walk along the Seine at sunset",
    ],
  },
  {
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    description:
      "Fairy-tale architecture, incredibly cheap beer, and a nightlife scene that rivals Berlin. Perfect for a budget weekend.",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&h=400&fit=crop",
    ratings: { affordability: 5, food: 3, nightlife: 5, sightseeing: 4, overall: 4 },
    tips: [
      "Beer is cheaper than water — enjoy it",
      "Cross Charles Bridge at sunrise to avoid crowds",
      "Check out the multi-story clubs near Old Town Square",
    ],
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    description:
      "Canals, bikes, and museums galore. A compact city that's easy to explore on foot or by bike in a single weekend.",
    image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&h=400&fit=crop",
    ratings: { affordability: 3, food: 4, nightlife: 4, sightseeing: 5, overall: 4 },
    tips: [
      "Rent a bike — it's the best way to get around",
      "Book the Anne Frank House weeks in advance",
      "Try stroopwafels fresh from a street market",
    ],
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    description:
      "Ancient ruins around every corner, the best pasta you'll ever eat, and gelato that will ruin all other ice cream for you forever.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop",
    ratings: { affordability: 3, food: 5, nightlife: 3, sightseeing: 5, overall: 4 },
    tips: [
      "Eat in Trastevere, not near the tourist spots",
      "The Colosseum is best visited first thing in the morning",
      "Throw a coin in the Trevi Fountain — you'll come back",
    ],
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    description:
      "Thermal baths, ruin bars, and stunning architecture split across the Danube. Unbeatable value for a weekend getaway.",
    image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=600&h=400&fit=crop",
    ratings: { affordability: 5, food: 4, nightlife: 5, sightseeing: 4, overall: 5 },
    tips: [
      "Széchenyi Baths on a Saturday morning is iconic",
      "Szimpla Kert is the original ruin bar — go early",
      "Walk across the Chain Bridge at night for the views",
    ],
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    description:
      "History, art, and the best nightlife in Europe. A city that never sleeps and always surprises.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&h=400&fit=crop",
    ratings: { affordability: 4, food: 3, nightlife: 5, sightseeing: 4, overall: 4 },
    tips: [
      "Nightlife starts late — don't show up before midnight",
      "East Side Gallery is a must-see for history and art",
      "Grab a döner kebab from Mustafa's if you're patient enough to wait in line",
    ],
  },
  {
    id: "dubrovnik",
    name: "Dubrovnik",
    country: "Croatia",
    description:
      "The Pearl of the Adriatic. Walk the city walls, swim in crystal-clear water, and pretend you're in King's Landing.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=400&fit=crop",
    ratings: { affordability: 3, food: 4, nightlife: 2, sightseeing: 5, overall: 4 },
    tips: [
      "Walk the city walls early morning to beat the cruise ship crowds",
      "Swim at Banje Beach — bring water shoes",
      "Take the cable car up Mount Srđ for the panoramic view",
    ],
  },
];

export default destinations;
