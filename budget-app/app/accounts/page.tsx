"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

import { title } from "@/components/primitives";
import AddAccountModal from "@/components/AddAccountModal";

type AccountData = {
  id: number;
  name: string;
  type: string;
  balance: number;
};

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleAddAccount = async (newAccount: Omit<AccountData, "id">) => {
    try {
      const response = await axios.post("/api/accounts", newAccount);

      setAccounts([...accounts, response.data]); // Update account list
      setIsModalOpen(false); // Close modal
    } catch (error) {
      console.error("Failed to add account:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className={title()}>Accounts</h1>
      </div>

      <div>
        <Button color="primary" onPress={() => setIsModalOpen(true)}>
          Add Account
        </Button>
        {/* AddAccountModal Component */}
        <AddAccountModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddAccount={handleAddAccount}
        />
      </div>

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
