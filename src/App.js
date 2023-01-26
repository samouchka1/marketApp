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
// import ShowChartIcon from '@mui/icons-material/ShowChart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IndexCharts from './components/IndexCharts';
import FutureCharts from './components/FutureCharts';
import StockCharts from './components/StockCharts';
import Welcome from './components/Welcome';
import News from './components/News';
import { Slide } from "react-awesome-reveal";
import './App.css';
import 'animate.css';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: '#8cb89078'
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

  React.useEffect(() => {
    document.querySelector(".title").classList.remove("animate__flash")
    setTimeout(() => {
      document.querySelector(".title").classList.add("animate__flash")
    }, 5);
  }, [section])

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
                    setMobileOpen(false); 
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

  const BannerTop = () => {

    return (
      <Box sx={{margin:'-.6rem 0 1.3rem'}}>
        <Slide direction="down">
            <Box  sx={{
                backgroundColor: 'grey.800', 
                padding: '1rem', 
                borderRadius: '4px',
              }}>
                <Typography 
                  sx={{
                    textAlign: 'center', 
                    fontSize: '1.5rem', 
                    color:'common.white',
                    fontFamily: 'Teko',
                    letterSpacing: 2
                  }}>
                    {section === 'News' ? 'News' : ''}
                    {section === 'Indexes' ? 'Index Charts' : ''}
                    {section === 'Futures' ? 'Futures Charts' : ''}
                    {section === 'Stocks' ? 'Stock Charts' : ''}
                </Typography>
            </Box>
        </Slide>
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
            backgroundColor: 'grey.900', //<<<<  bgcolor
            zIndex: 999
          }}
        >
          <Toolbar>

            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>

            <Paper 
              elevation={4} 
              sx={{
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'grey.800', 
                padding: '.5rem 1rem',
                margin: {
                  md: '0',
                  xs: '0 0 0 .8rem'
                }
              }}
            > 
              <Button onClick={() => setSection('')}> 
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + 'home-icon.png'}
                  sx={{ padding: '0 1rem 0 0', height: '32px' }}
                  className="animate__animated title" 
                />  
                {/* <ShowChartIcon 
                  fonSize="large" 
                  sx={{padding: '0 1rem 0 0', color: '#2fb12f'}}
                  className="animate__animated title"   
                /> */}
                <Typography 
                  sx={{
                    fontSize: '1.5rem',
                    fontFamily: 'Teko',
                    letterSpacing: 2,
                    color: "common.white" 
                  }}
                >
                  Market App
                </Typography>
              </Button>  
            </Paper>  

          </Toolbar>

        </AppBar>

              {/* NAVIGATION */}
        <Box
          component="nav"
          sx={{ 
            width: { sm: drawerWidth }, 
            flexShrink: { sm: 0 }, 
          }}
        >
          <Drawer
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
            <DrawerContent />   {/*DRAWER CONTENT  modile */}
          </Drawer>


          <Drawer
            open
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerContent />   {/*DRAWER CONTENT desktop */}
          </Drawer>

        </Box>

            {/* MAIN */}
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, p: 3, 
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
            backgroundColor: 'grey.100',
            // margin: '1rem 0'
          }}
        >
          <Toolbar /> {/* header space */}

            {section === '' ? <Welcome /> : undefined }
            {section === 'News' ? <News BannerTop={BannerTop} /> : undefined }
            {section === 'Indexes' ? <IndexCharts BannerTop={BannerTop} /> : undefined }
            {section === 'Futures' ? <FutureCharts BannerTop={BannerTop} /> : undefined }
            {section === 'Stocks' ? <StockCharts BannerTop={BannerTop} /> : undefined }
            
        </Box>

      </Box>
    </ThemeProvider>
  )
}

export default App