import React, { useState } from "react";
import Scissors from "../prc/Scissor.png";
import Paper from "../prc/Paper.png";
import Rock from "../prc/Rock.png";

const Images = [
  { id: "rock_01", image: Paper, msg: "Paper", com: " Paper" },
  { id: "scissor_03", image: Scissors, msg: "Scissors", com: "Scissor" },
  { id: "Rock_02", image: Rock, msg: "Rock", com: "Rock" },
];



const Img = () => {
  const [value, updated] = useState();
  const [image, setImage] = useState(null);

  const [randomImage, setRandomImage] = useState(null);
  const [randommsg, updatedmsg] = useState();

  const click = (e, msg, img, com) => {
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
    <div className="main">
      <div className="Container">
        <h1>Choose..</h1>
        <div className="imagecontainer">
          {Images.map((icons) => (
            <img
              key={icons.id}
              src={icons.image}
              alt={icons.id}
              onClick={(e) => click(e, `${icons.msg}`, icons.image, icons.com)}
            />

          ))}

        </div>

        <div className="data">

          <h2>Paper</h2>
          <h2>Scissor</h2>
          <h2>Rock</h2>
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
        <span>{result && <h3>{result}</h3>}</span>
        </div>

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
