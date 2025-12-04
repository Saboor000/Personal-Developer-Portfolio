"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { transactions as centralTransactions } from "./data";

type Tx = { id: string; title: string; amount: number; avatar?: string };

const transactions: Tx[] = centralTransactions;
const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

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
              <div className="text-sm font-semibold">
                {compact.format(t.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
