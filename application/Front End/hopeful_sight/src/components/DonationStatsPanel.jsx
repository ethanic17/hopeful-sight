import { useEffect, useState } from "react";
import useAxiosWithToken from "../hooks/axios";
import { DonationBarChart } from "./DonationBarchart";

const donations = [
  { donation_id: 1, amount: 100, date: "2024-11-08", region: 1, donator: 5 },
  { donation_id: 2, amount: 1000, date: "2024-11-08", region: 1, donator: 5 },
  { donation_id: 3, amount: 20, date: "2024-11-22", region: 1, donator: 1 },
  { donation_id: 4, amount: 10, date: "2024-11-22", region: 1, donator: 1 },
  { donation_id: 5, amount: 50, date: "2024-11-22", region: 4, donator: 1 },
  { donation_id: 6, amount: 10, date: "2024-11-22", region: 3, donator: 1 },
  { donation_id: 7, amount: 10, date: "2024-11-22", region: 1, donator: 1 },
  { donation_id: 8, amount: 200, date: "2024-11-23", region: 3, donator: 1 },
  { donation_id: 9, amount: 10, date: "2024-11-23", region: 2, donator: 1 },
  { donation_id: 10, amount: 100, date: "2024-11-25", region: 1, donator: 22 },
  { donation_id: 11, amount: 50, date: "2024-11-25", region: 3, donator: 22 },
  { donation_id: 12, amount: 50, date: "2024-11-25", region: 2, donator: 22 },
  { donation_id: 13, amount: 20, date: "2024-11-25", region: 2, donator: 22 },
  { donation_id: 14, amount: 20, date: "2024-11-25", region: 1, donator: 23 },
  { donation_id: 15, amount: 50, date: "2024-11-25", region: 1, donator: 23 },
];

const regions = [
  { name: "West", id: 1 },
  { name: "Southwest", id: 2 },
  { name: "Midwest", id: 3 },
  { name: "Southeast", id: 4 },
  { name: "Northeast", id: 5 },
];

function getTopDonatorsByRegion(regionName, donations) {
  const region = regions.find((r) => r.name === regionName);
  if (!region) return [];

  const regionDonations = donations.filter(
    (donation) => donation.region === region.id,
  );

  const donatorTotals = regionDonations.reduce((acc, donation) => {
    const donatorId = donation.donator;
    if (!acc[donatorId]) {
      acc[donatorId] = 0;
    }
    acc[donatorId] += donation.amount;
    return acc;
  }, {});

  const sortedDonators = Object.entries(donatorTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  return sortedDonators;
}

export function DonationStatsPanel({ focusRegion }) {
  const axiosInter = useAxiosWithToken();
  const [topDonators, setTopDonators] = useState([]);
  const [donation, setDonation] = useState(donations);
  const [loading, setLoading] = useState(true); // Adding loading state for better UX

  useEffect(() => {
    async function getDonations() {
      try {
        setLoading(true);
        const resp = await axiosInter.get("/api/donation/");
        setDonation(resp.data);
      } catch (e) {
        console.log(e);
        setDonation(donations);
      } finally {
        setLoading(false);
      }
    }
    getDonations();
  }, []);

  useEffect(() => {
    if (!focusRegion) {
      setTopDonators([]);
      return;
    }
    getTopDonators(focusRegion);
  }, [focusRegion, donation]);

  async function getTopDonators(focusRegion) {
    const users = getTopDonatorsByRegion(focusRegion, donation);
    if (users.length === 0) {
      setTopDonators([]);
      return;
    }

    const promises = users.map(([id]) => axiosInter.get(`/api/users/${id}/`));

    try {
      const resp = await Promise.all(promises);
      const topDonatorsData = resp.map((data, i) => ({
        user: data.data.username,
        amount: users[i][1],
      }));

      setTopDonators(topDonatorsData);
    } catch (e) {
      console.log(e);
    }
  }

  const donationsByRegion = donation.reduce((acc, donation) => {
    const region = donation.region;
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(donation);
    return acc;
  }, {});

  const totalDonated = donation.reduce((acc, val) => acc + val.amount, 0);

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-6 border-b-2">
        Donation Summary
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Total Donations
        </h3>
        <p className="text-lg font-medium">
          Total Donated:{" "}
          <span className="text-green-600">
            ${totalDonated.toLocaleString()}
          </span>
        </p>
      </div>

      {loading ? (
        <p>Loading donations...</p>
      ) : focusRegion ? (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Top Donations
          </h2>
          <div className="space-y-4">
            {topDonators.map((donation, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">
                    {donation.user}
                  </span>
                </div>
                <p className="text-lg font-semibold text-blue-500">
                  ${donation.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DonationBarChart
          regions={regions}
          donationsByRegion={donationsByRegion}
        />
      )}
    </div>
  );
}
