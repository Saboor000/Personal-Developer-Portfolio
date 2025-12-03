"use client";

import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />

        <main>
          <div className="flex justify-end items-center px-4 py-3">
            <ThemeToggle />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
