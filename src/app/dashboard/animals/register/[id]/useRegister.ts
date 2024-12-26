import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useRegister() {
  const { id } = useParams<{ id: string }>() || { id: "" };
  const router = useRouter();

  const breadcrumb = [
    { route: "/dashboard", name: "Dashboard" },
    { route: "/dashboard/animals", name: "Animais" },
    { route: "/dashboard/animals/register", name: "Cadastro" },
  ];
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

  useEffect(() => {
    if (id !== "undefined") {
      setIsLoading(true);
      fetch(`/api/animals/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA", data);
          setFormData(data.data);
        })
        .catch((err) => console.error("Erro ao buscar dados do animal:", err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

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
    setIsLoading(true);

    if (id !== "undefined") {
      fetch(`/api/animals/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(() => router.push("/dashboard/animals"))
        .catch((err) => {
          console.error("Erro ao atualizar o animal:", err);
          toast.error("Erro ao atualizar o animal");
        });
    } else {
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
