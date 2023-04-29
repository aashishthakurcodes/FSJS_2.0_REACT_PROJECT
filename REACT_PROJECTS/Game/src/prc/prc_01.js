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

  const [play, setplay] = useState(false);
  

  const click = (e, msg, img, com) => {
    updated(msg);
    setImage(img);

    //Random Image by computer
    const randomIndex = Math.floor(Math.random() * Images.length);
    setRandomImage(Images[randomIndex].image);
    updatedmsg(Images[randomIndex].com);
    setplay(true);
  };

  let result = null;
  if (image && randomImage) {
    if (image === randomImage) {
      result = "It's a tie...😳!";
      // settie((tie+1))
      // setresult(results+1)
    } else if (
      (image === Paper && randomImage === Rock) ||
      (image === Rock && randomImage === Scissors) ||
      (image === Scissors && randomImage === Paper)
    ) {
      result = "Congrats You Win...😊🥇";
      // setresult(results+1)
    } else {
      result = "You Lose...🥺!";
      // setresult(results+1)
    }
  }

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="main">
      <div className="Container">
        <h1>Click to choose..</h1>
        {/* <span>{results}</span> */}
        {/* <span>{tie}</span>
        <span>{lose}</span> */}
        <div className="imagecontainer">
          {Images.map((icons) => (
            <img
              key={icons.id}
              src={icons.image}
              alt={icons.id}
              onClick={
                play
                  ? null
                  : (e) => click(e, `${icons.msg}`, icons.image, icons.com)
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
          <span>{result && <h3>{result}</h3>}</span>
        </div>
        <button onClick={refresh}>Try Again</button>
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
