import React from 'react'
import { Link } from 'gatsby'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link to="/"><Tab label="Student" /></Link>
        <Link to="/subject"><Tab label="Subject" /></Link>
        <Link to="/table"><Tab label="Table" /></Link>
      </Tabs>

    </Box>
  );
}