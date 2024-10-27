import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RecurringTransactionData = {
  id: number;
  accountId: number;
  frequency: string;
  amount: number;      // Keep this as a number after conversion
  startDate: Date;
  endDate?: Date | null;
  description?: string | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const recurringTransactions = await prisma.recurringTransaction.findMany();
        const formattedRecurringTransactions: RecurringTransactionData[] = recurringTransactions.map(transaction => ({
          ...transaction,
          amount: transaction.amount.toNumber(),  // Convert Decimal to number
        }));
        res.status(200).json(formattedRecurringTransactions);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recurring transactions' });
      }
      break;

    case 'POST':
      const { accountId, frequency, amount, startDate, endDate, description } = req.body;
      try {
        const recurringTransaction = await prisma.recurringTransaction.create({
          data: {
            accountId,
            frequency,
            amount,
            startDate: new Date(startDate),
            endDate: endDate ? new Date(endDate) : null,
            description,
          },
        });
        res.status(201).json(recurringTransaction);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create recurring transaction' });
      }
      break;

    case 'PUT':
      const { id, updatedData } = req.body;
      try {
        const updatedRecurringTransaction = await prisma.recurringTransaction.update({
          where: { id },
          data: updatedData,
        });
        res.status(200).json(updatedRecurringTransaction);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update recurring transaction' });
      }
      break;

    case 'DELETE':
      const { deleteId } = req.body;
      try {
        await prisma.recurringTransaction.delete({ where: { id: deleteId } });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete recurring transaction' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
