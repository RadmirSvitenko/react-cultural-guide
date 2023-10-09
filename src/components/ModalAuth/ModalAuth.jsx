import { Dialog, Slide } from "@mui/material";
import AuthentificationTabs from "components/Authentication/AuthentificationTabs/AuthentificationTabs";
import React from "react";

const ModalAuth = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Slide}
      keepMounted
      sx={{
        zIndex: "3000",
      }}
    >
      <AuthentificationTabs />
    </Dialog>
  );
};

export default ModalAuth;
