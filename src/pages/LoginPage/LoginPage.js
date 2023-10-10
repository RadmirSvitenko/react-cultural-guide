import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import AuthentificationTabs from "components/Authentication/AuthentificationTabs/AuthentificationTabs";
import React from "react";
import { LoginBox } from "./styles";

export default function LoginPage() {
  return (
    <LoginBox>
      <Paper elevation={20}>
        <AuthentificationTabs />
      </Paper>
    </LoginBox>
  );
}
