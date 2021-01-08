function confirmGame() {
  document.getElementById("game_start").textContent = null;
  const conf = prompt("You Sure?(yes or no)");
  const conf2 = conf.toLowerCase();
  if (conf2 == "yes") {
    const name = prompt("Whats your name?");
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Hello " + name);
    h1.setAttribute("id", "name_of_player");
    h1.appendChild(text);
    document.getElementById("game_start").appendChild(h1);
  } else {
    window.location.href = "index.html";
  }
}
