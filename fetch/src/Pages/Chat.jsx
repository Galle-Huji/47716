import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import SendIcon from "@mui/icons-material/Send";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  // Avatar,
} from "@chatscope/chat-ui-kit-react";
import Avatar from "@mui/material/Avatar";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Fab } from "@mui/material";
function Chat() {
  return (
    <div>
      <Paper square="true" elevation={0} sx={{ p: 1, flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          spacing={0.5}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Avatar
            alt="Remy Sharp"
            src="/FakeData/avatars/gal.jpg"
            sx={{ width: 50, height: 50 }}
          />
          <box>
            <Typography
              sx={{
                position: "fixed",
                top: 65,
                left: 120,
              }}
            >
              {" "}
              Want to meet Gal?
            </Typography>
            <Typography
              sx={{
                position: "fixed",
                top: 85,
                left: 120,
              }}
            >
              {" "}
              Just hit the button
            </Typography>
          </box>
        </Grid>
      </Paper>
      <Divider />
      <Box
        sx={{
          maxWidth: 350,
          // margin: 0.5,
          width: 1,
          length: 1,
          // border: 1,
          // p: 1,
          // display: "block",
        }}
      >
        {/* <ConversationHeader>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <ConversationHeader.Content>
            <span
              style={{
                color: "#ec1212",
                alignSelf: "flex-center",
              }}
            >
              Custom content
            </span>
          </ConversationHeader.Content>
        </ConversationHeader> */}
        {/* 
        <Grid container justifyContent="flex-end">
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "just now",
              sender: "Joe",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "just now",
              sender: "Akane",
              direction: "outgoing",
              position: "single",
            }}
          />
        </Grid>
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
        <Grid container justifyContent="flex-end">
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "just now",
              sender: "Joe",
            }}
          />
        </Grid> */}
        <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
            direction: "incoming",
            position: "first",
          }}
        />
        <Message
          model={{
            message: "Want to meet for coffee?",
            sentTime: "just now",
            sender: "Joe",
            direction: "incoming",
            position: "last",
          }}
        />
        <Message
          model={{
            message: "Coffee? I love coffee!",
            sentTime: "just now",
            sender: "Akane",
            direction: "outgoing",
            position: "first",
          }}
        />
        <Message
          model={{
            message: "I'm in",
            sentTime: "just now",
            sender: "Akane",
            direction: "outgoing",
            position: "last",
          }}
        />
        <Message
          model={{
            message: "How about Tommorow, 18:00?",
            sentTime: "just now",
            sender: "Joe",
            direction: "incoming",
          }}
        />
        <Message
          model={{
            message: "Sounds good",
            sentTime: "just now",
            sender: "Akane",
            direction: "outgoing",
            position: "first",
          }}
        />
        <Message
          model={{
            message: "I'll schedule for us",
            sentTime: "just now",
            sender: "Akane",
            direction: "outgoing",
            position: "last",
          }}
        />
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        {" "}
        <TextField
          fullWidth
          id="standard-basic"
          label="Message"
          variant="standard"
          sx={{
            position: "fixed",
            bottom: 70,
            right: 50,
            width: 0.8,
          }}
        />
        <SendIcon
          color="secondary"
          sx={{
            position: "fixed",
            bottom: 80,
            right: 10,
          }}
        />
      </Grid>
      <Fab
        size="small"
        variant="extended"
        color="secondary"
        aria-label="add"
        onClick= {event =>  window.location.href='/Meeting'}
        sx={{
          position: "fixed",
          top: 75,
          right: 6,
        }}
      >
        SCHEDULE
      </Fab>
    </div>
  );
}

export default Chat;
