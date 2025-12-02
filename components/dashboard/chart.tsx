"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type Point = { date: string; visitors: number };

const data3Months: Point[] = [
  { date: "Apr 3", visitors: 2400 },
  { date: "Apr 9", visitors: 1398 },
  { date: "Apr 15", visitors: 9800 },
  { date: "Apr 21", visitors: 3908 },
  { date: "Apr 27", visitors: 4800 },
  { date: "May 3", visitors: 3800 },
  { date: "May 9", visitors: 4300 },
  { date: "May 16", visitors: 2000 },
  { date: "May 23", visitors: 9490 },
  { date: "May 30", visitors: 3490 },
  { date: "Jun 5", visitors: 4300 },
  { date: "Jun 11", visitors: 2100 },
  { date: "Jun 17", visitors: 8200 },
  { date: "Jun 23", visitors: 3200 },
  { date: "Jun 30", visitors: 4200 },
];

const data30Days: Point[] = [
  { date: "Jun 1", visitors: 2400 },
  { date: "Jun 7", visitors: 1398 },
  { date: "Jun 13", visitors: 9800 },
  { date: "Jun 19", visitors: 3908 },
  { date: "Jun 25", visitors: 4800 },
  { date: "Jun 30", visitors: 3800 },
];

const data7Days: Point[] = [
  { date: "Jun 24", visitors: 2400 },
  { date: "Jun 25", visitors: 1398 },
  { date: "Jun 26", visitors: 9800 },
  { date: "Jun 27", visitors: 3908 },
  { date: "Jun 28", visitors: 4800 },
  { date: "Jun 29", visitors: 3800 },
  { date: "Jun 30", visitors: 4300 },
];

function buildPath(
  points: Point[],
  width: number,
  height: number,
  padding = 16
) {
  if (!points.length) return { path: "", area: "" };

  const values = points.map((p) => p.visitors);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const stepX = (width - padding * 2) / Math.max(1, points.length - 1);

  const coords = points.map((p, i) => {
    const x = padding + i * stepX;
    const y =
      padding + (1 - (p.visitors - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const path = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(2)} ${c.y.toFixed(2)}`)
    .join(" ");
  const first = coords[0];
  const last = coords[coords.length - 1];
  const area = `${path} L ${last.x.toFixed(2)} ${
    height - padding
  } L ${first.x.toFixed(2)} ${height - padding} Z`;

  return { path, area };
}

export function TotalVisitorsChart() {
  const [timeRange, setTimeRange] = useState<"3m" | "30d" | "7d">("3m");
  const [containerWidth, setContainerWidth] = useState(1000);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const data = useMemo(() => {
    switch (timeRange) {
      case "30d":
        return data30Days;
      case "7d":
        return data7Days;
      default:
        return data3Months;
    }
  }, [timeRange]);

  // Adjust area opacity when theme changes (detect html.dark class)
  const [areaOpacity, setAreaOpacity] = useState(0.45);

  useEffect(() => {
    const update = () => {
      const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");
      setAreaOpacity(isDark ? 0.6 : 0.45);
    };

    update();

    // Observe changes to html.class to react to theme toggles
    const observer = new MutationObserver(() => update());
    if (typeof document !== "undefined" && document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  // Responsive SVG dimensions
  const width = Math.max(containerWidth, 300);
  const height = containerWidth < 640 ? 250 : 300;

  const { path, area } = buildPath(data, width, height, 20);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
        <div>
          <CardTitle>Total Visitors</CardTitle>
          <CardDescription>Total for the last 3 months</CardDescription>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            variant={timeRange === "3m" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("3m")}
            className="text-xs w-full sm:w-auto"
          >
            Last 3 months
          </Button>
          <Button
            variant={timeRange === "30d" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("30d")}
            className="text-xs w-full sm:w-auto"
          >
            Last 30 days
          </Button>
          <Button
            variant={timeRange === "7d" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange("7d")}
            className="text-xs w-full sm:w-auto"
          >
            Last 7 days
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div
          ref={containerRef}
          className="w-full overflow-hidden rounded-md bg-card p-2 sm:p-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            className="min-h-[250px] sm:min-h-[300px]"
            style={{ height: "auto" }}
          >
            <defs>
              <linearGradient id="gradVisitors" x1="0" x2="0" y1="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-primary)"
                  stopOpacity={areaOpacity}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* grid lines */}
            {[0.25, 0.5, 0.75].map((t) => (
              <line
                key={t}
                x1={0}
                x2={width}
                y1={t * height}
                y2={t * height}
                stroke="var(--color-border)"
                strokeOpacity={0.22}
              />
            ))}

            {/* area */}
            <path d={area} fill="url(#gradVisitors)" stroke="none" />

            {/* stroke path */}
            <path
              d={path}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* x labels */}
            {data.map((p, i) => {
              const x = 20 + (i * (width - 40)) / Math.max(1, data.length - 1);
              const fontSize = containerWidth < 640 ? 10 : 12;
              return (
                <text
                  key={i}
                  x={x}
                  y={height - 6}
                  fill="var(--color-muted-foreground)"
                  fontSize={fontSize}
                  textAnchor="middle"
                >
                  {p.date}
                </text>
              );
            })}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}

export default TotalVisitorsChart;
