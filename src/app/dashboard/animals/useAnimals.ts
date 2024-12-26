import { useRouter } from "next/navigation";

export default function useAnimals() {
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

  return { header, router, breadcrumb };
}
