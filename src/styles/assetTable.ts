export const assetTableMainDiv = { p: { xs: "0", sm: "16px" } };

export const assetTableSearch = {
  display: "flex",
  justifyContent: "right",
  textField: {
    backgroundColor: "#191b21",
    borderRadius: "4px",
    width: "500px",
  },
};

export const assetTableContainer = {
  width: "100%",
  height: "80vh",
  overflowY: "auto",
  // paddingBottom: "20vh",
};

export const assetTableBody = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#191b21",
  },
};
export const assetTableModalDiv = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 0, sm: 3 },
  borderRadius: "16px",
  outline: "none",
};
export const assetTableModalCard = {
  p: { xs: 2, sm: 3 },
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "16px",
  bgcolor: "background.default",
};

export const assetTableModalCardMedia = {
  height: "200px",
  width: "200px",
  objectFit: "cover",
  borderRadius: "50%",
  mx: "auto",
  mb: 2,
  border: "4px solid #f0f0f0",
};
export const assetTableModalCardContent = {
  p: { xs: 1, sm: 3 },
};

export const assetTableModalCardName = {
  fontWeight: "bold",
  textAlign: "center",
  mb: 2,
  color: "#f0b90b",
};

export const assetTableModalCardData = {
  display: "flex",
  justifyContent: "space-between",
  mb: 1,
};

export const assetTableModalCardDataLastUpdated = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2,
};

export const assetTableModalCardCloseBtn = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",

  btn: {
    backgroundColor: "#f0b90b",
    color: "#000",
    borderRadius: "5px",
    padding: "15px",
    px: 4,
    py: 1,
    fontWeight: "bold",
    boxShadow: "none",
    ":hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    textTransform: "none",
    width: "50%",
  },
};

export const assetTableBodyCellOne = {
  display: "flex",
  alignItems: "center",
  textArea: {
    marginLeft: "10px",
    symoblText: { textTransform: "uppercase" },
    nameText: { fontSize: "0.85rem", color: "#ccc" },
  },
};
