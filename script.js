const traineeList = document.getElementById("trainee-list");
const top11Container = document.getElementById("top11");

let top11 = [];

// 🔹 연습생 전체 출력
trainees.forEach((trainee, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${trainee.img}" alt="${trainee.name}">
    <p>${trainee.name}</p>
  `;

  card.addEventListener("click", () => selectTrainee(trainee));

  traineeList.appendChild(card);
});

// 🔹 선택 함수
function selectTrainee(trainee) {
  // 이미 선택된 경우 무시
  if (top11.includes(trainee)) return;

  // 11명 초과 방지
  if (top11.length >= 11) {
    alert("TOP11은 최대 11명까지 선택 가능!");
    return;
  }

  top11.push(trainee);
  renderTop11();
}

// 🔹 TOP11 화면 출력
function renderTop11() {
  top11Container.innerHTML = "";

  top11.forEach((trainee, index) => {
    const card = document.createElement("div");
    card.className = "top-card";

    card.innerHTML = `
      <div class="rank">${index + 1}</div>
      <img src="${trainee.img}" alt="${trainee.name}">
      <p>${trainee.name}</p>
    `;

    top11Container.appendChild(card);
  });
}
