let selected = [];

const list = document.getElementById("trainee-list");
const countText = document.getElementById("count");

trainees.forEach((t, index) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${t.img}">
    <p>${t.name}</p>
  `;
  div.onclick = () => toggleSelect(t, div);
  list.appendChild(div);
});

function toggleSelect(t, element) {
  if (selected.includes(t)) {
    selected = selected.filter(x => x !== t);
    element.classList.remove("selected");
  } else {
    if (selected.length >= 11) {
      alert("11명까지만 선택 가능!");
      return;
    }
    selected.push(t);
    element.classList.add("selected");
  }
  countText.innerText = `${selected.length} / 11 선택됨`;
}

function generateTop11() {
  const result = document.getElementById("result");
  result.innerHTML = "";

  selected.forEach((t, index) => {
    const div = document.createElement("div");
    div.className = index === 0 ? "top1" : "top";
    div.innerHTML = `
      <div class="rank">${index + 1}</div>
      <img src="${t.img}">
      <p>${t.name}</p>
    `;
    result.appendChild(div);
  });
}

function downloadImage() {
  html2canvas(document.querySelector("#result-wrapper"))
    .then(canvas => {
      const link = document.createElement("a");
      link.download = "top11.png";
      link.href = canvas.toDataURL();
      link.click();
    });
}
