export function DonatorAccount({ donator }) {
  return (
    <div className="md:col-span-2 border-t border-gray-300 pt-6 h-full">
      <h3 className="text-xl font-semibold text-darkblue-600 mb-4">
        Donation Status
      </h3>
      <p className="text-black">
        <span className="font-medium">Has Donated:</span>{" "}
        {donator.has_donated ? "Yes" : "No"}
      </p>
      <p className="text-black">
        <span className="font-medium">Total Amount Donated:</span> $
        {donator.total_amount_donated}
      </p>
      <p className="text-gray-700">
        <span className="font-medium h-fit ">Donations:</span>{" "}
        {donator.donations.length > 0
          ? donator.donations.map((el) => {
              return (
                <p className="text-green-600">
                  {el.date}: ${el.amount}
                </p>
              );
            })
          : "No donations"}
      </p>
    </div>
  );
}
