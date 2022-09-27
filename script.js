let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let parrafito = document.querySelector("parrafito");
let pid = document.querySelector("#pid");
let input= document.querySelector("input");

console.log(h1);

console.log({h1,
p,
parrafito,
pid,
input,
});

h1.innerHTML = "patito <br> feo";
console.log(h1.getAttribute("class"));
h1.setAttribute("class","rojo")
h1.classList.add ("rojo");

input.value = "456"

let img = (document.createElement("img"))
img.setAttribute("src","https://64.media.tumblr.com/46fa7162c8a5763702015dad1205cdc3/tumblr_pmy7t8o1VW1uzrbt8_640.jpg");
console.log(img)