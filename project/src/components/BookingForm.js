import React from "react";
import { useState } from "react";
import "./BookingForm.css";
import axios from "axios";

const BookingForm = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    
    const [date, setDate] = useState(''); // State to store the selected date
    const handledate = (e) => {
    setDate(e.target.value); // Update the state when the date is selected
    };

    const [time, setTime] = useState(''); // State to store the selected option
    const handletime = (e) => {
      setTime(e.target.value); // Update the state when an option is selected
    };

    const [guest, setGuest] = useState(''); // State to store the selected option
    const handleguest = (e) => {
      setGuest(e.target.value); // Update the state when an option is selected
    };

    const [occasion, setOccasion] = useState(''); // State to store the selected option
    const handleoccasion = (e) => {
      setOccasion(e.target.value); // Update the state when an option is selected
    };

    const [table, setTable] = useState(''); // State to store the selected option
    const handletable = (e) => {
      setTable(e.target.value); // Update the state when an option is selected
    };

    const [req, setReq] = useState(''); // State to store the selected option
    const handlereq = (e) => {
      setReq(e.target.value); // Update the state when an option is selected
    };

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      // Do something with the selected option, for example, send it to the server or perform an action
      //console.log('Name :', name, "|",'Email :', email, "|",'Date :', date, "|",'Time :', time, "|",'Number of Guests :', guest, "|",'Occasion :', occasion, "|",'Table Preference :', table, "|",'Additional Request :', req, "|" );
      const data={
        Name:name,
        Email:email,
        Date:date,
        Time:time,
        Guest:guest,
        Occasion:occasion,
        Table:table,
        Request:req,
      }
      axios.post('https://sheet.best/api/sheets/8f2b6a0d-6c2d-4b1d-88ce-204e5eedcba5', data).then((response)=>
      {console.log(response);
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setGuest('');
        setOccasion('');
        setTable('');
        setReq('');
      })
    };

  return (
    <form autoComplete="off" className='reservation-form' onSubmit={handleSubmit}>
      <div className="column">
      <label>Name
      <input type='text' placeholder="Enter your name" required 
      className='form-control'
      onChange={(e)=>setName(e.target.value)} value={name}/>
      </label>
      <label>Email
      <input type='email' placeholder="Enter your Email" required 
      className='form-control' 
      onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </label>
      <label>Date
      <input type='date' 
      value={date}
      onChange={handledate}
      required className='form-control' />
      </label>
      <label>
      Enter Time
      <select value={time} onChange={handletime} className='form-control'>
      <option value="12:30">12:30</option>         
      <option value="01:30">01:30</option>
      <option value="02:30">02:30</option>
      <option value="03:30">03:30</option>
      </select>
      </label> 
      </div>

      <div className="column">
      <label>
      Number of Guests
      <select value={guest} onChange={handleguest} className='form-control'>
      <option value="1">1</option>         
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>         
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      </select>
      </label> 

      <label>
      Occasion
      <select value={occasion} onChange={handleoccasion} className='form-control'>
      <option value="Birthday">Birthday</option>         
      <option value="Marriage">Marriage</option>
      <option value="Party">Party</option>
      <option value="Family function">Family function</option>
      </select>
      </label> 

      <label>
      Table Preference
      <select value={table} onChange={handletable} className='form-control'>
      <option value="Inside">Inside</option>         
      <option value="Outside">Outside</option>
      </select>
      </label> 

      </div> 

      <div className="column">
        <label>
          Additional requests
          <textarea
            name="message"
            cols="30"
            rows="10px"
            className='form-control'
            placeholder="Enter your request here..."
            value={req}
            onChange={handlereq}
          ></textarea>
        </label>
      </div>

      <div className="submit-container">
        <button type='submit'>Make Reservation</button>
      </div>
 
    </form>  
    );
};

export default BookingForm;
