import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "./Button";
import { FormBody } from "./FormBody";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import useAxiosWithToken from "../hooks/axios";

export function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("");
  const axiosInter = useAxiosWithToken();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user.userInfo;
  });
  console.log(user);
  const navigate = useNavigate();

  const handleDonation = async (e) => {
    e.preventDefault();
    await axiosInter.post("/api/donation/", {
      amount: donationAmount,
      date: new Date().toISOString().substring(0, 10),
      region: 1,
      donator: user.account.donator.donator_id,
    });
    navigate("/");
  };

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
}
