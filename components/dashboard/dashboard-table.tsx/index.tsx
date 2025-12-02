"use client";

import React from "react";
import { DataTable } from "./table";
import { columns, data as payments } from "./column";

export default function DashboardTable() {
  return (
    <div className="w-full">
      <DataTable columns={columns} data={payments} pageSize={5} />
    </div>
  );
}

export { DashboardTable as Table };
