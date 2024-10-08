export const navIcon = {
  position: "absolute",
  backgroundColor: "#3e3e42",
  zIndex: 10,
  padding: "5px",
  justifyContent: "center",
  alignItems: "center",
  top: "12px",
  left: "20px",
  "&:hover": {
    backgroundColor: "transparent",
  },
  icon: {
    color: "#f0b90b",
    opacity: "0.8",
  },
};

export const mainScreen = (drawerWidth: number) => ({
  flexGrow: 1,
  py: 3,
  px: 2.5,
  overflowY: "auto",
  backgroundColor: "#191b21",
  color: "white",
  height: "100vh",
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  overflow: "hidden",
});
