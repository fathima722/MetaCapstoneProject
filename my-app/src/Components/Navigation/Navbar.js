import './Navbar.css';
import {Link, Routes, Route} from "react-router-dom";
import Ratings from '../Ratings/Ratings';
import Main from '../Main';
import BookingForm from '../Reservations/BookingForm';
import BookingPage from '../Reservations/BookingPage';
import React, {useReducer, useState} from 'react';

export const initializeTimes = () => {
    return ["18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state,action) => {
    switch(action.type) {
        case 'UPDATE_TIMES': 
        const selectedDate = new Date(action.payload);
        const day = selectedDate.getDay();
        const schedule = [
            // Sunday: Closed
        [],
        // Monday to Friday: Open from 9 AM to 5 PM with 1-hour intervals
        ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
        // Saturday: Open from 10 AM to 3 PM with 1-hour intervals
        ["10:00", "11:00", "12:00", "13:00", "14:00"]
        // Add more schedules for other days as needed
        ];
        const availableTime = schedule[day] || []
        return availableTime;
        default: return state;
    }

}

const Navbar = () => {

    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [guests,setGuests] = useState(1);
    const [occasion,setOccasion] = useState("");
    const [details,setDetails] = useState({date: '',time:'',guests:'',occasion:''});
    const [submitted, setSubmitted] = useState(false);

    const [availableTimes,dispatch] = useReducer(updateTimes,[],initializeTimes);

    function handleSubmit(newDetails) {
        setDetails(newDetails);
        //Due to asynchronous behavior of the setState function in React, when we call 'setDetails', the state update is scheduled but not immediately resflected. Hence console.log(details) right after setDetails will log the previous state.
        // To verify the data is being passed here correctly on click submit we declared a new object called newDetails
        console.log(newDetails,details); 
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        setSubmitted(true);
    }

    return (
        <>
           <nav>
            <ul class="flex-container">
                <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
                <li><Link to="/menu" style={{ textDecoration: "none" }}>Menu</Link></li>
                <li><Link to="/reservations" style={{ textDecoration: "none" }}>Reservations</Link></li>
                <li><Link to="/order-online" style={{ textDecoration: "none" }}>Order Online</Link></li>
                <li><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></li>
             </ul>
            </nav>
            <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Main />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/menu"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/reservations"
                        element={!submitted?<BookingForm
                            date={date}
                            setDate={setDate}
                            time={time}
                            setTime={setTime}
                            guests={guests}
                            setGuests={setGuests}
                            occasion={occasion}
                            setOccasion={setOccasion}
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            onSubmit={handleSubmit}
                          />  :<BookingPage details={details}/>}
                    />
                    <Route
                        exact
                        path="/order-online"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Ratings />}
                    />
                </Routes>
        </>
    )
}
export default Navbar;