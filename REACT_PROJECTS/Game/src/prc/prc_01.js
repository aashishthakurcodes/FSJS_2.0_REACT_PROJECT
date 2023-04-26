import React, { useState } from "react";
import Scissors from "../prc/Scissor.png";
import Paper from "../prc/Paper.png";
import Rock from "../prc/Rock.png";

const Images = [
  { id: "rock_01", image: Paper, msg: "You Choose Paper", com:"Computer choose Paper"},
  { id: "Rock_02", image: Rock, msg: "You Choose Rock", com:"Computer choose Rock" },
  { id: "scissor_03", image: Scissors, msg: "You Choose Scissors", com:"Computer choose Scissor....." },
];



const Img = () => {
    const [value, updated] = useState();
    const [image, setImage] = useState(null);
    const [randomImage, setRandomImage] = useState(null);
    const [randommsg,updatedmsg]=useState();
  
    const click = (e, msg, img,com) => {
      updated(msg);
      setImage(img);
    
      //Random Image by computer
      const randomIndex = Math.floor(Math.random() * Images.length);
      setRandomImage(Images[randomIndex].image);
      updatedmsg(Images[randomIndex].com)
    }
  
    let result = null;
    if (image && randomImage) {
      if (image === randomImage) {
        result = "It's a tie!";
      } else if (
        (image === Paper && randomImage === Rock) ||
        (image === Rock && randomImage === Scissors) ||
        (image === Scissors && randomImage === Paper)
      ) {
        result = "You Win!";
      } else {
        result = "You Lose!";
      }
    }
  
    return (
      <div>
        <div>
        {Images.map((icons) => (
          <img
            key={icons.id}
            src={icons.image}
            alt={icons.id}
            onClick={(e) => click(e, `${icons.msg}`,icons.image,icons.com)}
          />
        ))}
  
        <h1>{value}</h1>
        {randommsg && <h3>{randommsg}</h3>}
        {image && <img src={image} alt="selected" />}
        {randomImage && <img src={randomImage} alt="random" />}
        {result && <h2>{result}</h2>}
       
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
