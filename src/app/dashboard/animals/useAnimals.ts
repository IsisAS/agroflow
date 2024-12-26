import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function useAnimals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const breadcrumb = [
    {
      route: "/dashboard",
      name: "Dashboard",
    },
    {
      route: "/dashboard/animals",
      name: "Animals",
    },
  ];

  const header = [
    "Identificação",
    "Espécie",
    "Raça",
    "Sexo",
    "Idade",
    "Status",
  ];

  const dataMapping = {
    Identificação: "identification",
    Espécie: "species",
    Raça: "breed",
    Sexo: "gender",
    Idade: "age",
    Localização: "location",
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    setLoading(true);
    const response = await fetch("/api/animals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).finally(() => {
      setLoading(false);
    });

    const data = await response.json();
    setAnimals(data.data);
  };

  const removeAnimals = async (id: string) => {
    setLoading(true);
    await fetch(`/api/animals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possivel remover o animal");
      })
      .finally(() => {
        setLoading(false);
        getAnimals();
      });
  };
  return {
    header,
    router,
    breadcrumb,
    animals,
    loading,
    dataMapping,
    removeAnimals,
  };
}
