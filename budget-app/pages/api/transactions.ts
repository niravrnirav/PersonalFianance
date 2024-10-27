import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

type TransactionData = {
  id: number;
  accountId: number;
  type: string; // e.g., "deposit" or "withdrawal"
  amount: Decimal;
  date: Date | null;
  description?: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const transactions: TransactionData[] =
          await prisma.transaction.findMany();

        res.status(200).json(transactions);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch transactions" });
      }
      break;

    case "POST":
      const { accountId, type, amount, date, description } = req.body;

      try {
        const transaction = await prisma.transaction.create({
          data: { accountId, type, amount, date: new Date(date), description },
        });

        res.status(201).json(transaction);
      } catch (error) {
        res.status(500).json({ error: "Failed to create transaction" });
      }
      break;

    case "PUT":
      const { id, updatedData } = req.body;

      try {
        const updatedTransaction = await prisma.transaction.update({
          where: { id },
          data: updatedData,
        });

        res.status(200).json(updatedTransaction);
      } catch (error) {
        res.status(500).json({ error: "Failed to update transaction" });
      }
      break;

    case "DELETE":
      const { deleteId } = req.body;

      try {
        await prisma.transaction.delete({ where: { id: deleteId } });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Failed to delete transaction" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
