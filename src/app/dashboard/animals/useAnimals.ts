import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  return { header, router, breadcrumb, animals, loading, dataMapping };
}
