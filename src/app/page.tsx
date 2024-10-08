"use client";
import { Box, CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { home } from "../styles";

export default function Home() {
  useLayoutEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      redirect("/dashboard");
    } else {
      redirect("/auth/login");
    }
  }, []);
  return (
    <Box sx={home}>
      <CircularProgress color="success" size="3rem" />
    </Box>
  );
}
