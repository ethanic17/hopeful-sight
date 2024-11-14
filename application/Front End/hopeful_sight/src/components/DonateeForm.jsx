import { useState } from "react";
import { FormBody } from "./FormBody";
import { Input } from "./Input";
import { Button } from "./Button";
import useAxiosWithToken from "../hooks/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { editAccount } from "../app/features/userSlice";

export function DonateeForm() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [houseHold, setHouseHold] = useState("");
  const [bankBalance, setBankBalance] = useState("");
  const [isDependent, setIsDependent] = useState(false);
  const diapatch = useDispatch();
  const [file, setFile] = useState(null);

  let account = useSelector((state) => {
    return state.user.userInfo.account;
  });

  const axios = useAxiosWithToken();
  const navigate = useNavigate();

  async function submitDonatorForm(e) {
    try {
      e.preventDefault(monthlyIncome, houseHold, bankBalance, isDependent);
      let resp = await axios.patch(
        `/api/donatees/${account.donatee.donatee_id}/`,
        {
          has_applied_for_account: true,
          has_claimed: false,
          monthly_income: monthlyIncome,
          average_household_income: houseHold,
          current_bank_ballance: bankBalance,
          is_dependent: isDependent,
          account: account.account_id,
        },
      );
      const newAcc = { ...account };
      newAcc.donatee = resp.data;
      console.log(newAcc);
      diapatch(editAccount(newAcc));
      navigate("/account");
    } catch (e) {
      console.log(e);
    }
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
