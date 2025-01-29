-- CreateTable
CREATE TABLE "UserSellorSecrets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "provider" TEXT NOT NULL,
    "clientId" TEXT,
    "clientSecret" TEXT,
    "refreshToken" TEXT,

    CONSTRAINT "UserSellorSecrets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSellorSecrets" ADD CONSTRAINT "UserSellorSecrets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
