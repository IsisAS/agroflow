"use client";
import Icon from "@/assets/[slug]/icon";
import Button from "../button";

type TableProps = {
  header?: string[];
  data?: { [key: string]: unknown }[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Table({ header = [], data = [], onClick }: TableProps) {
  return (
    <div className="w-full border border-[#E0E0E0] rounded-[10px] overflow-hidden p-[20px]">
      <div className="flex justify-end mb-4">
        <Button
          label="Cadastrar"
          backgroundColor="primary"
          size="small"
          onClick={onClick}
        />
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[--dark-gray]">
            {header.map((item, index) => (
              <th
                key={index}
                className="text-left px-4 py-2 text-[12px] font-semibold"
              >
                {item}
              </th>
            ))}
            <th className="px-4 py-2 text-left text-[12px] font-semibold">
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-[#f9fafc] even:bg-white text-gray-700"
              >
                {header.map((key, colIndex) => (
                  <td key={colIndex} className="text-left px-4 py-2">
                    {String(row[key]) || "--"}
                  </td>
                ))}
                <td className="text-left px-4 py-2 flex gap-4">
                  <button title="Excluir">
                    <Icon params={{ slug: "trash", width: 20, height: 20 }} />
                  </button>
                  <button title="Editar">
                    <Icon params={{ slug: "edit", width: 20, height: 20 }} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={header.length + 1}
                className="text-center px-4 py-2 text-gray-500"
              >
                Nenhum dado disponível.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
