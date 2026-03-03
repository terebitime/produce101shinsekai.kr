// script.js 맨 위쪽 어딘가에 이 줄이 꼭 있어야 합니다!
const top11Container = document.getElementById("top11");
const traineeListContainer = document.getElementById("trainee-list");
let top11 = []; // 선택된 연습생을 담을 배열
function renderTop11() {
  top11Container.innerHTML = ""; // 기존 내용 초기화

  // 1. 피라미드 층별 구성 (1층: 1명, 2층: 2명, 3층: 3명, 4층: 5명)
  const rows = [1, 2, 3, 5];
  let currentIdx = 0;

  rows.forEach((count, rowIndex) => {
    // 각 층을 담당할 div 생성
    const rowDiv = document.createElement("div");
    rowDiv.className = `pyramid-row row-${rowIndex + 1}`;
    
    // 각 층에 들어갈 인원수만큼 반복
    for (let i = 0; i < count; i++) {
      const trainee = top11[currentIdx];
      const slot = document.createElement("div");
      slot.className = "top-card-slot"; // 슬롯 스타일

      if (trainee) {
        // 선택된 연습생이 있는 경우
        slot.innerHTML = `
          <div class="image-container">
            <img src="${trainee.img}" alt="${trainee.name}">
            <div class="rank-badge">${currentIdx + 1}</div>
          </div>
          <p class="name">${trainee.name}</p>
          <button class="remove-btn" onclick="removeTrainee(${currentIdx})">×</button>
        `;
      } else {
        // 아직 선택되지 않은 빈 자리인 경우
        slot.innerHTML = `
          <div class="image-container empty">
            <div class="rank-badge empty">${currentIdx + 1}</div>
          </div>
          <p class="name">-</p>
        `;
      }
      
      rowDiv.appendChild(slot);
      currentIdx++;
    }
    
    top11Container.appendChild(rowDiv);
  });
}

// 🔹 (추가 기능) 선택 취소 함수
function removeTrainee(index) {
  top11.splice(index, 1);
  renderTop11();
}
function saveAsImage() {
    const target = document.getElementById("top11");

    // 이미지가 하나도 없으면 경고
    if (top11.length === 0) {
        alert("먼저 연습생을 선택해주세요!");
        return;
    }

    html2canvas(target, {
        backgroundColor: "#ffffff", // 배경을 흰색으로
        useCORS: true,             // 깃허브 이미지 불러오기 허용
        scale: 2,                  // 고화질 설정
        logging: false             // 콘솔 로그 끄기
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "my-shinsekai-top11.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

// 페이지가 로드되면 실행되는 부분
window.onload = function() {
    // 1. 전체 연습생 리스트 그리기 (기존에 만드신 함수 이름이 init이라면 init())
    init(); 
    
    // 2. 빈 피라미드 그리기
    renderTop11();
};
