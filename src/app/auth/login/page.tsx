"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Typography, Box, useMediaQuery } from "@mui/material";
import InputField from "@/src/components/InputField";
import MenTakingPicture from "@/src/components/TakingPictureSVG";
import CustomButton from "@/src/components/CustomButton";
import { authImg, formDiv, mainDiv, routeBtn } from "@/src/styles/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    alert("Welcome");
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };
  const isLaptopScreen = useMediaQuery("(max-width:1024px)");
  const isMobileScreen = useMediaQuery("(max-width:500px)");

  return (
    <Box sx={mainDiv(isLaptopScreen)}>
      <Box sx={authImg(isLaptopScreen)}>
        <MenTakingPicture />
      </Box>
      <Box sx={formDiv(isLaptopScreen, isMobileScreen)}>
        <Typography
          variant="h4"
          fontWeight={600}
          marginBottom="20px"
          gutterBottom
          color="white"
          textAlign="center"
        >
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off" width="100%">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CustomButton label="Login" onClick={handleLogin} />
        </Box>
        <Typography
          variant="body2"
          align="center"
          marginTop={2}
          color="#8c8c8c"
        >
          Don&apos;t have an account?{" "}
          <Button onClick={() => router.push("/auth/register")} sx={routeBtn}>
            Sign up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
