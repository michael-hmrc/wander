import BookingForm from "../../../components/BookingForm";

export default function BookDeskPage({ params }: { params: { id: string } }) {
  const deskId = parseInt(params.id, 10);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Book Desk {deskId}</h1>

        {/* Render the BookingForm with the deskId prop */}
        <BookingForm deskId={deskId} />
      </div>
    </main>
  );
}
