import { useState } from "react";

function Test() {
    
    let [name,updateName]= useState("Sarvesh");
    return(
        <div>
            <h2>Name of the student is: {name}</h2>
            <button onClick={()=>updateName("Sarvesh Shinde")}>State</button>
            <button onClick={()=>updateName("Sarvesh")}>Reset</button>
            
            

        </div>
    );
}

export default Test;