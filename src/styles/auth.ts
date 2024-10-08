export const mainDiv = (isLaptopScreen: boolean) => ({
  bgcolor: "#141416",
  height: "100vh",
  color: "white",
  display: "flex",
  justifyContent: !isLaptopScreen ? "inherit" : "center",
});

export const authImg = (isLaptopScreen: boolean) => ({
  justifyContent: "center",
  padding: "20px",
  width: "60%",
  display: !isLaptopScreen ? "flex" : "none",
});

export const formDiv = (isLaptopScreen: boolean, isMobileScreen: boolean) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: !isLaptopScreen ? "40%" : isMobileScreen ? "100%" : "80%",
  padding: "20px",
  paddingRight: !isLaptopScreen ? "50px" : "20px",
  bgcolor: "#141416",
});

export const authBtn = {
  backgroundColor: "#f0b90b",
  color: "#000",
  borderRadius: "5px",
  padding: "15px",
  fontWeight: "bold",
  textTransform: "none",
  width: "100%",
};

export const authField = {
  backgroundColor: "#1f2023",
  color: "#ffffff",
  borderRadius: "5px",
  width: "100%",
  marginBottom: "20px",
  border: "1px solid #3e3e42",
};

export const routeBtn = { textTransform: "none", color: "#f0b90b" };
