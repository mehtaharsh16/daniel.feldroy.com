import { useEffect, useRef, useState } from "react";

export default function Calculator() {
  const [rate, setRate] = useState(40);
  const [duration, setDuration] = useState(1);
  const [attendees, setAttendees] = useState(4);
  const [total, setTotal] = useState(rate * duration * attendees);

  function calcTotal(rate, duration, attendees) {
    setTotal(rate * duration * attendees);
  }

  function handleRateChange(event) {
    setRate(event.target.value);
    calcTotal(event.target.value, duration, attendees);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
    calcTotal(rate, event.target.value, attendees);
  }

  function handleAttendeeChange(event) {
    setAttendees(event.target.value);
    calcTotal(rate, duration, event.target.value);
  }

  return (
    <>
      <h1>Meeting Cost Calculator</h1>
      <p>
        <strong>Hourly Rate:</strong>{" "}
        <input type="int" onChange={handleRateChange} value={rate}></input>
      </p>
      <p>
        <strong>Duration</strong>:{" "}
        <input
          type="int"
          onChange={handleDurationChange}
          value={duration}
        ></input>
      </p>
      <p>
        <strong>Attendees: </strong>
        <input
          type="int"
          onChange={handleAttendeeChange}
          value={attendees}
        ></input>
      </p>
      <hr></hr>
      <h2>
        Total: $<span>{total}</span>
      </h2>
    </>
  );
}
