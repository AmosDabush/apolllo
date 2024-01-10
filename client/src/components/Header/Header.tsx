import { AppBar, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { MainMenu, SideBarMenu } from "../nav";
import logo from "../../assets/logo.svg";
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const MobileContainer = () => {
    return (
      <div className="mobile-container">
        <SideBarMenu />
      </div>
    );
  };

  return (
    <AppBar
      component="header"
      position="static"
      elevation={12}
      className="flex row px-15"
      sx={{
        backgroundColor: "#269398",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <img src={logo} alt="Apollo" loading="lazy" width={40} />
      <Container disableGutters>
        {isMobile ? <MobileContainer /> : <MainMenu />}
      </Container>
    </AppBar>
  );
};

export default Header;
