/*
  Warnings:

  - You are about to drop the column `empId` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `id` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL,
    "salary" REAL NOT NULL
);
INSERT INTO "new_Employee" ("salary") SELECT "salary" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
