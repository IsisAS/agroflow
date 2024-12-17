import Table from "@/components/table";
import useAnimals from "./useAnimals";

export default function Animals() {
    const { header } = useAnimals();

    return (
        <div className="w-full flex flex-col gap-[100px]">
            <div>
                <p className="text-[--text-color] text-[20px] font-bold">Gestão Inteligente dos Animais</p>
                <p className="text-[--light-gray] font-semibold">Monitore, registre e cuide da saúde e produtividade do seu rebanho com precisão.</p>
            </div>
            <Table header={header} />
        </div>
    )
}