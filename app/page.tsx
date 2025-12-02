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
      {/* Header: centered container with nav and breadcrumb aligned under it */}
      <div className="w-full flex justify-center pb-6">
        <div className="w-full max-w-6xl px-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <NavigationMenuDemo />
            </div>
            <div className="mt-4">
              {/* breadcrumb left-aligned within the same centered container */}
              <div className="max-w-4xl">
                <BreadcrumbWithDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-6">
        <Dashboard />
      </div>
    </div>
  );
}
