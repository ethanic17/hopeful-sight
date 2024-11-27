import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxiosWithToken from "../hooks/axios";
import { editAccount } from "../app/features/userSlice";

const regions = [
  { name: "West", id: 1 },
  { name: "Southwest", id: 2 },
  { name: "Midwest", id: 3 },
  { name: "Southeast", id: 4 },
  { name: "Northeast", id: 5 },
];

export function DonatorAccount({ donator }) {
  const axiosInter = useAxiosWithToken();
  const account = useSelector((state) => state.user.userInfo.account);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isActiveDonator, setIsActiveDonator] = useState(false);

  useEffect(() => {
    const fetchDonatorData = async () => {
      try {
        setLoading(true);
        const resp = await axiosInter.get(
          `/api/donators/${donator.donator_id}/`,
        );
        dispatch(editAccount({ ...account, donator: resp.data }));

        const now = new Date();
        const donations = resp.data.donations;
        const recentDonationDate = donations.length
          ? new Date(donations[0].date)
          : null;
        setIsActiveDonator(
          recentDonationDate &&
            now - recentDonationDate <= 30 * 24 * 60 * 60 * 1000,
        );
      } catch (error) {
        console.error("Failed to fetch donator data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonatorData();
  }, []);

  const getRegionName = (regionId) => {
    const region = regions.find((r) => r.id === regionId);
    return region ? region.name : "Unknown Region";
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            aria-label="Loading"
          ></div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-lg font-medium text-darkblue-800">
              <span className="font-semibold">Donation Status:</span>{" "}
              {isActiveDonator ? (
                <span className="text-green-600">Active Donator</span>
              ) : (
                <span className="text-red-600">Inactive Donator</span>
              )}
            </p>
          </div>

          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-lg font-medium text-darkblue-800">
              <span className="font-semibold">Total Donated:</span> $
              {donator.total_amount_donated}
            </p>
          </div>

          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-lg font-semibold text-darkblue-800 mb-4">
              Donation History:
            </p>
            {donator.donations.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {donator.donations
                  .map((el) => (
                    <li
                      key={el.donation_id}
                      className="py-4 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 px-2 rounded-md"
                    >
                      <div>
                        <p className="text-darkblue-800 font-semibold">
                          ${el.amount.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-700">
                          {new Date(el.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        Region: {getRegionName(el.region)}
                      </div>
                    </li>
                  ))
                  .reverse()}
              </ul>
            ) : (
              <p className="text-gray-600">No Donations Yet</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
