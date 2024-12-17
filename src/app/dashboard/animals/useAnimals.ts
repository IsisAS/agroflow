export default function useAnimals() {
  const header = [
    "Identificação",
    "Espécie",
    "Raça",
    "Sexo",
    "Idade",
    "Status",
  ];

  const handleSubmit = async (formData: any) => {
    try {
      const response = await fetch("/api/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Sucesso:", data.message);
        alert("Animal cadastrado com sucesso!");
      } else {
        console.error("Erro:", data.message);
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados.");
    }
  };

  return { header, handleSubmit };
}
