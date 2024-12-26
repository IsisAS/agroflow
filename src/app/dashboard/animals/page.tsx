"use client"
import Table from "@/components/table";
import useAnimals from "./useAnimals";
import Breadcrumb from "@/components/breadcrumb";
import { Spinner } from "@nextui-org/spinner";

export default function Animals() {
    const { header, router, breadcrumb, animals, loading, dataMapping } = useAnimals();

    return (
        <div className="w-full flex flex-col gap-[20px]">
            <div>
                <p className="text-[--text-color] text-[20px] font-bold">Gestão Inteligente dos Animais</p>
                <p className="text-[--light-gray] font-semibold">Monitore, registre e cuide da saúde e produtividade do seu rebanho com precisão.</p>
            </div>
            <Breadcrumb items={breadcrumb} />
            {loading ?
                <Spinner color="default" /> :
                <Table header={header} data={animals} dataMapping={dataMapping} onClick={() => router.push('/dashboard/animals/register')} />
            }
        </div>
    )
}