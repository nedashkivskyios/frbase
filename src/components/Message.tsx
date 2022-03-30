import React from 'react';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export const Message = () => {
  return (
    <Box component={'div'}
         sx={{
           border: '1px solid gray',
           width: '190px',
           height: '90px',
           padding: '5px',
           marginTop: '5px'
         }}>
      <Box component={'div'} sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5px'
      }}>
        <Avatar/>
        <Box sx={{
          marginLeft: '10px'
        }}>name</Box>
      </Box>
      <Box>
        <Box>Message</Box>
      </Box>
    </Box>
  );
};
