"use client";

import Image from "next/image";
import { useAuth } from "./useAuth";
import Input from "@/components/input";
import Button from "@/components/button";


export default function LoginPage() {
    const { handleSubmit, setEmail, setPassword, email, password } = useAuth()

    return (
        <div className="flex h-screen">
            <div className="hidden lg:flex bg-bannerImage bg-repeat bg-cover bg-bottom w-[60%] h-screen pl-[100px] pt-[50px] pb-[50px] flex-col">

                <Image src="/logo.png" alt="logo" width={150} height={150} />
                <div className="mt-auto text-5xl w-[90%]">
                    <p>Transforme dados em decisões com gestão inteligente de recursos agrículas.</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-[30px] h-full items-center w-full">

                <div className="w-[80%]">
                    <div>
                        <p className="text-[30px] sm:text-[40px] text-[--text-color] leading-4">Bem-vindo ao</p>
                        <p className="text-[30px] sm:text-[40px] text-[--primary-color] font-bold">AgroFlow</p>
                    </div>
                    <p className="text-[--text-color] text-[18px]">Gerencie seus recursos agrícolas com eficiência.</p>
                </div>

                <form className="flex flex-col items-center justify-center w-full gap-[50px]">
                    <div className="w-full flex flex-col items-center gap-[10px] sm:gap-[20px]">
                        <Input
                            label="Email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            size="large"
                            enableLabel={true}
                            inputType="text"
                        />

                        <Input
                            label="Senha"
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            size="large"
                            enableLabel={true}
                            inputType="password"
                        />
                    </div>
                    <Button
                        onClick={() => handleSubmit}
                        backgroundColor="primary"
                        label="Entrar"
                        size="large"
                    />
                </form>
            </div>
        </div>
    );
}
