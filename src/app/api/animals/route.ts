import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      identificacao,
      especie,
      raca,
      sexo,
      idade,
      peso,
      finalidade,
      localizacao,
      responsavel,
      observacoes,
    } = body;

    if (
      !identificacao ||
      !especie ||
      !raca ||
      !sexo ||
      idade === undefined ||
      peso === undefined ||
      !finalidade ||
      !localizacao ||
      !responsavel
    ) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    const newAnimal = await prisma.animal.create({
      data: {
        identificacao,
        especie,
        raca,
        sexo,
        idade: Number(idade),
        peso: Number(peso),
        finalidade,
        localizacao,
        responsavel,
        observacoes,
      },
    });

    return NextResponse.json(
      { message: "Animal cadastrado com sucesso!", animal: newAnimal },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao cadastrar animal:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
