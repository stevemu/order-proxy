-- CreateTable
CREATE TABLE "ItemData" (
    "orderId" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemData_orderId_sku_key" ON "ItemData"("orderId", "sku");
