import { useState } from "react";

const TODAY = formatDate(new Date());

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
}

export default function Booking() {
    const [options, setOptions] = useState('one-way');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const submitDetails = (event) => {
        event.preventDefault();
        console.log(startDate,endDate);
    }

    return (
        <>
            <select name="Fligh Options" id="flight" onChange={(event) => {
                setOptions(event.target.value)
            }}>
                <option value="one-way">One Way</option>
                <option value="two-way">Two Way</option>
            </select>
            <form onSubmit={submitDetails}>
                <input type="date" onChange={(event) => setStartDate(event.target.value)} min={TODAY} max={endDate}/>
                {
                    options === 'two-way' ?
                        <input type="date" onChange={(event) => setEndDate(event.target.value)} min={startDate} /> : null
                }

                <button>Submit</button>
            </form>
        </>
    )

}