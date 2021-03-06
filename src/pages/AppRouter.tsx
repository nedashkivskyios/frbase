import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {CHAT_PATH, SIGN_IN_PATH, SIGN_UP_PATH} from "../config/constants";
import {Chat} from "../components/Chat";
import {SignIn} from "../components/SignIn";
import {SignUp} from "../components/SignUp";
import {AppContext} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const AppRouter = () => {
  const {auth} = useContext(AppContext)
  const [user] = useAuthState(auth)
  if (user) {
    return (
      <Routes>
        <Route path={CHAT_PATH} element={<Chat/>}/>
        <Route path={'*'} element={<Navigate to={CHAT_PATH}/>}/>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path={SIGN_IN_PATH} element={<SignIn/>}/>
      <Route path={SIGN_UP_PATH} element={<SignUp/>}/>
      <Route path={'*'} element={<Navigate to={SIGN_IN_PATH}/>}/>
    </Routes>
  )

};
