// import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SingleChat from "../Components/SingleChat";
import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
// import FakeJsonData from "../ChatsData.json";

export default function Chats() {
  const [ChatsData, setChatsData] = useState([]); //this method will load actual data with fetch in the future
  useEffect(() => {
    getChatsData();
  }, []);

  const getChatsData = async () => {
    const response = await fetch(`./FakeData/ChatsData.json`);
    const data = await response.json();
    setChatsData(data.Chats);
  };

  // let jsonData = FakeJsonData;
  console.log(ChatsData);

  return (
    <div>
      <Box
        sx={{
          // TODO make static over list
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            align: "center",
          }}
        >
          <Typography variant="button" sx={{ textAlign: "center" }}>
            Inbox({ChatsData.length})
          </Typography>
        </Paper>
      </Box>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          align: "center",
        }}
      >
        {ChatsData.map((chat) => (
          <div key={chat.ChatTitle}
          onClick= {event =>  window.location.href='/chat'}>
            <SingleChat
              ChatTitle={chat.ChatTitle}
              ChatMembers={chat.ChatMembers}
              LastMessege={chat.LastMessege}
              ProfilePicture={chat.ProfilePicture}
              
            />
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </div>
  );
}
