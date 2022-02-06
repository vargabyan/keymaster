import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import audi from "./image/audi-r8-outstanding-front.jpg";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const pages = ["Home", "About", "Contact"];

function HeaderPoster() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <Box sx={{flexGrow: 1, width: "100%", position: "relative", display: "flex" }}>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            height: 50,
            position: "absolute",
            zIndex: 100,
            marginTop: "15px",
            color: "white",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Key Master
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Key Master
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </Box>
        <div 
          style={{
            backgroundImage: `url(${audi})`, 
            width: "100%",
            height: "724px",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            opacity: 0.3,
          }}
        />
        </div>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{
            maxWidth: "400px",
            color: "white",
            position: "absolute",
            fontWeight: "800",
            marginTop: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            right: 0,
            left: 0,
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          Быстрый и простой способ восстановить или дублировать ключи
        </Typography>
        <div 
          style={{
            width: "100%",
            transform: "skewY(-5deg)",
            position: "absolute",
            height: "215px",
            bottom: "-113px",
            background: "#f8f9fa",
          }}
        />
      </Box>
  );
}

export default HeaderPoster;