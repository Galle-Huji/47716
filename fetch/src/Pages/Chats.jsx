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
// import FakeJsonData from "../ChatsData.json";

export default function AlignItemsList() {
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
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        align: "center",
      }}
    >
      {ChatsData.map((chat) => (
        <div key={chat.ChatTitle}>
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
  );
}

// export default function AlignItemsList() {
//   return (
//     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: "inline" }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {" — Do you have Paris recommendations? Have you ever…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   );
// }
