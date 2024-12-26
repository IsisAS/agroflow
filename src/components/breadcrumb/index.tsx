"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BreadcrumbProps = {
    items: {
        route: string;
        name: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const [currentPage, setCurrentPage] = useState("");
    const navigate = useRouter();

    const handleAction = (item: { route: string, name: string }) => {
        navigate.push(item.route)
        setCurrentPage(item.name);
    };

    return (
        <Breadcrumbs underline="active" onAction={() => handleAction}>
            {items.map((item) => (
                <BreadcrumbItem
                    onPress={() => handleAction(item)}
                    key={item.name}
                    style={{
                        color: currentPage === item.name ? 'green' : '#1e2d2a',
                    }}
                >
                    {item.name}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
}
