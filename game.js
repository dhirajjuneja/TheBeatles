function confirmGame() {
  document.getElementById("game_start").textContent = null;
  const conf = prompt("You Sure?(yes or no)");
  const conf2 = conf.toLowerCase();
  if (conf2 == "yes") {
    const div_element = document.createElement('div');
    div_element.setAttribute('id','game-box');
    document.getElementById('game_start').appendChild(div_element);
    document.getElementById('game-box').style.backgroundColor = 'red';
    document.getElementById('start-content').textContent = 'Waiting for other player to start...';
  } else {
    window.location.href = "index.html";
  }
}
