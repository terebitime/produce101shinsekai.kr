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
