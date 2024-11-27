export function DonateeAccount({ donatee }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            Applied for Account
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {donatee.has_applied_for_account ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Claimed</span>
          <span className="text-lg font-semibold text-gray-800">
            {donatee.has_claimed ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            Monthly Income
          </span>
          <span className="text-lg font-semibold text-gray-800">
            ${donatee.monthly_income || "N/A"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            Avg Household Income
          </span>
          <span className="text-lg font-semibold text-gray-800">
            ${donatee.average_household_income || "N/A"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            Current Bank Balance
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {donatee.current_bank_balance
              ? `$${donatee.current_bank_balance}`
              : "N/A"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">Dependent</span>
          <span className="text-lg font-semibold text-gray-800">
            {donatee.is_dependent ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex flex-col sm:col-span-2 lg:col-span-3">
          <span className="text-sm font-medium text-gray-500">
            Prescription
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {donatee.prescription || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
