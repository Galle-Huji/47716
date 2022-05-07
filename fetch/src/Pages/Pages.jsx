import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Chats from "./Chats";
import Add from "./Add";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TouristOrLocal from "./TouristOrLocal";
import CitySelect from "./CitySelect";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/TouristOrLocal" element={<TouristOrLocal />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Browse" element={<Browse />} />
      <Route path="/Chats" element={<Chats />} />
      <Route path= "/CitySelect" element={<CitySelect />} />
    </Routes>
  );
}

export default Pages;
