/* eslint-disable react/jsx-sort-props */
"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { AccountType } from "@/types/AccountTypes";

type AccountData = {
  name: string;
  type: AccountType;
  balance: number;
};

type AddAccountModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddAccount: (newAccount: AccountData) => void;
};

export default function AddAccountModal({
  isOpen,
  onClose,
  onAddAccount,
}: AddAccountModalProps) {
  const [newAccount, setNewAccount] = useState<AccountData>({
    name: "",
    type: AccountType.Savings,
    balance: 0,
  });

  const handleInputChange = (
    field: keyof AccountData,
    value: string | number,
  ) => {
    setNewAccount((prev) => ({ ...prev, [field]: value }));
    console.log(value);
  };

  const handleSubmit = () => {
    onAddAccount(newAccount); // Pass the new account to parent component
    setNewAccount({ name: "", type: AccountType.Savings, balance: 0 }); // Reset the form fields
    onClose(); // Close the modal
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      placement="top-center"
      onOpenChange={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Add Account</ModalHeader>
        <ModalBody>
          <Input
            isClearable
            variant="bordered"
            fullWidth
            isRequired
            label="Account Name"
            placeholder="Enter account name"
            value={newAccount.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Select
            variant="bordered"
            fullWidth
            isRequired
            label="Account Type"
            placeholder="Select account type"
            value={newAccount.type}
            onChange={(e) =>
              handleInputChange("type", e.target.value as AccountType)
            }
          >
            {Object.values(AccountType).map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>
          <Input
            isClearable
            variant="bordered"
            fullWidth
            isRequired
            label="Balance"
            placeholder="Enter current account balance"
            type="number"
            value={newAccount.balance.toString()}
            onChange={(e) =>
              handleInputChange("balance", Number(e.target.value))
            }
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            Add Account
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
