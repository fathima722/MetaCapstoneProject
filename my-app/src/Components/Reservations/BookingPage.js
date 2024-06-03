export default function BookingPage({details}) {
    return (
        <>
            <div>
                <h2>Reservation Summary</h2>
                <p>Date: {details.date}</p>
                <p>Time: {details.time}</p>
                <p>Number of Guests: {details.guests}</p>
                <p>Occasion: {details.occasion}</p>
            </div>
        </>
    )
}