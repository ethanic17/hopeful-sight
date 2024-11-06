import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDonationAmount } from "../app/features/userSlice";

import { Button } from "./Button";
import { FormBody } from "./FormBody";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import Confirmation from "../pages/Confirmation";

export function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("");
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDonation = (e) => {
    e.preventDefault();
    dispatch(addDonationAmount(donationAmount));
    setStep(1);
  };

  switch (step) {
    case 0:
      return (
        <FormBody>
          <h3 className="text-center mb-4 text-lg font-semibold">
            Enter an amount to donate
          </h3>
          <Input
            type="number"
            placeholder="Enter donation amount"
            state={donationAmount}
            setState={setDonationAmount}
          />
          <Button onClick={handleDonation}>Donate</Button>
        </FormBody>
      );
    case 1:
      return <Confirmation />;
  }
}
