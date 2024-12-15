"use client"
import { iconsList } from "@/assets/[slug]";
import Icon from "@/assets/[slug]/icon";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");

    const menu: { name: string, link: string, icon: keyof typeof iconsList, darkIcon: keyof typeof iconsList }[] = [
        { name: 'Dashboard', link: '/dashboard', icon: 'layout', darkIcon: 'layoutCinza' },
        { name: 'Animais', link: '/dashboard/animals  ', icon: 'gado', darkIcon: 'gadoCinza' },
        { name: 'Estoque', link: '/dashboard/users', icon: 'celeiro', darkIcon: 'celeiroCinza' },
    ]

    if (status === 'loading') {
        return <div>Carregando...</div>
    }

    if (!session) {
        router.push('/auth');
        return null;
    }

    const navigateMenu = (menu: { name: string, link: string, icon: keyof typeof iconsList }) => {
        router.push(menu.link);
        setSelectedMenu(menu.name);
    }

    return (
        <div className="flex">
            <aside className="w-[250px] text-white h-screen border-r-2 border-solid flex flex-col items-center pt-[30px] gap-[40px]">
                <Image src="/logo-escura.png" alt="logo" width={150} height={150} />

                <div>
                    {menu.map((item, index) => (
                        <div key={index} className="w-full h-[50px]">
                            <div
                                onClick={() => navigateMenu(item)}
                                className={`${selectedMenu === item.name ? 'bg-[--primary-color]' : 'bg-transparent'} flex items-center justify-start gap-[10px] rounded-[10px] h-[35px] w-[150px] pl-[20px] cursor-pointer`}>
                                <Icon params={{ slug: selectedMenu === item.name ? item.icon : item.darkIcon, width: 22, height: 22 }} />
                                <p className={`${selectedMenu === item.name ? 'text-[--text-white]' :  'text-[--text-color]'}`}>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
            <div className="flex-1">
                <div className="border-b-2 w-full h-[100px] flex justify-end items-center pr-[30px]">
                    <div className="bg-[--border-color] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                        <p className="text-[--text-color] text-[25px]">IS</p>
                    </div>
                </div>
                <main className="p-4 flex-1">{children}</main>
            </div>
        </div>
    );

}