"use client"
import Input from "@/components/input";
import { Select, SelectItem } from "@nextui-org/select";
import useRegister from "./useRegister";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";

export default function Register() {
    const { handleInputChange, formData, breadcrumb, species, isLoading, onSubmit, handleSubmit } = useRegister();

    return (
        <form className="flex flex-col gap-[20px] w-full">
            <Breadcrumb items={breadcrumb} />
            <p className="text-[20px] text-black font-semibold">Cadastro de Animais</p>

            <div className="flex flex-col lg:flex-row gap-[10px]">
                <div className="border rounded-[20px] m-h-[300px] w-[100%] lg:w-[60%] p-[20px] flex flex-col gap-[20px]">
                    <p className="text-gray-700">INFORMAÇÕES DO ANIMAL</p>
                    <Input
                        placeholder={"Digite a identificação"}
                        label={"Nome"}
                        size="extraLarge"
                        enableLabel={true}
                        inputType={"text"}
                        value={formData.name}
                        onChange={(e) => handleInputChange("identification", e.target.value)}
                    />

                    <div className="flex flex-col gap-[5px]">
                        <label className="text-black">Espécie</label>
                        <Select className="w-full outline-none" label="Selecione a espécie" variant="bordered">
                            {species.map((specie) => (
                                <SelectItem
                                    key={specie.key}
                                    onPress={() => handleInputChange("species", specie.key)}
                                    className="text-black">
                                    {specie.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    <Input
                        placeholder="Raça"
                        label="Raça"
                        size="extraLarge"
                        enableLabel={true}
                        inputType="text"
                        value={formData.breed || ""}
                        onChange={(e) => handleInputChange("breed", e.target.value)}
                    />
                </div>

                <div className="border rounded-[20px] m-h-[300px] w-[100%] lg:w-[40%] p-[20px] flex flex-col gap-[20px]">
                    <p className="text-black">INFORMAÇÕES COMPLEMENTARES</p>
                    <div className="flex flex-col gap-[5px]">
                        <label className="text-black">Gênero</label>
                        <Select
                            className="w-full outline-none"
                            label="Selecione o gênero"
                            variant="bordered"
                            value={formData.gender}
                            onChange={(e) => handleInputChange("gender", e.target.value)}
                        >
                            <SelectItem value="M" className="text-black">Macho</SelectItem>
                            <SelectItem value="F" className="text-black">Fêmea</SelectItem>
                        </Select>

                        <Input
                            placeholder="Idade"
                            label="Idade"
                            size="extraLarge"
                            enableLabel={true}
                            inputType="text"
                            value={formData.age || ""}
                            onChange={(e) => handleInputChange("age", e.target.value)}
                        />

                        <Input
                            placeholder="Peso"
                            label="Peso"
                            size="extraLarge"
                            enableLabel={true}
                            inputType="text"
                            value={formData.weight || ""}
                            onChange={(e) => handleInputChange("weight", e.target.value)}
                        />

                        <Input
                            placeholder="Localização"
                            label="Localização"
                            size="extraLarge"
                            enableLabel={true}
                            inputType="text"
                            value={formData.location || ""}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <Button label="Salvar"
                backgroundColor="primary"
                size="medium"
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
            />
        </form>
    )
}