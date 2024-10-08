import { Button } from "@mui/material";
import React from "react";
import { authBtn } from "../styles/auth";

const CustomButton = ({
  label,
  onClick,
  fullWidth = true,
}: {
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      fullWidth={fullWidth}
      sx={authBtn}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
