"use client";

import React, { useState } from "react";

const OfficePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Private Office",
    pricePerHour: "",
    pricePerDay: "",
    address: {
      street: "",
      city: "",
      state: "",
      postcode: "",
      country: "United Kingdom",
    },
    features: [],
    availability: {
      days: [],
      startTime: "",
      endTime: "",
    },
    rules: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter((feature) => feature !== value),
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    const newErrors: any = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.pricePerHour) newErrors.pricePerHour = "Price per hour is required";
    if (!formData.address.street) newErrors.street = "Street address is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Send data to API (example endpoint)
      fetch("/api/Offices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => console.log("Office created:", data))
        .catch((err) => console.error("Error creating Office:", err));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Create a Office Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>

        {/* Office Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Office Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md"
          >
            <option value="Private Office">Private Office</option>
            <option value="Shared Office">Shared Office</option>
            <option value="Hot Office">Hot Office</option>
            <option value="Standing Office">Standing Office</option>
          </select>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="pricePerHour" className="block text-sm font-medium text-gray-700">Price Per Hour (£)</label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
            {errors.pricePerHour && <p className="text-red-500 text-sm">{errors.pricePerHour}</p>}
          </div>
          <div>
            <label htmlFor="pricePerDay" className="block text-sm font-medium text-gray-700">Price Per Day (£)</label>
            <input
              type="number"
              id="pricePerDay"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Features */}
        <fieldset>
          <legend className="block text-sm font-medium text-gray-700">Features</legend>
          <div className="flex gap-4 mt-2">
            {["Wi-Fi", "Power Outlets", "Monitor", "Office Lamp", "Coffee"].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  value={feature}
                  checked={formData.features.includes(feature)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Rules */}
        <div>
          <label htmlFor="rules" className="block text-sm font-medium text-gray-700">Rules</label>
          <textarea
            id="rules"
            name="rules"
            value={formData.rules}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Create Office
          </button>
        </div>
      </form>
    </div>
  );
};

export default OfficePage;