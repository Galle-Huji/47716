import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Chats from "./Chats";
import Chat from "./Chat";
import Add from "./Add";
import SignIn from "./SignIn";
import TouristOrLocal from "./TouristOrLocal";
import CitySelect from "./CitySelect";
import Meeting from "./Meeting";
import Profile from "./Profile"

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/TouristOrLocal" element={<TouristOrLocal />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Browse" element={<Browse />} />
      <Route path="/Chats" element={<Chats />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path= "/CitySelect" element={<CitySelect />} />
      <Route path="/Meeting" element={<Meeting/>} />
      <Route path="/Profile" element={<Profile/>} />
    </Routes>
  );
}

export default Pages;
