import { useState } from "react";
import { Input } from "./Input";
import { RiBankCardLine, RiMailLine, RiUserLine } from "react-icons/ri";
import { Button } from "./Button";

export function PaymentForm({ setStep }) {
  const [cardName, setCardName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setCardNumber] = useState("");
  return (
    <>
      <div className="w-2/3">
        <h1 className="text-center mb-4 text-2xl font-light">
          Support Hopeful Sight by Donating
        </h1>

        <Input
          title="Name on card"
          label="Name on card"
          value={cardName}
          setValue={setCardName}
          required
          icon={RiUserLine}
        />
        <Input
          title="Email"
          label="Email"
          value={email}
          setValue={setEmail}
          required
          icon={RiMailLine}
        />
        <Input
          title="Card Number"
          label="Card Number"
          value={number}
          setValue={setCardNumber}
          required
          icon={RiBankCardLine}
        />
        <div className="flex justify-end w-full">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setStep((step) => step + 1);
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
