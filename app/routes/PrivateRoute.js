"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) return <div>Loading.....</div>;
  if (!user) {
    router.push("/sign-in");
    return null;
  }
  if (user && !loading) {
    return children;
  }
};
export default PrivateRoute;
