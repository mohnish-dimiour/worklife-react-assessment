import { Stack, Typography, alpha, styled } from "@mui/material";
import React from "react";
import Logo from "../../../assets/images/logou.png";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { IconButtonAtom } from "../../../UI/atoms";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logout } from "../../../redux/slices/auth.slice";
import { useDispatch } from "react-redux";

// Styled Component
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

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <HeaderWrapper>
      <Stack direction="row">
        <img width="40" alt="SociBuzz Logo" src={Logo} />
        <Typography
          variant="h5"
          color={"primary"}
          sx={{ ml: 1, mt: 0.3, fontWeight: "bold" }}
        >
          WorkLife
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <IconButtonAtom
          sx={{
            background: (theme) => theme.palette.secondary.light,
            borderRadius: "3px !important",
            padding: "3px !important",
          }}
          aria-label="delete"
        >
          <NotificationsNoneRoundedIcon
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </IconButtonAtom>
        <IconButtonAtom
          sx={{
            background: (theme) => alpha(theme.palette.error.light, 0.3),
            borderRadius: "3px !important",
            padding: "3px !important",
          }}
          aria-label="delete"
          onClick={handleLogout}
        >
          <LogoutRoundedIcon
            sx={{ color: (theme) => theme.palette.error.main }}
          />
        </IconButtonAtom>
      </Stack>
    </HeaderWrapper>
  );
};

export default Header;
