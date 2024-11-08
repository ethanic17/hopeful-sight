import { useSelector } from "react-redux";
import { DonateeAccount } from "../components/DonateeAccount";
import { DonatorAccount } from "../components/DonatorAccount";

export function Account() {
  const user = useSelector((state) => state.user.userInfo);
  const { username, email, account, donator: isDonator } = user;
  const { phone_number, address, city, state, zip_code, donator, donatee } =
    account;
  console.log(user);
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-6 h-full">
      <h2 className="text-3xl font-bold text-darkblue-700 mb-6 text-center">
        User Account Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Info */}
        <div>
          <h3 className="text-xl font-semibold text-darkblue-600 mb-4">
            User Details
          </h3>
          <p className="text-lg text-black">
            <span className="font-medium">Username:</span> {username}
          </p>
          <p className="text-lg text-black">
            <span className="font-medium">Email:</span> {email}
          </p>
        </div>

        {/* Account Info */}
        <div>
          <h3 className="text-xl font-semibold text-darkblue-600 mb-4">
            Account Details
          </h3>
          <p className="text-black">
            <span className="font-medium">Phone:</span> {phone_number}
          </p>
          <p className="text-black">
            <span className="font-medium">Address:</span> {address}, {city},{" "}
            {state}, {zip_code}
          </p>
        </div>
        {isDonator ? (
          <DonatorAccount donator={donator} />
        ) : (
          <DonateeAccount donatee={donatee} />
        )}
      </div>
    </div>
  );
}
