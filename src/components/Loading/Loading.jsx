import React from "react";
import { LoadingContainer } from "./styles";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress
        size={100}
        sx={{
          color: "purple",
        }}
      />
    </LoadingContainer>
  );
};

export default Loading;
