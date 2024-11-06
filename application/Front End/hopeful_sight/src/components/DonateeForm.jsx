import { useState } from "react";
import { FormBody } from "./FormBody";
import { Input } from "./Input";
import { Button } from "./Button";
import useAxiosWithToken from "../hooks/axios";
import { useDispatch } from "react-redux";
import { addAccountType } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";

export function DonateeForm() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [houseHold, setHouseHold] = useState("");
  const [bankBalance, setBankBalance] = useState("");
  const [isDependent, setIsDependent] = useState(false);
  const [file, setFile] = useState(null);
  const axios = useAxiosWithToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function submitDonatorForm(e) {
    e.preventDefault(monthlyIncome, houseHold, bankBalance, isDependent);
    let resp = await axios.post("/api/donatees/", {
      has_applied_for_account: true,
      has_claimed: false,
      monthly_income: monthlyIncome,
      average_household_income: houseHold,
      current_bank_ballance: bankBalance,
      is_dependent: isDependent,
    });
    dispatch(addAccountType("donatee"));
    navigate("/account");
  }

  return (
    <FormBody>
      <div className="flex space-x-2">
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
      </div>
      <h3 className="text-4xl font-bold mb-4">Donatee Form</h3>
      <Input
        type="number"
        placeholder="Monthly Income"
        state={monthlyIncome}
        setState={setMonthlyIncome}
      />
      <Input
        type="number"
        placeholder="Household Income"
        state={houseHold}
        setState={setHouseHold}
      />
      <Input
        type="number"
        placeholder="Bank Balance Income"
        state={bankBalance}
        setState={setBankBalance}
      />

      <Input
        label="Are you a dependent?"
        className={"h-fit w-5"}
        type="radio"
        placeholder="Bank Balance Income"
        state={isDependent}
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
        setState={() => {
          setIsDependent(!isDependent);
        }}
      />
      <div>
        <p className="font-bold text-md flex justify-center pb-3">
          Upload a picture of your percription
        </p>
        <Input type="file" setState={setFile} />
      </div>
      <Button onClick={submitDonatorForm}>Submit</Button>
    </FormBody>
  );
}
