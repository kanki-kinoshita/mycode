const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 1025; i++) {
  const div = document.createElement("div");
  div.classList.add("pokemon");
  const span = document.createElement("span");
  span.innerText = `#${i}`;
  const img = document.createElement("img");
  img.src = `${baseURL}${i}.png`;
  //containerに画像を表示させる
  div.appendChild(img);
  div.appendChild(span);
  container.appendChild(div);
}
