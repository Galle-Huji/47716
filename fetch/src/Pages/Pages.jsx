import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Chats from "./Chats";
import Add from "./Add";
import ActualChat from "./ActualChat";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TouristOrLocal from "./TouristOrLocal";

function Pages() {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/TouristOrLocal" element={<TouristOrLocal />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Browse" element={<Browse />} />
      <Route path="/Chats" element={<Chats />} />
      <Route path="/ActualChat" element={<ActualChat />} />
    </Routes>
  );
}

export default Pages;
