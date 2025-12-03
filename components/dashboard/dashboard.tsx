"use client";

import { CardDemo } from "./card";
import { ChartAreaInteractive } from "./chart";
import LatestTransactions from "./latest-transactions";
import BrowserUsage from "./browser-usage";
import PopularContent from "./popular-content";
import BottomInsights from "./bottom-insights";
import DashboardTable from "./dashboard-table.tsx/index";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <CardDemo />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ChartAreaInteractive />

          <DashboardTable />

          <div className="pt-2">
            <BottomInsights />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <LatestTransactions />
          <BrowserUsage />
          <PopularContent />
        </div>
      </div>
    </div>
  );
}
