import React, { useState } from 'react';
import GetLocale from '../../../Services/GetLocale';
import './CalendarWidget.css';

export default function CalendarWidget() {
  
  const localeLangCode = GetLocale.getLocaleLang();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (month, year) => {
    if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      return 29; // February has 29 days in a leap year
    } else {
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return daysInMonth[month];
    }
  };
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
  const firstDayOfMonth = getFirstDayOfMonth(selectedDate.getMonth(), selectedDate.getFullYear());

  const monthDays = Array.from({length: daysInMonth}, (_, i) => i + 1);
  const blanks = Array.from({length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1}, (_, i) => i);
                     
  const datesOfLanguage = {
    sweMonths: ["januari", "februari", "mars", "april", "maj", "juni", 
    "juli", "augusti", "september", "oktober", "november", "december"],

    sweDays: ["M", "T", "O", "T", "F", "L", "S"],

    engMonths: ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"],

    engDays: ["M", "T", "W", "T", "F", "S", "S"],
  };

  const weekdays = localeLangCode === 'sv-SE' ? datesOfLanguage.sweDays : datesOfLanguage.engDays;
  const months = localeLangCode === 'sv-SE' ? datesOfLanguage.sweMonths : datesOfLanguage.engMonths;

 

  // const handleMonthChange = (offset) => {
  //   const newDate = new Date(selectedDate);
  //   newDate.setMonth(selectedDate.getMonth() + offset);
  //   setSelectedDate(newDate);
  // };

  return (
    <div className='widget-container'>
      <div className='calendar-container'>
        <h5 className='calendar-header'>{months[selectedDate.getMonth()]}</h5>
        <div className="calendar-columns">
          {weekdays.map((weekday, index) => (
            <div className="calendar-weekdays" key={index}>{weekday}</div>
          ))}
          {blanks.map((_, index) => <div className="calendar-cells_blank" key={index}></div>)}
          {monthDays.map(date => <div className="calendar-cells" key={date}>{date}</div>)}
        </div>
        <div className='scheduled-events-container'>
          <div className='event-para-container'>
            <p>No events</p>
            <p>Enjoy your day!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
