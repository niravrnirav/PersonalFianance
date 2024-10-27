"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { title } from "@/components/primitives";

type AccountData = {
  id: number;
  name: string;
  type: string;
  balance: number;
};

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get("/api/accounts");

      setAccounts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className={title()}>Accounts</h1>
      {loading ? (
        <p>Loading accounts...</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              {account.name} - ${account.balance} ({account.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
