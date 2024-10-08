export const sidebarMainDiv = (drawerWidth: number) => ({
  width: { lg: drawerWidth },
  flexShrink: { sm: 0 },
});

export const sidebarListItemBtn = (isSelected: boolean) => ({
  backgroundColor: isSelected ? "rgba(42, 47, 56,1)" : "transparent",
  marginBottom: "8px",
  color: isSelected ? "rgba(255, 255, 255,1)" : "rgba(255, 255, 255,0.4)",
  borderTopRightRadius: "13px",
  borderBottomRightRadius: "13px",
  "&:hover": {
    backgroundColor: !isSelected ? "rgba(42, 47, 56,1)" : "rgba(42, 47, 56,1)",
  },
  btnIcon: {
    color: isSelected ? "rgba(255, 255, 255,1)" : "rgba(255, 255, 255,0.4)",
  },
});

export const sidebarLogo = {
  margin: "20px",
  display: "flex",
  justifyContent: "center",
  imgWidth: { width: "70px" },
};

export const sidebarBtnLogout = { color: "#f0b90b" };

export const sidebarTempDrawer = (drawerWidth: number) => ({
  display: { xs: "block", lg: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    backgroundColor: "#121212",
    color: "#fff",
  },
});

export const sidebarPermanentDrawer = (drawerWidth: number) => ({
  display: { xs: "none", lg: "block" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    backgroundColor: "#191b21",
    color: "#fff",
  },
});
