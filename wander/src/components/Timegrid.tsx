import { useState } from "react";

const hours = Array.from({ length: 24 }, (_, index) => `${index}:00`);

export default function TimeGrid() {
  const [startSlot, setStartSlot] = useState<number | null>(null);
  const [endSlot, setEndSlot] = useState<number | null>(null);

  const handleSlotClick = (index: number) => {
    // If no start slot is selected, set the clicked index as the start slot
    if (startSlot === null) {
      setStartSlot(index);
      setEndSlot(null); // Clear the end slot to start a new range
    } else if (endSlot === null && index > startSlot) {
      // If the start slot is already selected, set the clicked index as the end slot
      setEndSlot(index);
    } else {
      // Reset the selection when clicking again after both start and end are set
      setStartSlot(index);
      setEndSlot(null);
    }
  };

  const isSlotSelected = (index: number) => {
    // A slot is considered selected if it lies between startSlot and endSlot
    return startSlot !== null && endSlot !== null && index >= startSlot && index <= endSlot;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Select Time Range</h2>

      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {hours.map((hour, index) => (
          <div
            key={index}
            onClick={() => handleSlotClick(index)}
            className={`p-4 border ${
              isSlotSelected(index) ? "bg-indigo-500 text-white" : "bg-gray-100"
            } cursor-pointer rounded-lg text-center`}
          >
            {hour}
          </div>
        ))}
      </div>

      {/* Display selected time range */}
      {startSlot !== null && endSlot !== null && (
        <div className="mt-6">
          <p className="text-xl">
            Selected Time Range: {hours[startSlot]} to {hours[endSlot]}
          </p>
        </div>
      )}
    </div>
  );
}
