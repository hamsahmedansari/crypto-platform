/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Logo from "@/public/README.svg";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { MdHomeFilled, MdSave } from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import {
  sidebarBtnLogout,
  sidebarLogo,
  sidebarMainDiv,
  sidebarPermanentDrawer,
  sidebarTempDrawer,
} from "../styles/sidebar";
import SidebarList from "../components/SidebarList";
import { SidebarItem, SideBarProps } from "../types/types";

export default function SideBar({
  drawerWidth,
  handleDrawerClose,
  handleDrawerTransitionEnd,
  mobileOpen,
}: SideBarProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    router.push("/auth/login");
  };

  const sidebarItems: SidebarItem[] = [
    { text: "Dashboard", icon: <MdHomeFilled size={24} />, path: "/dashboard" },
    {
      text: "Users",
      icon: <FaUser size={20} />,
      path: "/dashboard/users",
    },
    { text: "Assets", icon: <MdSave size={20} />, path: "/dashboard/assets" },
    {
      text: "Orders",
      icon: <GrDocumentTime size={20} />,
      path: "/dashboard/orders",
    },
  ];

  const drawer = (
    <div>
      <Box sx={sidebarLogo}>
        <Image src={Logo} alt={"logo"} style={sidebarLogo.imgWidth} />
      </Box>
      <Box>
        <List>
          {sidebarItems.map((item, index) => {
            const isSelected = pathName === item.path;
            return (
              <SidebarList
                index={index}
                handleDrawerClose={handleDrawerClose}
                isSelected={isSelected}
                item={item}
              />
            );
          })}
        </List>
        <List sx={{ marginTop: "auto" }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={sidebarBtnLogout}>
              <ListItemIcon sx={sidebarBtnLogout}>
                <IoIosLogOut size={24} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );

  return (
    <Box component="nav" sx={sidebarMainDiv(drawerWidth)} aria-label="sidebar">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={sidebarTempDrawer(drawerWidth)}
      >
        {drawer}
      </Drawer>
      <Drawer variant="permanent" sx={sidebarPermanentDrawer(drawerWidth)} open>
        {drawer}
      </Drawer>
    </Box>
  );
}
