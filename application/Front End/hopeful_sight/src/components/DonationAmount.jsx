import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaDollarSign } from "react-icons/fa";
import { Button } from "./Button";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import useAxiosWithToken from "../hooks/axios";

const regions = [
  { name: "West", id: 1 },
  { name: "Southwest", id: 2 },
  { name: "Midwest", id: 3 },
  { name: "Southeast", id: 4 },
  { name: "Northeast", id: 5 },
];
const regionObj = {
  West: 1,
  Southwest: 2,
  Midwest: 3,
  Southeast: 4,
  Northeast: 5,
};

export function DonationAmount({ setStep }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selection, setSelection] = useState(0);

  const axiosInter = useAxiosWithToken();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  const handleDonation = async (e) => {
    e.preventDefault();

    if (donationAmount <= 0 || isNaN(donationAmount)) {
      setErrorMessage("Please enter a valid donation amount.");
      return;
    }

    if (!user || !user.account || !user.account.donator) {
      setErrorMessage("You must be logged in to donate.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      let resp = await axiosInter.post("/api/donation/", {
        amount: donationAmount,
        date: new Date().toISOString().substring(0, 10),
        region: regionObj[selectedRegion] || 1,
        donator: user.account.donator.donator_id,
      });
      console.log(resp);
      setStep((state) => state + 1);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h3 className="text-center mb-4 text-3xl font-light text-gray-800">
        Support The Cause. Donate Now. 🌟
      </h3>

      <div className="my-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Quick Donation Amounts
        </h4>
        <div className="flex justify-between space-x-4 text-sky-500 text-center ">
          <div
            className={`${selection == 1 && "bg-sky-500 text-white"} cursor-pointer p-4 w-full border-2 border-sky-500 rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-600 hover:text-white`}
            onClick={() => {
              setSelection(1);
              setDonationAmount(10);
            }}
          >
            $10
          </div>
          <div
            className={`${selection == 2 && "bg-sky-500 text-white"} cursor-pointer p-4 w-full border-2 border-sky-500 rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-600 hover:text-white`}
            onClick={() => {
              setSelection(2);
              setDonationAmount(20);
            }}
          >
            $20
          </div>
          <div
            className={`${selection == 3 && "bg-sky-500 text-white"} cursor-pointer p-4 w-full border-2 border-sky-500 rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-600 hover:text-white`}
            onClick={() => {
              setSelection(3);
              setDonationAmount(50);
            }}
          >
            $50
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6 items-center">
        <div className="w-full">
          <Input
            label="Donation Amount"
            type="number"
            value={donationAmount}
            setValue={(val) => {
              setSelection(0);
              setDonationAmount(val);
            }}
            required
            icon={FaDollarSign}
            className="text-lg"
          />
        </div>
        <div className="w-full">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option value="" disabled>
              Select Region
            </option>
            {regions.map((el) => (
              <option key={el.name} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}
      <div className="flex justify-end">
        <Button
          onClick={handleDonation}
          disabled={isLoading}
          className={`w-full mt-4 ${isLoading ? "bg-gray-400" : "bg-blue-500"} text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300`}
        >
          {isLoading ? "Processing..." : "Donate"}
        </Button>
      </div>
    </div>
  );
}
