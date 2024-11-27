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
  const [loading, setLoading] = useState(false);

  let account = useSelector((state) => {
    return state.user.userInfo.account;
  });

  const axios = useAxiosWithToken();
  const navigate = useNavigate();

  async function submitDonatorForm(e) {
    try {
      setLoading(true);
      e.preventDefault();
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormBody>
      <div className="flex justify-center items-center space-x-2">
        <div className="h-4 w-4 rounded-full bg-sky-500"></div>
        <div className="h-4 w-4 rounded-full bg-sky-500"></div>
        <div className="h-4 w-4 rounded-full bg-sky-500"></div>
      </div>
      <h3 className="text-4xl font-bold mb-4">Donatee Form</h3>
      <div className="w-2/3">
        <Input
          label="Monthly Income"
          title="Monthly Income"
          type="number"
          placeholder="Monthly Income"
          value={monthlyIncome}
          setValue={setMonthlyIncome}
          required
        />
        <Input
          type="number"
          label="Household Income"
          title="Household Income"
          placeholder="Household Income"
          value={houseHold}
          setValue={setHouseHold}
          required
        />
        <Input
          type="number"
          label="Current Bank Balance"
          title="Current Bank Balance"
          placeholder="Current Balance Income"
          value={bankBalance}
          setValue={setBankBalance}
          required
        />

        <div className="flex flex-col space-y-4 mb-4">
          <label className="text-lg font-medium">Are you a dependent?</label>
          <div className="flex space-x-6 w-full">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isDependent"
                value="true"
                checked={isDependent === true}
                onChange={() => setIsDependent(true)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm font-medium">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isDependent"
                value="false"
                checked={isDependent === false}
                onChange={() => setIsDependent(false)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm font-medium">No</span>
            </label>
          </div>
        </div>

        <div>
          <p className="font-bold text-md flex justify-center pb-3">
            Upload a picture of your percription
          </p>
          <input type="file" onChange={setFile} />
        </div>
      </div>
      <Button onClick={submitDonatorForm}>
        {loading ? "Loading..." : "Submit"}
      </Button>
    </FormBody>
  );
}
