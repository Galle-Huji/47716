import React from "react";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";

function SingleChat({ ChatTitle, ChatMembers, LastMessege, ProfilePicture }) {
  return (
    //checkout listitembutton api
    <ListItemButton alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Profile Picture" src={ProfilePicture} />
      </ListItemAvatar>
      <ListItemText
        primary={ChatTitle}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {ChatMembers}
            </Typography>
            {LastMessege}
          </React.Fragment>
        }
      />
    </ListItemButton>
  );
}

export default SingleChat;
