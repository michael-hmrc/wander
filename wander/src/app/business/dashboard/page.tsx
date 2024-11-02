"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AddWorkspaceForm from "../../../components/BusinessDashboardAddWorkspaceForm";
import { hasPermission } from "../../../lib/roles"; // Import the permission function

export const dynamic = "force-dynamic";

export default function BusinessDashboard() {
  const { data: session, status } = useSession(); // Fetch session data and status
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
    // Check if user role has permission
    else if (status === "authenticated" && !hasPermission(session?.user.role, "create")) {
      router.push("/"); // Redirect to home or an unauthorized page if the role lacks permission
    }
  }, [status, session?.user?.role, router]);

  // Show loading state while authentication status is being checked
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Display the dashboard if user is authenticated and has the right role
  if (status === "authenticated" && hasPermission(session.user.role, "create")) {
    return (
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold">
          Welcome, {session.user?.name}
        </h1>
        <p>This is your business dashboard. Here you can manage your workspaces.</p>
        <AddWorkspaceForm />
      </div>
    );
  }

  return null; // Return null if user doesn't have access (or handle it differently if needed)
}
