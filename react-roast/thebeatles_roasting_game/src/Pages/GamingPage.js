import React from "react";
import "../styles/dist/game.css";

function GamingPage() {
  const confirmGame = () => {
    const conf = prompt("You Sure?(yes or no)");
    const conf2 = conf.toLowerCase(); // eslint-disable-next-line
    if (conf2 == "yes") {
      const div_element = document.createElement("div");
      div_element.setAttribute("id", "game-box");
      div_element.style.width = "50%";
      div_element.style.height = "420px";
      document.getElementById("game_start").appendChild(div_element);
      document.getElementById("game-box").style.backgroundColor = "red";
      document.getElementById("game-box").style.color = "white";      
      document.getElementById("game-box").style.fontSize = "50px";

      const text_element = document.createTextNode("Player 1");
      document.getElementById('game-box').appendChild(text_element)
        

      const div_element2 = document.createElement("div");
      div_element2.setAttribute("id", "game-box-2");
      div_element2.style.width = "50%";
      div_element2.style.height = "420px";
      document.getElementById("game_start").appendChild(div_element2);
      document.getElementById("game-box-2").style.backgroundColor = "green";
      document.getElementById("game-box-2").style.color = "white";
      document.getElementById("game-box-2").style.fontSize = "50px";
      const text_element2 = document.createTextNode("Player 2");
      document.getElementById('game-box-2').appendChild(text_element2)


      document.getElementById("start-content").textContent =
        "Waiting for other player to start...";
      document.getElementById("game_start").style.display = "flex";
      document.getElementById("game-buttons").remove();
    } else {
      window.location.href = "/";
    }
  };
  return (
    <div>
      <div className="container">
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid justify-content-center align-items-center">
            <a className="navbar-brand" href="index.html">
              TheBeatles
            </a>
          </div>
        </header>
        <h3 className="d-flex justify-content-center align-items-center">
          Welcome to gaming page here you can play the roasting game and roast
          your opponent.
        </h3>
        <div className="gaming-page col-sm">
          <div className="content-div border">
            <div className="h1-text">
              <h1 className="start-content" id="start-content">
                Let's Start this game...
              </h1>
            </div>
            <div
              id="game-buttons"
              className="d-flex justify-content-center justify-content-evenly align-items-center"
            >
              <div className="start">
                <button className="btn btn-danger" onClick={confirmGame}>
                  <h4>Start this game</h4>
                </button>
              </div>
              <div className="back">
                <a href="/index.html">
                  <button className="btn btn-primary">
                    <h4>Go Back</h4>
                  </button>
                </a>
              </div>
            </div>
            <div id="game_start"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingPage;
