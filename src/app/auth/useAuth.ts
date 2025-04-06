import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    }).finally(() => {
      setLoading(false);
    });

    if (result?.error) {
      alert("Erro: " + result.error);
    } else {
      router.push("/dashboard");
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit, loading };
}
