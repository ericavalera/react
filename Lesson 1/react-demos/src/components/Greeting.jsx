import React, { useState } from 'react'

function getDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
}
const Greeting = () => {
const greeting = "Hello, ";
const name = "Erica";
const [currentDate, setCurrentDate] = useState(getDate());
   
  return (
    <div>
      <h1>{greeting}{name}</h1>
      <p>{currentDate}</p>
    </div>
  );
};

export default Greeting;
