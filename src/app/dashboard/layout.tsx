"use client";
import Sidebar from "@/src/features/Sidebar";
import { mainScreen, navIcon } from "@/src/styles/dashboardLayout";
import { MenuOpenOutlined } from "@mui/icons-material";
import { Box, CssBaseline, IconButton } from "@mui/material";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex  min-h-screen">
      <CssBaseline />
      <Box>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={navIcon}
        >
          <MenuOpenOutlined fontSize="medium" sx={navIcon.icon} />
        </IconButton>
      </Box>

      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Box sx={mainScreen(drawerWidth)}>{children}</Box>
    </div>
  );
}

export default DashboardLayout;
