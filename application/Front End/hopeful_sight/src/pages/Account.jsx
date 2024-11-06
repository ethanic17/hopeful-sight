import { testAccount as account } from "../test_data/testAccount";
import { useSelector } from "react-redux";

export function Account() {
  const amountDonated = useSelector(
    (state) => state.user.userInfo.amountDonated,
  );
  return (
    <p>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Account Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="account_id"
            >
              Account ID
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="account_id"
              value={account.account_id}
              readOnly
            />
          </div>
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
        </div>
      </div>
    </p>
  );
}
