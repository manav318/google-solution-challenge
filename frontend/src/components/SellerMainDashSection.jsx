import { AppSidebar } from "../components/AppSidebar.jsx";
import { ChartAreaInteractive } from "../components/ChartAreaInteractive.jsx";
import { DataTable } from "../components/DataTable.jsx";
import { SectionCards } from "../components/SectionCards.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "../../data.json";

export default function Page() {
  return (
     <SidebarProvider>
       <AppSidebar variant="inset" />
       <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
    </SidebarInset>
    </SidebarProvider> 
  );
}