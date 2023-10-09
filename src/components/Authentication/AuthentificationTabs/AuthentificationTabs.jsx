import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Authorization from "../Authorization/Authorization";
import RegistrationUser from "../Registration/RegistrationUser/RegistrationUser";
import RegistrationCompany from "../Registration/RegistrationCompany/RegistrationCompany";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AuthentificationTabs = () => {
  const [AuthTabValue, setAuthTabVelue] = useState(0);

  const handleChangeAuthTabs = (event, newValue) => {
    setAuthTabVelue(newValue);
  };
  return (
    <Box>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={AuthTabValue}
          onChange={handleChangeAuthTabs}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Авторизация" {...a11yProps(0)} />
          <Tab label="Регистрация" {...a11yProps(1)} />
          <Tab label="Регистрация компании" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={AuthTabValue} index={0}>
        <Authorization />
      </CustomTabPanel>
      <CustomTabPanel value={AuthTabValue} index={1}>
        <RegistrationUser />
      </CustomTabPanel>
      <CustomTabPanel value={AuthTabValue} index={2}>
        <RegistrationCompany />
      </CustomTabPanel>
    </Box>
  );
};

export default AuthentificationTabs;
