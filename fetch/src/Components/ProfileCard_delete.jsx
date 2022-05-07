import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./FakeData/imgs/panitan-punpuang-G99Lrxmc-LA-unsplash.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inbar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Random Modal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gals are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Go to Profile
          </Button>
        </CardActions> */}
        {/* <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        /> */}
      </Card>
      {/* <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="./FakeData/avatars/gal.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gals are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Go to Profile
          </Button>
        </CardActions>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Card>
    </div>
  );
}

// export default function ImgMediaCard() {
//   return (
// <Card sx={{ maxWidth: 345 }}>
//   <CardMedia
//     component="img"
//     alt="green iguana"
//     height="140"
//     image="./FakeData/avatars/gal.jpg"
//   />
//   <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//       Gal
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       Gals are a widespread group of squamate reptiles, with over 6,000
//       species, ranging across all continents except Antarctica
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small">Go to Profile</Button>
//   </CardActions>
// </Card>
//   );
// }
