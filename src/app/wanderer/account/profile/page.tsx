"use client";

import Navbar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  company: string; // Optional field
  address: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  createdAt: string;
  lastLogin: string;
  lastAddressUpdate: string;
  lastPasswordChange: string;
}

const mockUserData: User = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
  company: 'Mikey Corp',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    postcode: '12345',
  },
  createdAt: "2022-01-01T10:00:00Z",
  lastLogin: "2023-11-01T10:00:00Z",
  lastAddressUpdate: "2023-10-15T10:00:00Z",
  lastPasswordChange: "2023-09-01T10:00:00Z",
};

const ProfileSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">{title}</h2>
    {children}
  </div>
);

export default function ProfilePage() {
  const [userData, setUserData] = useState<User>(mockUserData);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: id.includes("Address") ? { ...prevData.address, [id.split('.')[1]]: value } : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate an API call to save the updated user data
      const res = await fetch("/api/update-profile", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setMessage("Profile updated successfully");
      } else {
        setMessage("Error updating profile");
      }
    } catch (error) {
      setMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      {/* Main content */}
      <div className="ml-0 md:ml-64 p-6"> {/* Apply left margin for large screens when sidebar is visible */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form sections */}
          <ProfileSection title="Profile Picture">
            <div className="flex items-center">
              <img src="/path/to/profile-picture.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4" />
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                Change Picture
              </button>
            </div>
          </ProfileSection>

          {/* Other Profile Sections */}
          <ProfileSection title="Login Details">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                id="username"
                value={userData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
          </ProfileSection>

          {/* More profile sections */}
          <ProfileSection title="Details">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                value={userData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                id="company"
                value={userData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
          </ProfileSection>

          {/* More form sections for Address and Account Details */}
          <ProfileSection title="Address">
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street</label>
              <input
                type="text"
                id="street"
                value={userData.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                id="city"
                value={userData.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                id="state"
                value={userData.address.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
              <input
                type="text"
                id="postcode"
                value={userData.address.postcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
                disabled={!isEditing}
              />
            </div>
          </ProfileSection>

          {/* Save Changes Button */}
          <div className="col-span-full">
            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
