"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  trend: string;
  description: string;
  isPositive?: boolean;
}

export function CardDemo() {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      change: 12.5,
      trend: "Trending up this month",
      description: "Visitors for the last 6 months",
      isPositive: true,
    },
    {
      title: "New Customers",
      value: "1,234",
      change: -20,
      trend: "Down 20% this period",
      description: "Acquisition needs attention",
      isPositive: false,
    },
    {
      title: "Active Accounts",
      value: "45,678",
      change: 12.5,
      trend: "Strong user retention",
      description: "Engagement exceed targets",
      isPositive: true,
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      change: 4.5,
      trend: "Steady performance increase",
      description: "Meets growth projections",
      isPositive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatsCard({
  title,
  value,
  change,
  trend,
  description,
  isPositive = true,
}: StatsCardProps) {
  return (
    <Card className="bg-background border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`text-xs font-semibold ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPositive ? "↑" : "↓"} {Math.abs(change).toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="text-2xl font-bold">{value}</div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-foreground flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {trend}
          </p>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
