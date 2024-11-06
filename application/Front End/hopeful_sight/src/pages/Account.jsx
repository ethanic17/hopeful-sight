import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { logout } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";

export function Account() {
  let amountDonated = useSelector((state) => state.user.userInfo.amountDonated);
  let account = useSelector((state) => state.user.userInfo.accountInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  account = !account.city
    ? JSON.parse(localStorage.getItem("account_info"))
    : account;

  amountDonated =
    amountDonated == 0
      ? localStorage.getItem("total_donations")
      : amountDonated;

  return (
    <p>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Account Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4"></div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="phone_number"
              value={account.phone_number}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="address"
              value={account.address}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="city"
              value={account.city}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="state"
              value={account.state}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="zip_code"
            >
              Zip Code
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="zip_code"
              value={account.zip_code}
              readOnly
            />
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="amount_donated"
              >
                Amount Donated
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="amount_donated"
                value={amountDonated}
                readOnly
              />
            </div>
          </div>
          <Button
            onClick={() => {
              dispatch(logout());
              navigate("/about");
            }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </p>
  );
}
