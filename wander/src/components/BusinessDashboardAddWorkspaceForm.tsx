"use client";

import { useState } from "react";

export default function AddWorkspaceForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const [hourPrice, setHourPrice] = useState(0);
  const [dayPrice, setDayPrice] = useState(0);
  const [weekPrice, setWeekPrice] = useState(0);
  const [monthPrice, setMonthPrice] = useState(0);
  const [annualPrice, setAnnualPrice] = useState(0);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/workspaces/add", {
      method: "POST",
      body: JSON.stringify({
        name,
        location,
        hourPrice,
        dayPrice,
        weekPrice,
        monthPrice,
        annualPrice
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setMessage("Workspace added successfully");
      setName("");
      setLocation("");
      setPrice(0);
    } else {
      setMessage("Error adding workspace");
    }
  };

  return (
    <div className="max-w-lg bg-white p-6 rounded-md shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Workspace</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Workspace Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Workspace Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Workspace Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>


        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Hourly Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price per hour"
            value={hourPrice}
            onChange={(e) => setHourPrice(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Daily Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price per day"
            value={dayPrice}
            onChange={(e) => setDayPrice(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none"
            required
            // Apply this inline style if you want to target it directly
            style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
          />
        </div>


        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Weekly price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price per week"
            value={weekPrice}
            onChange={(e) => setWeekPrice(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Montly price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price per month"
            value={monthPrice}
            onChange={(e) => setMonthPrice(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>



        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Annual price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Price per year"
            value={annualPrice}
            onChange={(e) => setAnnualPrice(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Add Workspace
        </button>
      </form>

      {/* Success/Error Message */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
