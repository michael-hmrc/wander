"use client";

import { useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function BookingForm({ deskId }: { deskId: number }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate) {
      setMessage("Please select a date.");
      return;
    }

    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        deskId,
        selectedDate: selectedDate.toISOString(), // Send the selected date in ISO format
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setMessage("Booking confirmed!");
    } else {
      setMessage("Error booking desk.");
    }
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded-md shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Book Desk</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Single Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <DatePicker
            onChange={setSelectedDate}
            value={selectedDate}
            format="y-MM-dd" // Format to display the date as YYYY-MM-DD
            required
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Book Now
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
