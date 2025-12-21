"use client"

import React, { use } from "react"
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
  ChartLine
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { useDispatch, useSelector } from "react-redux"

// Sample data


export function AppSidebar(props) {
  const { isMobile } = useSidebar()
  const { loading, user } = useSelector((state) => state.auth);
  
  const first_name = user?.first_name;
  const last_name = user?.last_name;
  const email = user?.email;

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      { name: "Availiativity", logo: GalleryVerticalEnd, plan: "Z-Dev" },
    ],
    navMain: [
      {
        title: "Produk",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: "Tambah Produk", url: "#" },
          { title: "Daftar Produk", url: "#" },
        ],
      },
      {
        title: "Broadcast",
        url: "#",
        icon: Bot,
        items: [
          { title: "Buat Template", url: "#" },
          { title: "Posting Produk", url: "#" },
        ],
      },
      {
        title: "Dokumentasi",
        url: "#",
        icon: BookOpen,
        items: [
          { title: "Pendahuluan", url: "/admin/introduction" },
          { title: "Cara Memulai", url: "#" },
          { title: "Cara Penggunaan", url: "#" },
        ],
      },
      {
        title: "Pengaturan",
        url: "#",
        icon: Settings2,
        items: [
          { title: "Akun", url: "#" },
          { title: "Billing", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Saran dan Masukan", url: "#", icon: Frame },
      { name: "FAQ", url: "#", icon: PieChart },
    ],
  }

  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

  if (!activeTeam) return null

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:ring-0" asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-main data-[state=open]:text-main-foreground data-[state=open]:outline-border data-[state=open]:outline-2"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-base">
                    {/* <activeTeam.logo className="size-4" /> */}
                    <div className="w-40 h-40 rounded-lg gradient-primary flex items-center justify-center">
                        <img src="/Dev..png"></img>
                    </div>
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-heading">{activeTeam.name}</span>
                    <span className="truncate text-xs">{activeTeam.plan}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
          <SidebarMenu>
            <SidebarMenuItem key="analytics">
                <SidebarMenuButton asChild>
                  <a href="/dashboard">
                    <ChartLine />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
            {data.navMain.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className="data-[state=open]:bg-main data-[state=open]:outline-border data-[state=open]:text-main-foreground"
                      tooltip={item.title}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Bantuan</SidebarGroupLabel>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-48"
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                  >
                    <DropdownMenuItem>
                      <Folder />
                      <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Forward />
                      <span>Share Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Trash2 />
                      <span>Delete Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="overflow-visible" size="lg">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png?size=40" alt="CN" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-heading">{first_name}</span>
                    <span className="truncate text-xs">{email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-base">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png?size=40" alt="CN" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-heading">{first_name}</span>
                      <span className="truncate text-xs">{email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
