"use client";

import * as React from "react";
import Link from "next/link";
import { PhoneCallIcon, BookOpenIcon, LayoutDashboardIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useIsMobile from "@/hooks/use-mobile";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing task progress typically as a bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Shows extra info when hovering or focusing on an element.",
  },
];

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NavigationMenu viewport={isMobile} className="w-auto ">
      <NavigationMenuList className="flex-wrap justify-center">
        {/* Dashboard Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4">
              <ListItem href="/dashboard" title="Overview">
                View overall stats and quick insights.
              </ListItem>
              <ListItem href="/dashboard/profile" title="Profile Settings">
                Manage your personal settings and account.
              </ListItem>
              <ListItem href="/dashboard/analytics" title="Analytics">
                Performance tracking and visual insights.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Components Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-4 p-4">
              <ListItem href="/services/web-dev" title="Web Development">
                Build responsive and modern web applications.
              </ListItem>
              <ListItem href="/services/ui-ux" title="UI/UX Design">
                Design beautiful and user-friendly interfaces.
              </ListItem>
              <ListItem href="/services/consulting" title="Consulting">
                Technical consulting and guidance services.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Learning */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Tutorials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-4 p-4">
              <ListItem href="/tutorials/react" title="React Basics">
                Beginner to advanced React tutorials.
              </ListItem>
              <ListItem href="/tutorials/nextjs" title="Next.js Guide">
                Full step-by-step Next.js tutorials.
              </ListItem>
              <ListItem href="/tutorials/tailwind" title="Tailwind Mastery">
                Learn Tailwind CSS from scratch.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Icon-based Menu */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-4 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <LayoutDashboardIcon />
                    Dashboard
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <BookOpenIcon />
                    Tutorials
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <PhoneCallIcon />
                    Contact Support
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
