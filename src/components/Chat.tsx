import React, {useCallback, useContext, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Message} from "./Message";
import {AppContext} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {addDoc, collection, getDocs} from "firebase/firestore";


export const Chat = () => {
  const {auth, db} = useContext(AppContext)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<Array<any>>([])


  useEffect(() => {
      getDocs(collection(db, "messages")).then((res) => {
        const messages = res.docs.map((doc) => doc.data());
        setMessages(messages)
        console.log(messages)
      });
  }, [db])


  const sendMessage = async (user: any) => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      date: new Date().getDate()
    });
    setValue('s')
  }
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
        {messages.map((m: any) => <Message user={user} uid={m.uid} text={m.text} displayName={m.displayName} photoUrl={m.photoUrl}/>)}
      </Grid>

      <Grid container
            sx={{background: 'lightcyan', padding: '0 10px'}}
            direction={'row'}
            height={'10%'}
            alignItems={"center"}
      >
        <TextField value={value} onChange={e => setValue(e.target.value)} sx={{flexGrow: 1}} autoFocus/>
        <Button variant={'outlined'}
                sx={{flexGrow: 0, marginLeft: '10px'}}
                onClick={() => sendMessage(user)}
        >Send</Button>
      </Grid>

    </Grid>
  );
};
