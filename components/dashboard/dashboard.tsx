"use client";

import { CardDemo } from "./card";
import { TotalVisitorsChart } from "./chart";
import DashboardTable from "./dashboard-table.tsx";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <CardDemo />
      </div>
      <div>
        <TotalVisitorsChart />
      </div>
      <div>
        <DashboardTable />
      </div>
    </div>
  );
}
