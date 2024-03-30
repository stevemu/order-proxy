-- CreateTable
CREATE TABLE "OrderData" (
    "id" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderData_id_key" ON "OrderData"("id");
