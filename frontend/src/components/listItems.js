import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import SavingsIcon from '@mui/icons-material/Savings';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href='/budget'>
      <ListItemIcon>
        <SavingsIcon />
      </ListItemIcon>
      <ListItemText primary="Budget" />
    </ListItemButton>
    <ListItemButton href='/transactions'>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Transactions" />
    </ListItemButton>
    <ListItemButton href='/activity'>
      <ListItemIcon>
        <HistoryOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Activity(Brands)" />
    </ListItemButton>
    <ListItemButton href='insights'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Insights" />
    </ListItemButton>
    <ListItemButton href='/cartegories'>
      <ListItemIcon>
        <CollectionsBookmarkOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Cartegories" />
    </ListItemButton>
    <ListItemButton href='/sms'>
      <ListItemIcon>
        <SmsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="SMS Parser" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);