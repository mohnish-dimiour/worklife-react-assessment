import React from "react";
import { useDispatch } from "react-redux";
import { Stack, Typography, styled } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logout } from "../../../redux/slices/auth.slice";
import Logo from "../../../assets/images/logou.png";
import { IconButtonAtom } from "../../../UI/atoms";

// Styled Component for Header
const HeaderWrapper = styled(Stack)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 9,
  width: "100%",
  height: 50,
  paddingLeft: 16,
  paddingRight: 16,
  background: theme.palette.secondary.main,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

// Header Component
const Header = () => {
  const dispatch = useDispatch();

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderWrapper>
      {/* Logo and Title */}
      <Stack direction="row" alignItems="center">
        <img width="40" alt="SociBuzz Logo" src={Logo} />
        <Typography
          variant="h5"
          color="primary"
          sx={{ ml: 1, mt: 0.3, fontWeight: "bold" }}
        >
          WorkLife
        </Typography>
      </Stack>

      {/* Notification and Logout Buttons */}
      <Stack direction="row" spacing={1} alignItems="center">
        {/* Notification Button */}
        <IconButtonAtom
          sx={{
            background: (theme) => theme.palette.secondary.light,
            borderRadius: "3px !important",
            padding: "3px !important",
          }}
          aria-label="Notifications"
        >
          <NotificationsNoneRoundedIcon
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </IconButtonAtom>

        {/* Logout Button */}
        <IconButtonAtom
          sx={{
            background: (theme) => theme.palette.secondary.light,
            borderRadius: "3px !important",
            padding: "3px !important",
          }}
          aria-label="Logout"
          onClick={handleLogout}
        >
          <LogoutRoundedIcon
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </IconButtonAtom>
      </Stack>
    </HeaderWrapper>
  );
};

export default Header;
