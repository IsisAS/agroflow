import { signIn } from "next-auth/react";
import { useState } from "react";

export function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      alert("Erro: " + result.error);
    } else {
      alert("Login realizado com sucesso!");
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit };
}
