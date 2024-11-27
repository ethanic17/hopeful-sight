import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { DonateeAccount } from "../components/DonateeAccount";
import { DonatorAccount } from "../components/DonatorAccount";
import { Button } from "../components/Button";
import useAxiosWithToken from "../hooks/axios";
import { login } from "../app/features/userSlice";

export function Account() {
  const axiosInter = useAxiosWithToken();
  const user = useSelector((state) => state.user.userInfo);
  const { username, email, account, donator: isDonator } = user;
  const { phone_number, address, city, state, zip_code, donator, donatee } =
    account;

  const dispatch = useDispatch();
  // State for editable fields
  const [custEmail, setCustEmail] = useState(email);
  const [custPhone, setCustPhone] = useState(phone_number);
  const [custAddress, setCustAddress] = useState(address);
  const [custCity, setCustCity] = useState(city);
  const [custState, setCustState] = useState(state);
  const [custZipCode, setCustZipCode] = useState(zip_code);
  const [loading, setLoading] = useState(false);

  async function handleEditAccount() {
    let newUser = { ...user };
    try {
      setLoading(true);
      if (custEmail !== email) {
        let resp = await axiosInter.patch(`/api/users/${user.id}/`, {
          email: custEmail,
        });

        console.log("NEW:");
        console.log(resp.data);
        newUser = { ...newUser, ...resp.data };
      }

      let resp = await axiosInter.patch(
        `/api/accounts/${user.account.account_id}/`,
        {
          user: user.id,
          phone_number: custPhone,
          address: custAddress,
          city: custCity,
          state: custState,
          zip_code: custZipCode,
        },
      );
      newUser.account = { ...newUser.account, ...resp.data };
      console.log(newUser);
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(login(newUser));
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-8">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Account Overview
          </h2>
          <p className="text-base text-gray-600">
            Manage your account details and preferences.
          </p>
        </header>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Info */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">
              User Information
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Username:</span>{" "}
                <span className="font-bold ml-2 text-lg">{username}</span>
              </p>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="email"
                  className="font-medium text-sm text-gray-700"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  value={custEmail}
                  onChange={(e) => setCustEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-4">
              Account Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label
                  htmlFor="phone"
                  className="font-medium text-sm text-gray-700"
                >
                  Phone:
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={custPhone}
                  onChange={(e) => setCustPhone(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="address"
                  className="font-medium text-sm text-gray-700"
                >
                  Address:
                </label>
                <input
                  id="address"
                  type="text"
                  value={custAddress}
                  onChange={(e) => setCustAddress(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your address"
                />
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="city"
                  className="font-medium text-sm text-gray-700"
                >
                  City:
                </label>
                <input
                  id="city"
                  type="text"
                  value={custCity}
                  onChange={(e) => setCustCity(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your city"
                />
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="state"
                  className="font-medium text-sm text-gray-700"
                >
                  State:
                </label>
                <input
                  id="state"
                  type="text"
                  value={custState}
                  onChange={(e) => setCustState(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your state"
                />
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="zipCode"
                  className="font-medium text-sm text-gray-700"
                >
                  Zip Code:
                </label>
                <input
                  id="zipCode"
                  type="text"
                  value={custZipCode}
                  onChange={(e) => setCustZipCode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Enter your zip code"
                />
              </div>
            </div>
          </div>
          <div className="flex col-span-2 justify-center">
            <Button onClick={handleEditAccount}>
              {loading ? "Loading..." : "Save Details"}
            </Button>
          </div>
        </div>

        {/* Conditional Section */}
        <div className="mt-10 bg-gray-50 rounded-lg p-6 shadow-inner border-t-4 border-sky-500">
          {isDonator ? (
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Donator Details
              </h3>
              <DonatorAccount donator={donator} />
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Donatee Details
              </h3>
              <DonateeAccount donatee={donatee} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
