
import React, { useState } from 'react';

function Room() {
    // const state = useState(true);
    // console.log(state);
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(23);

    function updateLit(){
        setLit(!isLit);        
        console.log("Button Clicked");
    }
    function updateAge(){        
        setAge(++age);
        console.log("Button Clicked");
    }
  return (
    <div>
      This is Room component: Lit = {isLit ? "lit" : "Dark"}
      <br/>
      My age is: {age}
      <br/>
      <button onClick={() => setLit(!isLit)} >Toggle Light</button>
      <br/>
      <button onClick={() => setAge(++age)} >Toggle Age</button>

    </div>
  );
}

export default Room;
