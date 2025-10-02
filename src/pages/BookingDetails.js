import { useState } from "react";

export default function BookingDetails() {
    const [bookingData , setBookingData] = useState({});

    const fetchData = () => {
      
        fetch('http://192.168.31.135:8080/api/v1/hotel/getbooking?id=2')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok '+response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setBookingData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });


    }

 
    return (
        <div>
            <h1>Booking Details</h1>
            <button onClick={fetchData}>Fetch Booking Details</button>

            {bookingData && bookingData.id && (
                <div>
                    <h2>Booking ID: {bookingData.id}</h2>
                    <p>Room Id : {bookingData.roomId}</p>
                    <p>Room Number: {bookingData.roomNo}</p>
                    <p>Feedback: {bookingData.feedback}</p>
                    <p>Check-in Date: {bookingData.checkIn}</p>
                    <p>Check-out Date: {bookingData.checkOut}</p>
                </div>
            )}
        </div>
    );
}
