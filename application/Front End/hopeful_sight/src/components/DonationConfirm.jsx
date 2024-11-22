import { FaCheckCircle } from "react-icons/fa";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { FaMap } from "react-icons/fa6";

export function DonationConfirm() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-4 text-center">
      <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
      <p className="text-gray-600 mb-4">
        Your donation has been received successfully.
      </p>
      <Button
        onClick={() => navigate("/account")}
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Continue to Account
      </Button>
    </div>
  );
}
