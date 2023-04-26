import React, { useState } from "react";
import Scissors from "../prc/Scissor.png";
import Paper from "../prc/Paper.png";
import Rock from "../prc/Rock.png";


const Images=
[
{id:"Paper",img:Paper,user_msg:"You choose Paper "},
{id:"Rock",img:Rock,user_msg:"You choose Rock "},
{id:"Scissors",img:Scissors,user_msg:"You choose Scissors"}
]

const Main_component=()=>{
   const[value,setvalue]=useState("");
   const[initial,updatedimg]=useState();

   const[random_img,set_img]=useState()


   const btnclick=(e,user,img)=>{
    setvalue(user)
    updatedimg(img)

    const random=Math.floor(Math.random()*Images.length);
    set_img(Images[random].img)
   }


   
  
   
    return(
        <div>
            <h1>Hello world</h1>
            {Images.map((icons)=>(
            <div>
                {/* <h1>{icons.user_msg}</h1>
                <h1>{icons.id}</h1> */}
                <img src={icons.img} key={icons.id} alt="Logo" onClick={(e)=>btnclick(e,`${icons.user_msg} `,icons.img)} />
                
            </div>
            
            ))}
            <h3>{value}</h3>
            <img  src={initial} alt="Imgae"/>
            <img  src={random_img} alt="Imgae"/>
            
        </div>
    )
}

export default Main_component;