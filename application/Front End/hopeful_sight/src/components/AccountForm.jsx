import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import useAxiosWithToken from "../hooks/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editAccount, setAccountType } from "../app/features/userSlice";
import {
  FaHome,
  FaPhoneAlt,
  FaCompass,
  FaGlobeAmericas,
  FaMapPin,
} from "react-icons/fa";

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
      dispatch(setAccountType(accountType));
      if (accountType === "donatee") {
        setStep((state) => state + 1);
      } else {
        navigate("/donate/form");
      }
    }

    setLoading(false);
  }

  return (
    <FormBody>
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-sky-700">
          Some More Information for the {accountType}
        </h3>
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="h-4 w-4 rounded-full bg-sky-500"></div>
          <div className="h-4 w-4 rounded-full bg-sky-500"></div>
          {accountType === "donatee" && (
            <div className="h-4 w-4 rounded-full bg-sky-800"></div>
          )}
        </div>
        <div className="w-full max-w-lg mx-auto space-y-5">
          <Input
            title="Phone Number"
            label="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder="Enter your phone number"
            type="text"
            icon={FaPhoneAlt}
          />
          <Input
            title="Address"
            label="Address"
            value={address}
            setValue={setAddress}
            placeholder="Enter your address"
            type="text"
            icon={FaHome}
          />
          <Input
            title="City"
            label="City"
            value={city}
            setValue={setCity}
            placeholder="Enter your city"
            type="text"
            icon={FaCompass}
          />
          <Input
            title="State"
            label="State"
            value={state}
            setValue={setState}
            placeholder="Enter your state"
            type="text"
            icon={FaGlobeAmericas}
          />
          <Input
            title="Zip Code"
            label="Zip Code"
            value={zipCode}
            setValue={setZipCode}
            placeholder="Enter your zip code"
            type="text"
            icon={FaMapPin}
          />
        </div>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <Button
            className="bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            onClick={submitForm}
          >
            {loading
              ? "Loading..."
              : accountType == "donatee"
                ? "Next"
                : "Submit"}
          </Button>
          <p
            className="text-sky-600 underline cursor-pointer hover:text-sky-800 transition self-start"
            onClick={(e) => {
              e.preventDefault();
              setStep((state) => state - 1);
            }}
          >
            Back
          </p>
        </div>
      </div>
    </FormBody>
  );
}
