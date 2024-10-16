import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

// Mock data: Adjust the dates and amounts to simulate previous, current, and future balances.
const data = [
  { date: dayjs().subtract(1, 'month').format('MMM D'), balance: 4000 }, // Previous Month
  { date: dayjs().subtract(15, 'day').format('MMM D'), balance: 4200 }, // Halfway through last month
  { date: dayjs().startOf('month').format('MMM D'), balance: 4500 }, // Start of this month
  { date: dayjs().add(7, 'day').format('MMM D'), balance: 4700 }, // Future - This Month
  { date: dayjs().add(1, 'month').format('MMM D'), balance: 4900 }, // Next Month
  { date: dayjs().add(2, 'month').format('MMM D'), balance: 5100 }, // End of Next Month
];

function AccountBalanceGraph() {
  const today = dayjs();
  
  // Determine if the point is in the future
  const isFuture = (dateString) => {
    return dayjs(dateString, 'MMM D').isAfter(today);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
          // Grey out future values
          strokeDasharray={data.map((entry) => (isFuture(entry.date) ? "5 5" : "0")).join('')}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccountBalanceGraph;
