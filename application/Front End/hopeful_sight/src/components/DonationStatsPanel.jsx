/**
 * A React component displaying donation statistics with progress bars and a bar graph for regional donation counts
 *
 * @component
 *
 * JSX element with the donation stats panel
 * @returns {React.ReactElement}
 */
import React from "react";

export function DonationStatsPanel() {
  /**
   * Array of objects containing donation statistics data
   * @type {Array<{title: string, value: string, progress: number, color: string}>}
   */
  const donationData = [
    {
      title: "Total Donations",
      value: "10,000",
      progress: 100,
      color: "bg-blue-500",
    },
    {
      title: "Nearby Projects",
      value: "5",
      progress: 50,
      color: "bg-green-500",
    },
    {
      title: "Current Projects",
      value: "3",
      progress: 30,
      color: "bg-yellow-500",
    },
  ];

  /**
   * Array of objects representing nearby projects with their donation counts
   * @type {Array<{title: string, value: number}>}
   */
  const nearbyProjects = [
    { title: "West", value: 1500 },
    { title: "Southwest", value: 1200 },
    { title: "Midwest", value: 2000 },
    { title: "Southeast", value: 1800 },
    { title: "Northeast", value: 2200 },
  ];

  /**
   * Calculates the maximum donation value for scaling the bar graph
   *
   * The type has to be a number guys
   * @type {number}
   */
  const maxDonation = Math.max(
    ...nearbyProjects.map((project) => project.value)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Donation Stats</h2>
      <ul className="space-y-4">
        {donationData.map((item, index) => (
          <li key={index} className="text-gray-700">
            <strong>{item.title}:</strong> {item.value}
            <div className="mt-2">
              <div
                className={`w-full bg-gray-200 rounded-full h-2.5 ${item.color} dark:bg-gray-700`}
              >
                <div
                  className={`${item.color} h-2.5 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          Current Supported Projects Nearby
        </h3>
        <div className="grid grid-cols-3 gap-2 text-center">
          {nearbyProjects.map((project, index) => {
            const percentageWidth = (project.value / maxDonation) * 100;
            return (
              <div key={index} className="mb-2">
                <div className="text-xs">{project.title}</div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-500 h-4"
                      style={{ width: `${percentageWidth}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-xs">{project.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
