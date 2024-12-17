/*
  Warnings:

  - You are about to drop the column `especie` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `finalidade` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `identificacao` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `localizacao` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `observacoes` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `raca` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `responsavel` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `age` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identification` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specifically` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identification" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "specifically" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Animal" ("createdAt", "id") SELECT "createdAt", "id" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
