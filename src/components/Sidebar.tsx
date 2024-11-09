// components/Sidebar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-0 md:left-0 top-20 z-50 md:w-64 w-0 bg-gray-50 text-black p-4`}
        >
            {/* Toggle button for mobile */}
            <button
                className="md:hidden text-white bg-blue-600 p-2 rounded-md"
                onClick={toggleSidebar}
            >
                {isOpen ? "Close" : "Open"} Sidebar
            </button>

            {/* Scrollable sidebar content */}
            <nav className="mt-4 h-full overflow-y-auto">
                <ul>
                    <li>
                        <Link
                            href="/wanderer/account/profile"
                            className="block py-2 px-4 text-lg hover:bg-gray-300 rounded"
                        >
                            Book now
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/workspaces"
                            className="block py-2 px-4 text-lg hover:bg-gray-300 rounded"
                        >
                            Favourites
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/wanderer/account/profile"
                            className="block py-2 px-4 text-lg hover:bg-gray-300 rounded"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/billing"
                            className="block py-2 px-4 text-lg hover:bg-gray-300 rounded"
                        >
                            Billing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/settings"
                            className="block py-2 px-4 text-lg hover:bg-gray-300 rounded"
                        >
                            Preferences
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
