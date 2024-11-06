import { AccountForm } from "./AccountForm";
import { Button } from "./Button";
import { FormBody } from "./FormBody";
import { DonateeForm } from "./DonateeForm";
import { useState } from "react";

export function AccountTypeForm() {
  const [accountType, setAccountType] = useState("none");
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return (
        <FormBody>
          <h3 className="text-2xl font-bold mb-4">Select Account Type:</h3>
          <div className="flex justify-around flex-row gap-x-5">
            <Button
              onClick={(e) => {
                setAccountType("donator");
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              As Donator
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setStep(step + 1);
                setAccountType("donatee");
              }}
            >
              As Donatee
            </Button>
          </div>
        </FormBody>
      );
    case 1:
      return (
        <AccountForm
          back={setStep}
          setStep={setStep}
          accountType={accountType}
        />
      );
    case 2:
      return <DonateeForm />;
  }
}
