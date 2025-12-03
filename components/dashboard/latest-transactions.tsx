"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Tx = { id: string; title: string; amount: string; avatar?: string };

const transactions: Tx[] = [
  { id: "t1", title: "Subscription Renewal", amount: "1.4K" },
  { id: "t2", title: "Payment for Services", amount: "2.1K" },
  { id: "t3", title: "Subscription Renewal", amount: "1.3K" },
  { id: "t4", title: "Payment for Services", amount: "2.5K" },
  { id: "t5", title: "Subscription Renewal", amount: "1.4K" },
];

export default function LatestTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between gap-3 p-3 rounded-md border border-border bg-background/2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  {t.title.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.title}</div>
                  <div className="text-xs text-muted-foreground">{t.id}</div>
                </div>
              </div>
              <div className="text-sm font-semibold">{t.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
