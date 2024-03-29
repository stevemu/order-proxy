-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductData" (
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_ProductData" ("name", "price", "sku") SELECT "name", "price", "sku" FROM "ProductData";
DROP TABLE "ProductData";
ALTER TABLE "new_ProductData" RENAME TO "ProductData";
CREATE UNIQUE INDEX "ProductData_sku_key" ON "ProductData"("sku");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
