"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function BrowserUsage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Browser Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-3">
          <svg width={140} height={140} viewBox="0 0 42 42" className="block">
            <circle
              r="15.9155"
              cx="21"
              cy="21"
              fill="transparent"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="10"
            />
            <circle
              r="15.9155"
              cx="21"
              cy="21"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="10"
              strokeDasharray="60 40"
              strokeDashoffset="25"
              strokeLinecap="round"
            />
            <circle r="10" cx="21" cy="21" fill="transparent" />
            <text
              x="21"
              y="23"
              textAnchor="middle"
              fill="rgba(255,255,255,0.95)"
              fontSize={6}
              fontWeight={700}
            >
              1,125
            </text>
          </svg>
          <div className="text-sm text-muted-foreground text-center">
            Trending up by 5.2% this month
          </div>
          <CardDescription className="text-xs text-center">
            Showing total visitors for the last 6 months
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
