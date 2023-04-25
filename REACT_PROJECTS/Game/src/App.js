import React from "react";

const App=()=>{
  const user="Rock";
  const computer=["Rock","Paper","Scissor"];
  const random=Math.floor(Math.random()*computer.length);
  let value=computer[random]

  console.log("User value is",user);
 console.log("Computer value is",value);

 if(value === user){
  console.log("Match draw");
 }

 else if(
(user === "Rock"  && value === "Scissor") ||
 (user === "Scissor"  && value==="Paper")||
 (user === "Paper"  && value === "Rock")){
  console.log("Congrats You win !!!!");

 }
 else{
  console.log("Try again");
 }
  return(
    <div>
      <h1>{user}</h1>
      <h1>{value}</h1>
     
    </div>
  )
}


export default App;