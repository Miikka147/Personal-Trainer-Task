import React, { useState, useLayoutEffect, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Traininglist from './Traininglist'
import Slide from '@material-ui/core/Slide';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Customerstrainings(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [trainings, setTrainings] = useState([]);
  const [customer, setCustomer] = React.useState({
    firstname: '', lastname: '', streetaddress: '', city: '', postcode: '', email: '', phone: '', traininglink: ''
  })
  const handleClickOpen = () => {
    console.log(props.customer);
    setCustomer({firstname: props.customer.firstname, lastname:props.customer.lastname, streetaddress:props.customer.streetaddress, city:props.customer.city, postcode:props.customer.postcode, email:props.customer.email, phone:props.customer.phone, traininglink:props.customer.links[2].href})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Trainings
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
             
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Schedule for {customer.firstname} {customer.lastname}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Traininglist link={customer.traininglink}/>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
