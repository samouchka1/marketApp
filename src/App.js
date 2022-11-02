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
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MenuIcon from '@mui/icons-material/Menu';
import IndexCharts from './components/IndexCharts';
import FutureCharts from './components/FutureCharts';
import StockCharts from './components/StockCharts';
import Welcome from './components/Welcome';
import News from './components/News'
import './App.css';

const titleAreaStyles = {
  display: 'flex', 
  alignItems: 'center', 
  backgroundColor: '#505050', 
  padding: '.5rem 1rem',
  margin: {
    md: '0',
    xs: '0 0 0 .8rem'
  }
}

const drawerWidth = 240;


const App = (props) => {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [section, setSection] = useState('');

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['News', 'Indexes', 'Futures', 'Stocks'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=> {setSection(text); handleDrawerToggle();} } 
              className={section === text ? 'Mui-selected' : undefined}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
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

          <Paper elevation={4} sx={titleAreaStyles}> 
            <Button onClick={() => setSection('')}>   
              <ShowChartIcon fonSize="large" sx={{padding: '0 1rem 0 0', color: '#2fb12f'}}/>
              <Typography variant="h6" noWrap component="div" color="white">
                Market App
              </Typography>
            </Button>  
          </Paper>  

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
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
          {drawer}
        </Drawer>
          <Drawer
            open
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, p: 3, 
          width: { sm: `calc(100% - ${drawerWidth}px)` }, 
          backgroundColor: '#dadada80'
        }}
      >
        <Toolbar /> {/* respects header space */}

          {section === '' ? <Welcome /> : undefined }
          {section === 'News' ? <News /> : undefined }
          {section === 'Indexes' ? <IndexCharts /> : undefined }
          {section === 'Futures' ? <FutureCharts /> : undefined }
          {section === 'Stocks' ? <StockCharts /> : undefined }
          
      </Box>
    </Box>
  )
}

export default App