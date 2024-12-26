import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useRegister() {
  const breadcrumb = [
    { route: "/dashboard", name: "Dashboard" },
    { route: "/dashboard/animals", name: "Animais" },
    { route: "/dashboard/animals/register", name: "Cadastro" },
  ];
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const species = [
    { key: "gado", label: "Gado (Vacas, Bois)" },
    { key: "galinhas", label: "Galinhas" },
    { key: "porcos", label: "Porcos" },
    { key: "ovelhas", label: "Ovelhas" },
    { key: "cabras", label: "Cabras" },
    { key: "cavalos", label: "Cavalos)" },
    { key: "coelhos", label: "Coelhos" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    register(name);
  };

  type FormData = {
    identification: string;
    species: string;
    breed: string;
    gender: string;
    age: number;
    weight: number;
    location: string;
  };

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Animal cadastrado com sucesso!");
        router.push("/dashboard/animals");
      } else {
        console.error("Erro:", data.message);
        toast.error(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao enviar dados.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    watch,
    errors,
    formData,
    handleInputChange,
    breadcrumb,
    species,
    isLoading,
    onSubmit,
  };
}
