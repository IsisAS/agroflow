import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  try {
    const animal = await prisma.animal.findUnique({
      where: {
        id,
      },
    });

    if (!animal) {
      return NextResponse.json(
        { message: "Animal não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: animal }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar animal:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  try {
    const body = await req.json();
    const updatedAnimal = await prisma.animal.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(
      { message: "Animal atualizado com sucesso!", animal: updatedAnimal },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar animal:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  try {
    await prisma.animal.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Animal deletado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao deletar animal:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
