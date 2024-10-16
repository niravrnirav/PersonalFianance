import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function Sidebar() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <CompareArrowsIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Cash Flow" />
      </ListItem>
    </List>
  );
}

export default Sidebar;
