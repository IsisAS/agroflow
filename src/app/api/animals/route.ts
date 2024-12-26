import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { identification, species, breed, gender, age, weight, location } =
      body;

    if (
      !identification ||
      !species ||
      !breed ||
      !gender ||
      age === undefined ||
      weight === undefined ||
      !location
    ) {
      return NextResponse.json(
        { message: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    const newAnimal = await prisma.animal.create({
      data: {
        identification,
        species,
        breed,
        gender,
        age,
        weight,
        location,
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

export async function GET() {
  try {
    const data = await prisma.animal.findMany();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Erro ao buscar animais:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}