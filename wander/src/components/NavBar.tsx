import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 p-4">

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <div className="text-2xl font-semibold">
          <Link href="/">Wander</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-pink-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/book" className="text-gray-700 hover:text-indigo-600">
              Book a Desk
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
