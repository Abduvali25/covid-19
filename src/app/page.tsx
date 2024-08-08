"use client";

import LatestCountryData from "@/src/components/LatestCountryData";
import LatestTotals from "@/src/components/LatestTotals";
import LineChart from "@/src/components/LineChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LatestCountryData />
      <LatestTotals />
      <LineChart />
    </main>
  );
}
