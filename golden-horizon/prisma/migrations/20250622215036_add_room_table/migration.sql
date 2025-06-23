-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "beds" INTEGER NOT NULL,
    "breakfast" BOOLEAN NOT NULL DEFAULT false,
    "netflix" BOOLEAN NOT NULL DEFAULT false,
    "internet" BOOLEAN NOT NULL DEFAULT false,
    "suite" BOOLEAN NOT NULL DEFAULT false,
    "pet_friendly" BOOLEAN NOT NULL DEFAULT false,
    "price" REAL NOT NULL,
    "promo_price" REAL,
    "reserved" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
