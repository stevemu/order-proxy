-- CreateTable
CREATE TABLE "Employee" (
    "empId" INTEGER NOT NULL,
    "salary" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_empId_key" ON "Employee"("empId");
