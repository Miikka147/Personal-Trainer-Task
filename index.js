  
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigator from './components/Navigator';
import Customerlist from './components/Customerlist'
import Trainingcalendar from './components/Trainingcalendar'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Startpage() {
  return (
    <div className="Carshop">
     
      <AppBar position="static">
        <Toolbar>
       
         
          <Typography variant="h6" >
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <div>
        <Navigator />
      
        <Switch>
          <Route exact path="/components/Customerlist" component={Customerlist}/>
          <Route path="/components/Trainingcalendar" component={Trainingcalendar}/>
               
        </Switch>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default Startpage;
