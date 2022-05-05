import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Chats from "./Chats";
import Add from "./Add";

function Pages() {
  return (
    <Routes>
      <Route path="/Add" element={<Add />} />
      <Route path="/" element={<Browse />} />
      <Route path="/Chats" element={<Chats />} />
    </Routes>
  );
}

export default Pages;
