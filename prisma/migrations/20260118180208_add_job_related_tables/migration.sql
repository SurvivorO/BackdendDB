/*
  Warnings:

  - Added the required column `created` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPremiumUser` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('ResumeBuilding', 'CarRental', 'AISummary');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('Queued', 'Processing', 'Completed');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Successfull', 'Failed');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isPremiumUser" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "type" "JobType" NOT NULL,
    "status" "JobStatus" NOT NULL,
    "input" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobResult" (
    "id" SERIAL NOT NULL,
    "result" JSONB NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "JobId" INTEGER NOT NULL,

    CONSTRAINT "JobResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "razorpayId" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "SentAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobResult_JobId_key" ON "JobResult"("JobId");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobResult" ADD CONSTRAINT "JobResult_JobId_fkey" FOREIGN KEY ("JobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
