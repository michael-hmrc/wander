// app/wanderer/account/profile/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function ProfileLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex">
                <Sidebar /> {/* Sidebar specific to profile section */}
                <main className="flex-1 p-6">{children}</main> {/* Page content */}
            </div>
        </div>
    );
}
