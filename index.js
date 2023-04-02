var choose = ["snake", "water", "gun"];
var images2=['snake.png','water.png','gun.png']

var result2 = document.getElementById("result1");

document.getElementById("rok").addEventListener("click", () => {
  document.getElementById("one").value = "snake";
  document.getElementById('play').setAttribute('src','snake.png')

  turncheck();
});
document.getElementById("ppr").addEventListener("click", () => {
  document.getElementById("one").value = "water";
  document.getElementById('play').setAttribute('src','water.png')

  turncheck();
});
document.getElementById("csr").addEventListener("click", () => {
  document.getElementById("one").value = "gun";
  document.getElementById('play').setAttribute('src','gun.png')

  turncheck();
});
document.getElementById("com").addEventListener("click", () => {
    let choosen = Math.floor(Math.random() * 3);
    document.getElementById('two').value = choose[choosen];
    document.getElementById('comp').setAttribute('src',images2[choosen])

  result();
});
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("one").value = "";

  document.getElementById("two").value = " ";
  result2.innerText = "";
  document.getElementById('ima').setAttribute('src','');
  document.getElementById('play').setAttribute('src','');
  document.getElementById('comp').setAttribute('src','')

  turncheck();
});

function turncheck() {
  document.getElementById("one").value.toLowerCase();
document.getElementById("two").value.toLowerCase();
  if (document.getElementById('one').value.length < 1) {
    document.getElementById('com').disabled = true;
  } else {
    document.getElementById('com').disabled = false;
  }
}
turncheck();

function result() {
  
  if (document.getElementById("two").value ==  document.getElementById("one").value) {
    result2.innerText = "Tie";
  } else if ( document.getElementById("one").value == "snake" && document.getElementById("two").value == "water") {
    result2.innerText = "you won";
  } else if ( document.getElementById("one").value == "snake" && document.getElementById("two").value == "gun") {
    result2.innerText = "computer won";
  } else if ( document.getElementById("one").value == "water" && document.getElementById("two").value == "snake") {
    result2.innerText = "computer won";
  } else if ( document.getElementById("one").value == "water" && document.getElementById("two").value == "gun") {
    result2.innerText = "you won";
  } else if ( document.getElementById("one").value == "gun" && document.getElementById("two").value == "snake") {
    result2.innerText = "you won";
  } else if ( document.getElementById("one").value == "gun" && document.getElementById("two").value == "water") {
    result2.innerText = "computer won";
  }

  if(result2.innerText=="computer won"){
    document.getElementById('result1').style.color="white";
    document.getElementById('ima').setAttribute('src','com.png')
  }
  else if(result2.innerText=="you won"){
    document.getElementById('result1').style.color="white"
    document.getElementById('ima').setAttribute('src','use.png')

  }else{
    document.getElementById('result1').style.color="white";
    document.getElementById('ima').setAttribute('src','tie.png')


  }
}
