import Link from 'next/link';

interface Desk {
  id: number;
  name: string;
  price: number;
  location: string;
}

export default function HomePage() {
  const desks: Desk[] = [
    { id: 1, name: 'Desk 1', price: 25, location: 'Downtown' },
    { id: 2, name: 'Desk 2', price: 30, location: 'Uptown' },
  ];

  return (
    <main>
      <h1>Available Workspaces</h1>
      <ul>
        {desks.map((desk) => (
          <li key={desk.id}>
            <h2>{desk.name}</h2>
            <p>Price: ${desk.price} per day</p>
            <p>Location: {desk.location}</p>
            {/* Correct Link for booking page */}
            <Link href={`/desk/${desk.id}`}>
              Book Now
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
