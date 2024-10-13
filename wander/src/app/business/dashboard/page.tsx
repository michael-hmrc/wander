"use client";

import { useRouter } from "next/navigation";
import AddWorkspaceForm from "../../../components/BusinessDashboardAddWorkspaceForm"; // Import the form component

export default function BusinessDashboard() {
    //   const { data: session, status } = useSession();
    const router = useRouter();

    //   useEffect(() => {
    //     if (status === "unauthenticated") {
    //       router.push("/api/auth/signin"); // Redirect to sign-in if not logged in
    //     }
    //   }, [status, router]);

    //   if (status === "loading") {
    //     return <p>Loading...</p>;
    //   }

    //   if (status === "authenticated") {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold">Welcome,
                {/* {session.user?.name} */}
            </h1>
            <p>This is your business dashboard. Here you can manage your workspaces.</p>

            {/* Add Workspace Form */}
            <AddWorkspaceForm />
        </div>
    );
}

//   return null;
// }
