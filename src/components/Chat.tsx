import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Message} from "./Message";

export const Chat = () => {
  return (
    <Grid container
          justifyContent={'center'}
          alignItems={'flex-start'}
          height={'100vh'}
          width={900}
          paddingTop={'50px'}
          margin={'0 auto'}
    >
      <Grid container
            justifyContent={'flex-end'}
            alignItems={'flex-start'}
            direction={"column"}
            height={'90%'}
            width={'100%'}
            style={{background: 'lightcyan'}}
            p={'10px'}
      >
        <Message/>
        <Message/>
      </Grid>

      <Grid container
            sx={{background: 'lightcyan', padding: '0 10px'}}
            direction={'row'}
            height={'10%'}
            alignItems={"center"}
      >
        <TextField sx={{flexGrow: 1}} autoFocus/>
        <Button variant={'outlined'}
                sx={{flexGrow: 0, marginLeft: '10px'}}
        >Send</Button>
      </Grid>

    </Grid>
  );
};
