import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Paper,
    Button,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IndexCharts from './components/IndexCharts';
import FutureCharts from './components/FutureCharts';
import StockCharts from './components/StockCharts';
import Welcome from './components/Welcome';
import News from './components/News'
import './App.css';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: ''
    }
  }
})

          //props
const App = () => {

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [section, setSection] = useState('');

    const DrawerContent = () => {

      return (

        <Box>
          <Toolbar />
          <Divider />
          <IconButton onClick={handleDrawerToggle} 
            sx={{display: {md: 'none', xs: 'block'}, 
            position: 'relative', left: '82%'}}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {['News', 'Indexes', 'Futures', 'Stocks'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton 
                  className={section === text ? 'Mui-selected' : undefined}
                  onClick={()=> {
                    setMobileOpen(!mobileOpen); 
                    setSection(text)
                  }} 
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )
  }
    

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>

        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: '#3e3e3e' //<<<<  bgcolor
          }}
        >
          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Paper 
              elevation={4} 
              sx={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#505050', 
                padding: '.5rem 1rem',
                margin: {
                  md: '0',
                  xs: '0 0 0 .8rem'
                }
              }}
            > 
              <Button onClick={() => setSection('')}>   
                <ShowChartIcon fonSize="large" sx={{padding: '0 1rem 0 0', color: '#2fb12f'}}/>
                <Typography variant="h6" noWrap component="div" color="common.white">
                  Market App
                </Typography>
              </Button>  
            </Paper>  

          </Toolbar>

        </AppBar>

              {/* NAVIGATION */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerContent />   {/*DRAWER CONTENT */}
          </Drawer>


          <Drawer
            open
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerContent />   {/*DRAWER CONTENT */}
          </Drawer>

        </Box>

            {/* MAIN */}
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, p: 3, 
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
            backgroundColor: '#dadada80',
            // margin: '1rem 0'
          }}
        >
          <Toolbar /> {/* header space */}

            {section === '' ? <Welcome /> : undefined }
            {section === 'News' ? <News /> : undefined }
            {section === 'Indexes' ? <IndexCharts /> : undefined }
            {section === 'Futures' ? <FutureCharts /> : undefined }
            {section === 'Stocks' ? <StockCharts /> : undefined }
            
        </Box>

      </Box>
    </ThemeProvider>
  )
}

export default App