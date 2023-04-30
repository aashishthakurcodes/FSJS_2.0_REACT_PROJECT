
//Its only used for practice...igonre it
import React, { useState } from "react"

const Data=()=>{
  const user="Rock";
  const computer=["Rock","Paper","Scissor"];
 

  const[value, setvalue]=useState("")
  const[data,setdata]=useState(output[0]);

//Scorecard
  const[tie,settie]=useState(0);
  const[lose,setlose]=useState(0);
  const[win,setwin]=useState(0);
   
  
 const handleclick=()=>{
  const randomfunc=Math.floor(Math.random()*computer.length);
  const output= computer[randomfunc]
  if(user===output){
    setvalue("Its tie");
    settie(tie+1);
    setdata(output)
    
 }
 else if(
 (user==="Rock" && output==="Scissor")||
 (user==="Paper" && output==="Rock")||
 (user==="Scissor" && output==="Paper")){
  setvalue("congrats you won")
  setwin(win+1)
 
 }
 else{
  setvalue("You lose")
  setlose(lose+1)
  
 }
 } 

 
  return(
    <div>
      <h1>Hello world</h1>
      <h1>User:-{user}</h1>
      <h1>{data}</h1>
      <h1>{value}</h1>
      <h1>lose:-{lose}</h1>
      <h1>Tie:-{tie}</h1>
      <h1>Win:-{win}</h1>
       <button onClick={handleclick} >Click</button>
    </div>
  )
}

export default Data;