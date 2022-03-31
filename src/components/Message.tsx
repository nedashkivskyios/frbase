import React from 'react';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

type PropsType = {
  displayName: string
  photoUrl: string
  text: string
  user: any
  uid: any
}

export const Message: React.FC<PropsType> = ({displayName,text,photoUrl, user, uid}) => {
  return (
    <Box component={'div'}
         sx={{
           border: user.uid === uid ? '1px solid green' : '1px solid gray',
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
        <Avatar src={photoUrl}/>
        <Box sx={{
          marginLeft: '10px'
        }}>{displayName}</Box>
      </Box>
      <Box>
        <Box style={{width: 'fit-content'}}>{text}</Box>
      </Box>
    </Box>
  );
};
