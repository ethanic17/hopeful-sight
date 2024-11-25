import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export function DonationBarChart({ regions, donationsByRegion }) {
  const svgRef = useRef();
  const [chartWidth, setChartWidth] = useState(500);
  const chartHeight = 300;
  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.35);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!regions || !donationsByRegion) return;

    const width = chartWidth;
    const height = chartHeight;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const regionTotals = regions.map((region) => {
      const regionId = region.id;
      const regionDonations = donationsByRegion[regionId] || [];
      const regionTotal = regionDonations.reduce(
        (acc, donation) => acc + donation.amount,
        0,
      );
      return {
        name: region.name,
        total: regionTotal,
      };
    });

    svg.selectAll("*").remove();

    const xScale = d3
      .scaleBand()
      .domain(regionTotals.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(regionTotals, (d) => d.total)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll(".bar")
      .data(regionTotals)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.total))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - margin.bottom - yScale(d.total))
      .attr("fill", "teal");

    svg.selectAll(".x-axis").remove();
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.selectAll(".y-axis").remove();
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
  }, [regions, donationsByRegion, chartWidth, chartHeight]);

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Donations by Region
      </h3>
      <svg ref={svgRef}></svg>
    </div>
  );
}
