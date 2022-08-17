import React from 'react'
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function CenteredTabs() {
  const url = window.location.href;
  const x = 0;
  if(url=="http://localhost:8000/"){
    let x = 0;
  }
  else if(url=="http://localhost:8000/subject"){
    let x = 1;
  }
  else if(url=="http://localhost:8000/table"){
    let x = 2;
  }
  else {
    let x = 0;
  }
  const [value, setValue] = React.useState(x);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==0){
      navigate("/", { replace: true })
    }
    else if(newValue==1){
      navigate("/subject", { replace: true })
    }
    else if(newValue==2){
      navigate("/table", { replace: true })
    }else
    {
      navigate("/", { replace: true })
    }
    
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Student" />
        <Tab label="Subject" />
        <Tab label="Table" />
      </Tabs>

    </Box>
  );
}