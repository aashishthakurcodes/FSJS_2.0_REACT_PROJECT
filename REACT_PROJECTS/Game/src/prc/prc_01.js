import React, { useState } from "react";
import Scissors from "../prc/Scissor.png";
import Paper from "../prc/Paper.png";
import Rock from "../prc/Rock.png";

const Images = [
  { id: "rock", image: Rock, msg: "Rock", com: "Rock" },
  { id: "paper", image: Paper, msg: "Paper", com: " Paper" },
  { id: "scissor", image: Scissors, msg: "Scissors", com: "Scissor" },
];

const Img = () => {
  const [value, updated] = useState();
  const [image, setImage] = useState(null);

  const [randomImage, setRandomImage] = useState(null);
  const [randommsg, updatedmsg] = useState();

  // const [play, setplay] = useState(false);
  //Score Card
  const[win,setwin]=useState(0);
  const[lose,setlose]=useState(0);
  const[tie,settie]=useState(0);
  const[output,setoutput]=useState("");
  



  const clickresult=(image,randomImage,setoutput)=>{
    
    if (image && randomImage) {
      if (image === randomImage) {
       setoutput("It's a tie...😳!");
        settie(tie+1);
       
      } else if (
        (image === Paper && randomImage === Rock) ||
        (image === Rock && randomImage === Scissors) ||
        (image === Scissors && randomImage === Paper)
      ) {
        setoutput("Congrats You Win...😊🥇")
        setwin(win+1)
  
        
      } else {
        setoutput("You Lose...🥺!");
        setlose(lose+1)
        
      }
    }
  }
  
  const click = (e, msg, img, com) => {
    updated(msg);
    setImage(img);

    //Random Image by computer
    const randomIndex = Math.floor(Math.random() * Images.length);
    setRandomImage(Images[randomIndex].image);
    updatedmsg(Images[randomIndex].com);
    // setplay(true);

    const result = clickresult(img, Images[randomIndex].image,setoutput);
    setResult(result);
  };

  const[result,setResult]=useState(null)
  

  const refreshpage=()=>{
    window.location.reload();
  }

  return (
    <div className="main">
      
      <div className="Container">
        <h2>Click to choose..</h2>
        <span>Score_Card</span>
        <div className="scoreccard">
          
      <h3>Win :- {win}</h3>
        <h3>Lose :- {lose}</h3>
        <h3>Tie :- {tie}</h3>

      </div>
       
        <div className="imagecontainer">
          {Images.map((icons) => (
            <img
              key={icons.id}
              src={icons.image}
              alt={icons.id}
              onClick={
               (e) => click(e, `${icons.msg}`, icons.image, icons.com)
              }
            />
          ))}
        </div>

        <div className="data">
          <h2>Rock</h2>
          <h2>Paper</h2>
          <h2>Scissor</h2>
        </div>
      </div>

      <div className="msg">
        <div className="componenet">
          <h3>User</h3>
          <h3>Computer</h3>
          
        </div>

        <div className="user">
          <h2>{value}</h2>
          <h1>Vs</h1>
          <h2>{randommsg && <h3>{randommsg}</h3>}</h2>
        </div>
      </div>

      <div className="result">
        <div className="result_img">
          {image && <img src={image} alt="selected" />}
          {randomImage && <img src={randomImage} alt="random" />}
        </div>
        <div className="result_msg">
          <span>{output}</span>
          
        </div>
        
        <button onClick={refreshpage}>New Game</button>
      </div>
    </div>
  );
};

const Appvault = () => {
  return (
    <div>
      <Img />
    </div>
  );
};

export default Appvault;
