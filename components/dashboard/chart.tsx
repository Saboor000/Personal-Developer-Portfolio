"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Render a dependency-free bar chart (two series) as an SVG that scales responsively.
export default function TotalVisitorsChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const desktop = [180, 320, 240, 80, 220, 240];
  const mobile = [80, 180, 160, 120, 140, 120];

  // chart sizing in SVG coordinates
  const width = 700;
  const height = 320;
  const padding = { top: 24, right: 20, bottom: 48, left: 36 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(...desktop, ...mobile);

  // compute positions
  const groups = months.length;
  const groupWidth = chartWidth / groups;
  const barWidth = Math.min(32, groupWidth * 0.35);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad-blue" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="grad-purple" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="6"
                  stdDeviation="8"
                  floodColor="#000"
                  floodOpacity="0.35"
                />
              </filter>
            </defs>

            {/* y axis grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
              const y = padding.top + chartHeight - t * chartHeight;
              const value = Math.round(t * maxValue);
              return (
                <g key={i}>
                  <line
                    x1={padding.left}
                    x2={width - padding.right}
                    y1={y}
                    y2={y}
                    stroke="rgba(255,255,255,0.04)"
                  />
                  <text
                    x={8}
                    y={y + 4}
                    fontSize={10}
                    fill="rgba(255,255,255,0.45)"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            {/* bars */}
            {months.map((m, i) => {
              const groupX = padding.left + i * groupWidth + groupWidth / 2;
              const dH = chartHeight - (desktop[i] / maxValue) * chartHeight;
              const mH = chartHeight - (mobile[i] / maxValue) * chartHeight;
              const dY = padding.top + dH;
              const mY = padding.top + mH;
              return (
                <g key={m}>
                  <rect
                    x={groupX - barWidth - 4}
                    y={dY}
                    width={barWidth}
                    height={chartHeight - dH}
                    fill="#2563eb"
                    rx={4}
                  />
                  <rect
                    x={groupX + 4}
                    y={mY}
                    width={barWidth}
                    height={chartHeight - mH}
                    fill="#7c3aed"
                    rx={4}
                  />
                  {/* month label */}
                  <text
                    x={groupX}
                    y={height - 12}
                    fontSize={11}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.65)"
                  >
                    {m}
                  </text>
                </g>
              );
            })}

            {/* legend */}
            <g transform={`translate(${padding.left}, ${height - 6})`}>
              <rect x={0} y={-28} width={12} height={8} rx={2} fill="#2563eb" />
              <text x={18} y={-22} fontSize={11} fill="rgba(255,255,255,0.75)">
                Desktop
              </text>
              <rect
                x={110}
                y={-28}
                width={12}
                height={8}
                rx={2}
                fill="#7c3aed"
              />
              <text x={128} y={-22} fontSize={11} fill="rgba(255,255,255,0.75)">
                Mobile
              </text>
            </g>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
