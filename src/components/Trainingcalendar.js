import React from 'react';
import { render } from 'react-dom';
import Trainingevents from './Events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);
export default function Trainingcalendar() {

const allViews = Object
  .keys(BigCalendar.Views)
  .map(k => BigCalendar.Views[k])

const App = () => (
  <div style={{ height: 700 }}>
    <BigCalendar
      events={Trainingevents}
      step={60}
      views={allViews}
      defaultDate={new Date(2020, 7, 28)}
    />
  </div>
);

return(<App />)
}