import { useEffect } from "react";
import useAxiosWithToken from "../hooks/axios";

export function DonateeAccount({ donatee }) {
  return (
    <div className="md:col-span-2 border-t border-gray-300 pt-6">
      <h3 className="text-xl font-semibold text-darkblue-600 mb-4">
        Donatee Status
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-black">
          <span className="font-medium">Applied for Account:</span>{" "}
          {donatee.has_applied_for_account ? "Yes" : "No"}
        </p>
        <p className="text-black">
          <span className="font-medium">Claimed:</span>{" "}
          {donatee.has_claimed ? "Yes" : "No"}
        </p>
        <p className="text-black">
          <span className="font-medium">Monthly Income:</span> $
          {donatee.monthly_income}
        </p>
        <p className="text-black">
          <span className="font-medium">Avg Household Income:</span> $
          {donatee.average_household_income}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Current Bank Balance:</span>{" "}
          {donatee.current_bank_balance
            ? `$${donatee.current_bank_balance}`
            : "N/A"}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Dependent:</span>{" "}
          {donatee.is_dependent ? "Yes" : "No"}
        </p>
        <p className="text-gray-700 col-span-2">
          <span className="font-medium">Prescription:</span>{" "}
          {donatee.prescription || "N/A"}
        </p>
      </div>
    </div>
  );
}
