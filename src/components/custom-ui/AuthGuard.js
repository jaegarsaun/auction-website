'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authStateListener } from "@/app/services/firebase"; // Import the auth state listener
import { signOutUser } from "@/app/services/firebase"; // For signing out if needed

const AuthGuard = ({ children }) => {
  const [loading, setLoading] = useState(true); // To track the loading state
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Handle when the user is authenticated
    const handleUserAuthenticated = (user) => {
      setUser(user);
      setLoading(false);
    };

    // Handle when the user is not authenticated (signed out)
    const handleUserSignedOut = () => {
      setUser(null);
      setLoading(false);
      router.push("/auth/login"); // Redirect to the home page if not signed in
    };

    // Start listening for auth state changes
    const unsubscribe = authStateListener(handleUserAuthenticated, handleUserSignedOut);

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [router]);

  // If still loading, you might want to return a loader/spinner here
  if (loading) {
    return <p>Loading...</p>;
  }

  // If user is signed in, render the children components
  return <>{children}</>;
};

export default AuthGuard;
