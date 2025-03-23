"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  BoxIcon,
  HandshakeIcon,
  HeartIcon,
  HistoryIcon,
  LockIcon,
  PackageIcon,
  LeafIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SunIcon,
  HelpCircleIcon,
  SettingsIcon,
} from "lucide-react"

import { NavMain } from "@/components/NavMain"
import { NavSecondary } from "@/components/NavSecondary"
import { NavUser } from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const commonUserItems = [
  {
    title: "My Orders",
    url: "/orders",
    icon: ShoppingBagIcon,
  },
  {
    title: "Buy Again",
    url: "/buy-again",
    icon: HistoryIcon,
  },
  {
    title: "My Rewards",
    url: "/rewards",
    icon: HeartIcon,
  },
  {
    title: "My Footprint",
    url: "/footprint",
    icon: LeafIcon,
  },
]

const sellerItems = [
  {
    title: "My Products",
    url: "/seller/products",
    icon: BoxIcon,
  },
  {
    title: "My Sponsors",
    url: "/seller/sponsors",
    icon: HandshakeIcon,
  },
  {
    title: "My Campaigns",
    url: "/seller/campaigns",
    icon: ShoppingCartIcon,
  },
]

const data = {
  user: {
    name: "ypsd",
    email: "ypsd@example.com",
    avatar: "/avatars/ypsd.jpg",
  },
  navMain: [
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChartIcon,
      isActive: true,
    },
    {
      title: "Theme",
      url: "/theme",
      icon: SunIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
    {
      title: "Privacy",
      url: "/privacy",
      icon: LockIcon,
    },
    {
      title: "Help",
      url: "/help",
      icon: HelpCircleIcon,
    },
  ],
}

export function AppSidebar({ ...props }) {
  const [isSeller, setIsSeller] = React.useState(false)
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  React.useEffect(() => {
    const sellerId = getCookie('sellerID')
    setIsSeller(!!sellerId)
  }, [])

  const userSpecificItems = [...commonUserItems]
  if (isSeller) {
    userSpecificItems.unshift(...sellerItems)
  }

  return (
    <Sidebar collapsible="offcanvas" className="pt-[6vh]" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              {/* <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">EcoMark</span>
              </a> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={userSpecificItems} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
