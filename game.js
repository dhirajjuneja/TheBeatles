function confirmGame() {
  const name = prompt("You Sure?(yes or no)");
  const lname = name.toLowerCase();
  if(lname == 'yes'){
    console.log(name);
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Hello " + name);
    h1.setAttribute("id", "name_of_player");
    h1.appendChild(text);
    document.getElementById("game_start").appendChild(h1);
  }
  else{
    window.location.href = "index.html";
    window.location.href = "index.html";
  }
}