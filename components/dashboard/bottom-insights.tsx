"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BottomInsights() {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-[335px] ">
          <CardHeader className="pt-8">
            <CardTitle>Quick Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">New Users</div>
                  <div className="text-2xl font-semibold">1,254</div>
                </div>
                <div className="text-sm text-muted-foreground">+8.4%</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Churn</div>
                  <div className="text-2xl font-semibold">2.1%</div>
                </div>
                <div className="text-sm text-muted-foreground">-0.4%</div>
              </div>

              <div className="text-xs text-muted-foreground">
                Summary of quick metrics to give more context below the table.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pt-8">
            <CardTitle>Activity (last 7 days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-36">
              <svg
                viewBox="0 0 200 60"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="bi" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,40 C30,20 60,10 90,20 C120,30 150,25 180,18 L200,18 L200,60 L0,60 Z"
                  fill="url(#bi)"
                  opacity="0.95"
                />
                <polyline
                  points="0,40 30,20 60,10 90,20 120,30 150,25 180,18 200,18"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
