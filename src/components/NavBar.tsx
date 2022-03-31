import React, {useContext} from 'react';
import {AppBar, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import {AppContext} from "../index";
import { signOut } from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth";

export const NavBar = () => {
  const {auth} = useContext(AppContext)
  const [user] = useAuthState(auth)
  return (
    <AppBar>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}} variant={'dense'}>
        FireBase Example {user?.email}
        <Button onClick={() => signOut(auth)}
                sx={{justifySelf: 'flex-end'}}
                variant={"contained"}
        >
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};
