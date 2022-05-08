import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Chats from "./Chats";
import Add from "./Add";
import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import TouristOrLocal from "./TouristOrLocal";
import CitySelect from "./CitySelect";
import Chat from "./Chat";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/SignUp" element={<SignUp />} /> */}
      <Route path="/TouristOrLocal" element={<TouristOrLocal />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Browse" element={<Browse />} />
      <Route path="/Chats" element={<Chats />} />
      <Route path="/CitySelect" element={<CitySelect />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/CitySelect" element={<CitySelect />} />
      <Route path="/Meeting" element={<Meeting />} />
    </Routes>
  );
}

export default Pages;
