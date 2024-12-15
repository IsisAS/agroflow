import Image from "next/image";
import { iconsList } from ".";

export default function Icon({ params }: { params: { slug: keyof typeof iconsList, width: number, height: number } }) {
    return (
        <Image
            src={iconsList[params.slug]}
            width={params.width}
            height={params.height}
            alt={params.slug as unknown as string}
        />
    )
}