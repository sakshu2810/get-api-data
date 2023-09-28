import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:any) => ({
  userCard: {
    width: "250px",
    height: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content horizontally
    padding: theme.spacing(1.5),
    margin: theme.spacing(1.5),
    textAlign: "center",
  },
  avatar: {
    width: "60px",
    height: "60px",
    fontSize: "30px",
    backgroundColor: "#2196F3", // Customize the background color
    color: "white",
    marginBottom: theme.spacing(2),
  },
  userInfo: {
    marginTop: theme.spacing(1),
  },
}));

function UserCard(user:any) {
  const classes = useStyles();
  const initials = user.user.username.slice(0, 2).toUpperCase();

  return (
    <Paper elevation={3} className={classes.userCard}>
      <Avatar className={classes.avatar}>{initials}</Avatar>
      <Typography variant="h6" className={classes.userInfo}>
        {user.user.name}
      </Typography>
      <div>
        <Typography className={classes.userInfo}>
          Username: {user.user.username}
        </Typography>
        <Typography className={classes.userInfo}>
          Email: {user.user.email}
        </Typography>
        <Typography className={classes.userInfo}>
          Phone: {user.user.phone}
        </Typography>
        <Typography className={classes.userInfo}>
          Website: {user.user.website}
        </Typography>
      </div>
    </Paper>
  );
}

export default UserCard;
