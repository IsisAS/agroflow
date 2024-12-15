"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <div>Carregando...</div>
    }

    if (!session) {
        router.push('/auth');
        return null;
    }

    return (
        <div>
            <aside className="w-64 bg-gray-800 text-white h-screen p-4">
                <h2 className="text-2xl font-bold">Menu</h2>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/dashboard/users">Usuários</a></li>
                </ul>
            </aside>
            <main className="p-4 flex-1">{children}</main>
        </div>
    );

}