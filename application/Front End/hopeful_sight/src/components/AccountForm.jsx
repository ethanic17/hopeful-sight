import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import useAxiosWithToken from "../hooks/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editAccount } from "../app/features/userSlice";

export function AccountForm({ accountType, setStep, userID }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosInter = useAxiosWithToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountId = useSelector((state) => {
    return state.user.userInfo.account.account_id;
  });
  const user = useSelector((state) => {
    return state.user.userInfo.userId;
  });
  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    let resp = await axiosInter.patch(`/api/accounts/${accountId}/`, {
      phone_number: phoneNumber,
      address: address,
      city: city,
      state: state,
      zip_code: zipCode,
      user: user,
    });
    if (resp.status === 200) {
      console.log(resp.data);
      dispatch(editAccount(resp.data));
      if (accountType === "donatee") {
        setStep((state) => state + 1);
      } else {
        // await createDonator(resp.data.account_id);
        navigate("/account");
      }
    }

    setLoading(false);
  }

  // async function createDonator(id) {
  //   try {
  //     let resp = await axiosInter.patch("/api/donators/{donator_id}/", {
  //       has_donated: false,
  //       total_amount_donated: 0,
  //       account: id,
  //     });
  //     console.log(resp);
  //     dispatch(addAccountTypeID(resp.donator_id));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <FormBody>
      <div className="flex space-x-2">
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
        <div className="h-4 w-4 rounded-full bg-blue-800"></div>
        {accountType == "donatee" && (
          <div className="h-4 w-4 rounded-full bg-gray-800"></div>
        )}
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <Input
          state={phoneNumber}
          setState={setPhoneNumber}
          placeholder="Phone Number"
          type="text"
        />

        <Input
          state={address}
          setState={setAddress}
          placeholder="Address"
          type="text"
        />

        <Input state={city} setState={setCity} placeholder="City" type="text" />

        <Input
          state={state}
          setState={setState}
          placeholder="State"
          type="text"
        />

        <Input
          state={zipCode}
          setState={setZipCode}
          placeholder="Zip Code"
          type="text"
        />
      </div>

      <Button onClick={submitForm}>{loading ? "Loading..." : "Submit"}</Button>
      <p
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          setStep((state) => state - 1);
        }}
      >
        Back
      </p>
    </FormBody>
  );
}
