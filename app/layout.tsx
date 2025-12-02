"use client";

import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex justify-end items-center px-4 py-3">
                <ThemeToggle />
              </div>
              <SidebarTrigger />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
