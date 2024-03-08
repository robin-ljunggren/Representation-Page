import React, { useState } from 'react';
import GetLocale from '../../../Services/GetLocale';
import './CalendarWidget.css';

export default function CalendarWidget() {

  const [date, setDate] = useState(new Date());
  const [datesOfMonth, setDatesOfMonth] = useState([]);

  const month = date.getMonth();
  const year = date.getFullYear();
  // const lastDate = new Date(year, month + 1, 0).getDate();


  const sweMonths = ["Januari", "Februari", "Mars", "April", "Maj", "Juni",
                     "Juli", "Augusti", "September", "Oktober", "November", "December"];
  const engMonths = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];

  const localeLangCode = GetLocale.getLocaleLang();

  return (
    <div className='widget-container'>
      <div className='calendar-container'>
        <h5>{localeLangCode === "sv-SE" ? sweMonths[month] : engMonths[month]}</h5>
        <table className='weekdays'>
          <thead>
            <tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
          </thead>
        </table>
        <ul className='calendar-dates'>
          {datesOfMonth.map(day => <li className='list-item' key={day}>{day}</li>)}
        </ul>
      </div>
    </div>
  )
}
