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
      <div className="w-full flex justify-center pb-6">
        <div className="w-full max-w-4xl px-4">
          <NavigationMenuDemo />
        </div>
      </div>

      <div className="w-full px-9 py-4">
        <BreadcrumbWithDropdown />
      </div>

      <div className="w-full px-4 py-6">
        <Dashboard />
      </div>
    </div>
  );
}
