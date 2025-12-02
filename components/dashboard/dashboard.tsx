"use client";

import { CardDemo } from "./card";
import TotalVisitorsChart from "./chart";
import LatestTransactions from "./latest-transactions";
import BrowserUsage from "./browser-usage";
import PopularContent from "./popular-content";
import BottomInsights from "./bottom-insights";
// Note: the table is in a folder named `dashboard-table.tsx` so import the index explicitly
import DashboardTable from "./dashboard-table.tsx/index";

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Top stats */}
      <div className="mb-6">
        <CardDemo />
      </div>
      {/* Main layout: left column contains chart and table stacked, right column stacks smaller cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Top large chart */}
          <TotalVisitorsChart />

          {/* Table directly under the chart to avoid large vertical gaps */}
          <DashboardTable />

          {/* Additional insights/cards to fill space beneath the table */}
          <div className="pt-2">
            <BottomInsights />
          </div>
        </div>

        {/* Right column: stacked cards */}
        <div className="flex flex-col gap-6">
          <LatestTransactions />
          <BrowserUsage />
          <PopularContent />
        </div>
      </div>
    </div>
  );
}
