"use client";
import Table from "@/components/table";
import useAnimals from "./useAnimals";
import Breadcrumb from "@/components/breadcrumb";
import { Spinner } from "@nextui-org/spinner";
import ConfirmAction from "@/components/confirmAction";
import { useState } from "react";

export default function Animals() {
    const { header, router, breadcrumb, animals, loading, dataMapping, removeAnimals } = useAnimals();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAnimalId, setSelectedAnimalId] = useState<string | null>(null);

    const handleOpenModal = (id: string) => {
        setSelectedAnimalId(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedAnimalId) {
            removeAnimals(selectedAnimalId);
        }
        setIsModalOpen(false);
        setSelectedAnimalId(null);
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setSelectedAnimalId(null);
    };

    return (
        <div className="w-full flex flex-col gap-[20px]">
            <div>
                <p className="text-[--text-color] text-[20px] font-bold">Gestão Inteligente dos Animais</p>
                <p className="text-[--light-gray] font-semibold">
                    Monitore, registre e cuide da saúde e produtividade do seu rebanho com precisão.
                </p>
            </div>
            <Breadcrumb items={breadcrumb} />
            {loading ? (
                <Spinner color="default" />
            ) : (
                <Table
                    header={header}
                    data={animals}
                    dataMapping={dataMapping}
                    onClick={() => router.push('/dashboard/animals/register/undefined')}
                    editAction={(id) => router.push(`/dashboard/animals/register/${id}`)}
                    excludeAction={(id) => handleOpenModal(id as string)}
                />
            )}
            <ConfirmAction
                title="Confirmar Exclusão"
                message="Tem certeza que deseja excluir este animal? Esta ação não pode ser desfeita."
                isOpen={isModalOpen}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
        </div>
    );
}
