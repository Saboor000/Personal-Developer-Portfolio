"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { id: "p1", title: "JavaScript Tutorial", views: "4.3K" },
  { id: "p2", title: "Tech Trends 2025", views: "3.2K" },
  { id: "p3", title: "The Future of AI", views: "2.4K" },
  { id: "p4", title: "React Hooks Explained", views: "1.5K" },
];

export default function PopularContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {items.map((it) => (
            <div
              key={it.id}
              className="flex items-center justify-between p-3 rounded-md border border-border bg-background/2"
            >
              <div>
                <div className="text-sm font-medium">{it.title}</div>
                <div className="text-xs text-muted-foreground">Article</div>
              </div>
              <div className="text-sm font-semibold">{it.views}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
