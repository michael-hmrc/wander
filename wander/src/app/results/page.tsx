"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DeskMap from "../../components/GoogleMaps"; // Import the GoogleMap component

interface Desk {
  id: number;
  name: string;
  price: number;
  location: string;
  coordinates: { lat: number; lng: number }; // latitude and longitude
}

// Sample data with latitude and longitude (Google Maps expects lat/lng format)
const desks: Desk[] = [
  { id: 1, name: "Desk 1", price: 25, location: "New York City", coordinates: { lat: 40.7128, lng: -74.006 } },
  { id: 2, name: "Desk 2", price: 30, location: "New York City", coordinates: { lat: 40.73061, lng: -73.935242 } },
  { id: 3, name: "Desk 3", price: 20, location: "Los Angeles", coordinates: { lat: 34.0522, lng: -118.2437 } },
  { id: 4, name: "Desk 4", price: 35, location: "London", coordinates: { lat: 51.5074, lng: -0.1276 } },
  { id: 5, name: "Desk 5", price: 100, location: "London", coordinates: { lat: 51.5074, lng: -0.1276 } },
  { id: 6, name: "Desk 6", price: 20, location: "London", coordinates: { lat: 51.5074, lng: -0.1276 } },
  { id: 6, name: "Desk 6", price: 35, location: "London", coordinates: { lat: 51.5074, lng: -0.1276 } },
];

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [filteredDesks, setFilteredDesks] = useState<Desk[]>([]);
  const locationQuery = searchParams.get("location")?.toLowerCase() || "";

  useEffect(() => {
    if (locationQuery) {
      const filtered = desks.filter((desk) =>
        desk.location.toLowerCase().includes(locationQuery)
      );
      setFilteredDesks(filtered);
    }
  }, [locationQuery]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Search Results for "{locationQuery}"
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesks.length > 0 ? (
            filteredDesks.map((desk) => (
              <li key={desk.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{desk.name}</h2>
                <p className="text-gray-700">
                  Price: <span className="font-medium">${desk.price}</span> per day
                </p>
                <p className="text-gray-700 mb-4">Location: {desk.location}</p>
                <Link href={`/book/${desk.id}`}>
                  Book Now
                </Link >
                
                {/* Render the GoogleMap component */}
                {/* <DeskMap coordinates={desk.coordinates} /> */}

              </li>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No desks found for "{locationQuery}"
            </p>
          )}
        </ul>
      </div>
    </main>
  );
}
