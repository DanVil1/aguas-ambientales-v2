// components/Navbar/Navbar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'Solution', id: 'solutions' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ onSectionChange }) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSectionClick = (id) => {
    console.log("Section clicked:", id);
    onSectionChange(id);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', boxShadow: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Site Title on Left */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: theme.palette.primary.main }}
          >
            My Website
          </Typography>

          {/* Mobile Header: Title on left, Menu icon on right */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: '100%' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, color: theme.palette.primary.main }}
            >
              My Website
            </Typography>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <Typography textAlign="center" sx={{ color: theme.palette.primary.main }}>
                    {section.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation Buttons aligned to the right */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                sx={{ my: 2, color: 'black', display: 'block', mx: 6 }}
              >
                {section.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
