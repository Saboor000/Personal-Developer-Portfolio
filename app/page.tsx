import Dashboard from "@/components/dashboard/dashboard";
import { BreadcrumbWithDropdown } from "@/components/layouts/breadcrumb";
import { NavigationMenuDemo } from "@/components/layouts/navigation-menu";

const metadata = {
  title: "Dashboard",
  description: "Dashboard page with navigation and breadcrumb",
};

export { metadata };
export default function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <NavigationMenuDemo />
      </div>
      <div className="my-8 mx-10">
        <BreadcrumbWithDropdown />
      </div>

      <div className="w-full px-4 py-6">
        <Dashboard />
      </div>
    </div>
  );
}
