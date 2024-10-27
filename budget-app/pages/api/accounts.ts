import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

// Define the response data type for better type safety
type AccountData = {
  id: number;
  name: string;
  type: string;
  balance: Decimal;
  createdAt: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const accounts: AccountData[] = await prisma.account.findMany();

        res.status(200).json(accounts);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch accounts" });
      }
      break;

    case "POST":
      const { name, type, balance } = req.body;

      try {
        console.log("type: " + type);
        const account = await prisma.account.create({
          data: { name, type, balance },
        });

        res.status(201).json(account);
      } catch (error) {
        res.status(500).json({ error: "Failed to create account" });
      }
      break;

    case "PUT":
      const { id, updatedData } = req.body;

      try {
        const updatedAccount = await prisma.account.update({
          where: { id },
          data: updatedData,
        });

        res.status(200).json(updatedAccount);
      } catch (error) {
        res.status(500).json({ error: "Failed to update account" });
      }
      break;

    case "DELETE":
      const { deleteId } = req.body;

      try {
        await prisma.account.delete({ where: { id: deleteId } });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Failed to delete account" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
