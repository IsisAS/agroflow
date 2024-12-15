import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return function ProtectedComponent(props: P) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login");
      }
    }, [status, router]);

    if (status === "loading") {
      return <p>Carregando...</p>;
    }

    return session ? <Component {...props} /> : null;
  };
};
