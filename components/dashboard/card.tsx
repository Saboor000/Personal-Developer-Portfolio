"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { totals } from "./data";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function CardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Trending up this month</CardDescription>
          </div>
          <CardAction>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/20 px-2 py-1 text-[11px] font-medium text-foreground">
              {totals.revenueChange >= 0 ? "▲ " : "▼ "}
              {Math.abs(totals.revenueChange)}%
            </span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold">
              {currency.format(totals.totalRevenue)}
            </div>
            <div className="mt-3 font-semibold">Trending up this month</div>
            <div className="text-sm text-muted-foreground mt-2">
              Visitors for the last 6 months
            </div>
          </div>
          <div className="px-4 pb-4">
            <svg
              viewBox="0 0 100 28"
              className="w-full h-10 text-muted-foreground"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,18 12,16 24,17 36,15 48,19 60,13 72,18 84,10 96,20 100,18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>New Customers</CardTitle>
            <CardDescription>Acquisition overview</CardDescription>
          </div>
          <CardAction>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/20 px-2 py-1 text-[11px] font-medium text-foreground">
              {totals.customersChange >= 0 ? "▲ " : "▼ "}
              {Math.abs(totals.customersChange)}%
            </span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold">
              {totals.newCustomers.toLocaleString()}
            </div>
            <div className="mt-3 font-semibold">Down 20% this period</div>
            <div className="text-sm text-muted-foreground mt-2">
              Acquisition needs attention
            </div>
          </div>
          <div className="px-4 pb-4">
            <svg
              viewBox="0 0 100 28"
              className="w-full h-10 text-muted-foreground"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,20 20,15 40,18 60,12 80,19 100,14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Active Accounts</CardTitle>
            <CardDescription>Retention metric</CardDescription>
          </div>
          <CardAction>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/20 px-2 py-1 text-[11px] font-medium text-foreground">
              {totals.accountsChange >= 0 ? "▲ " : "▼ "}
              {Math.abs(totals.accountsChange)}%
            </span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold">
              {totals.activeAccounts.toLocaleString()}
            </div>
            <div className="mt-3 font-semibold">Strong user retention</div>
            <div className="text-sm text-muted-foreground mt-2">
              Engagement exceed targets
            </div>
          </div>
          <div className="px-4 pb-4">
            <svg
              viewBox="0 0 100 28"
              className="w-full h-10 text-muted-foreground"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,18 16,12 32,20 48,14 64,21 80,16 96,19"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <CardTitle>Growth Rate</CardTitle>
            <CardDescription>Performance</CardDescription>
          </div>
          <CardAction>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/20 px-2 py-1 text-[11px] font-medium text-foreground">
              {totals.growthChange >= 0 ? "▲ " : "▼ "}
              {Math.abs(totals.growthChange)}%
            </span>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold">
              {totals.growthRate}%
            </div>
            <div className="mt-3 font-semibold">
              Steady performance increase
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Meets growth projections
            </div>
          </div>
          <div className="px-4 pb-4">
            <svg
              viewBox="0 0 100 28"
              className="w-full h-10 text-muted-foreground"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,22 20,18 40,20 60,15 80,17 100,14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
