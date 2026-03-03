// 1. 데이터 (119명 연습생 정보)
const trainees = [
    { name: "아담 나가이", img: "image/1.jpg" },
    { name: "나카마루 아쥬", img: "image/2.jpg" },
    { name: "엄 쑹카바띤", img: "image/3.jpg" },
    { name: "아처 위", img: "image/4.jpg" },
    { name: "시노가야 아유무", img: "image/5.jpg" },
    { name: "코바야시 치사토", img: "image/6.jpg" },
    { name: "카토 다이키", img: "image/7.jpg" },
    { name: "곽동민", img: "image/8.jpg" },
    { name: "스에카와 에이타", img: "image/9.jpg" },
    { name: "카네다 에이토", img: "image/10.jpg" },
    { name: "사쿠라이 후마", img: "image/11.jpg" },
    { name: "오기사와라 주제페 케이", img: "image/12.jpg" },
    { name: "쿠라하시 고텐", img: "image/13.jpg" },
    { name: "호리오 히지리", img: "image/14.jpg" },
    { name: "주케란 히로토", img: "image/15.jpg" },
    { name: "유현승", img: "image/16.jpg" },
    { name: "오카다 휴고", img: "image/17.jpg" },
    { name: "야나기야 잇사", img: "image/18.jpg" },
    { name: "윤재용", img: "image/19.jpg" },
    { name: "주앙 제이", img: "image/20.jpg" },
    { name: "마루오 진이치로", img: "image/21.jpg" },
    { name: "카와베 죠", img: "image/22.jpg" },
    { name: "신정욱", img: "image/23.jpg" },
    { name: "카네야스 준세이", img: "image/24.jpg" },
    { name: "우노 카이무", img: "image/25.jpg" },
    { name: "타비 카나데", img: "image/26.jpg" },
    { name: "요코야마 카나메", img: "image/27.jpg" },
    { name: "세키 케이지로", img: "image/28.jpg" },
    { name: "타카마츠 케이스케", img: "image/29.jpg" },
    { name: "오노 케이토", img: "image/30.jpg" },
    { name: "니시야마 켄토", img: "image/31.jpg" },
    { name: "카와이 코세이", img: "image/32.jpg" },
    { name: "테루이 코스케", img: "image/33.jpg" },
    { name: "아사카 코타로", img: "image/34.jpg" },
    { name: "타카야 쿄헤이", img: "image/35.jpg" },
    { name: "다나카 마키", img: "image/36.jpg" },
    { name: "야마네 무사시", img: "image/37.jpg" },
    { name: "츠치다 오스케", img: "image/38.jpg" },
    { name: "호리노 렌", img: "image/39.jpg" },
    { name: "코시미즈 렌", img: "image/40.jpg" },
    { name: "천리키", img: "image/41.jpg" },
    { name: "카미모토 리쿠", img: "image/42.jpg" },
    { name: "하토바 리쿠토", img: "image/43.jpg" },
    { name: "이마에 리쿠토", img: "image/44.jpg" },
    { name: "카이 리쿠야", img: "image/45.jpg" },
    { name: "오세 린토", img: "image/46.jpg" },
    { name: "우에노 루이", img: "image/47.jpg" },
    { name: "이이즈카 료가", img: "image/48.jpg" },
    { name: "이시다 료타", img: "image/49.jpg" },
    { name: "오카도 류가", img: "image/50.jpg" },
    { name: "스기야마 류지", img: "image/51.jpg" },
    { name: "카츠키 세이타", img: "image/52.jpg" },
    { name: "사와이 세나", img: "image/53.jpg" },
    { name: "오신행", img: "image/54.jpg" },
    { name: "이와키 신지", img: "image/55.jpg" },
    { name: "미야자키 신스케", img: "image/56.jpg" },
    { name: "니시자키 슈", img: "image/57.jpg" },
    { name: "야마시타 슈", img: "image/58.jpg" },
    { name: "박시영", img: "image/59.jpg" },
    { name: "사토 소라", img: "image/60.jpg" },
    { name: "토노 소타", img: "image/61.jpg" },
    { name: "후지마키 타이가", img: "image/62.jpg" },
    { name: "마츠다 타이가", img: "image/63.jpg" },
    { name: "카나쿠라 타쿠미", img: "image/64.jpg" },
    { name: "쿠마베 타쿠토", img: "image/65.jpg" },
    { name: "미야자토 타쿠토", img: "image/66.jpg" },
    { name: "미나미히라 타츠야", img: "image/67.jpg" },
    { name: "모리이 테루", img: "image/68.jpg" },
    { name: "키타바야시 테토라", img: "image/69.jpg" },
    { name: "후지요시 토키야", img: "image/70.jpg" },
    { name: "마스다 토모키", img: "image/71.jpg" },
    { name: "하마다 토와", img: "image/72.jpg" },
    { name: "아기날도 트리스탄 제임스", img: "image/73.jpg" },
    { name: "리 웨이저", img: "image/74.jpg" },
    { name: "요한 엠마누엘", img: "image/75.jpg" },
    { name: "야다 요시키", img: "image/76.jpg" },
    { name: "고토 유키", img: "image/77.jpg" },
    { name: "오카다 유마", img: "image/78.jpg" },
    { name: "아베 유라", img: "image/79.jpg" },
    { name: "오바야시 유세이", img: "image/80.jpg" },
    { name: "사노 유세이", img: "image/81.jpg" },
    { name: "이타쿠라 유타", img: "image/82.jpg" },
    { name: "혼죠 아키라", img: "image/83.jpg" },
    { name: "코지마 아유무", img: "image/84.jpg" },
    { name: "이치카와 다이키", img: "image/85.jpg" },
    { name: "카와무라 하쿠토", img: "image/86.jpg" },
    { name: "무라마츠 하루쿠", img: "image/87.jpg" },
    { name: "타카기 하루토", img: "image/88.jpg" },
    { name: "히라시마 히카루", img: "image/89.jpg" },
    { name: "사가와 히로카즈", img: "image/90.jpg" },
    { name: "이현재", img: "image/91.jpg" },
    { name: "아베 이츠키", img: "image/92.jpg" },
    { name: "이중훈", img: "image/93.jpg" },
    { name: "리우 카이치", img: "image/94.jpg" },
    { name: "쿠로사키 칸타", img: "image/95.jpg" },
    { name: "코 케이신", img: "image/96.jpg" },
    { name: "켄모츠 키나리", img: "image/97.jpg" },
    { name: "오자와 코신", img: "image/98.jpg" },
    { name: "아오누마 코시로", img: "image/99.jpg" },
    { name: "코바야시 코", img: "image/100.jpg" },
    { name: "모리 메이", img: "image/101.jpg" },
    { name: "마이클 민 맥카프리", img: "image/102.jpg" },
    { name: "패트릭 판 레", img: "image/103.jpg" },
    { name: "카사하라 렌", img: "image/104.jpg" },
    { name: "에구치 렌토", img: "image/105.jpg" },
    { name: "코바야시 렌토", img: "image/106.jpg" },
    { name: "오치아이 리오", img: "image/107.jpg" },
    { name: "미즈가미 루이", img: "image/108.jpg" },
    { name: "코야우치 루카", img: "image/109.jpg" },
    { name: "사이토 세이", img: "image/110.jpg" },
    { name: "후지모토 신세이", img: "image/111.jpg" },
    { name: "이이다 슈마", img: "image/112.jpg" },
    { name: "마츠다 소고", img: "image/113.jpg" },
    { name: "타카하시 소라", img: "image/114.jpg" },
    { name: "니시다 소시", img: "image/115.jpg" },
    { name: "오카모토 타쿠토", img: "image/116.jpg" },
    { name: "오사와 유고", img: "image/117.jpg" },
    { name: "후지이 유세이", img: "image/118.jpg" },
    { name: "오카모토 유토", img: "image/119.jpg" }
];

// 2. 전역 변수 설정
let top11 = [];
const top11Container = document.getElementById("top11");

window.onload = function() {
    initTraineeList();
    renderTop11();
};

function initTraineeList() {
    const listContainer = document.getElementById("trainee-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";
    trainees.forEach((trainee) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${trainee.img}"><p class="name-text">${trainee.name}</p>`;
        card.onclick = () => selectTrainee(trainee);
        listContainer.appendChild(card);
    });
}

function selectTrainee(trainee) {
    const isAlreadySelected = top11.some(item => item.name === trainee.name);
    if (isAlreadySelected) {
        alert("이미 선택된 연습생입니다."); 
        return;
    }
    if (top11.length >= 11) {
        alert("최대 11명까지만 선택할 수 있습니다.");
        return;
    }
    top11.push(trainee);
    renderTop11();
}

function renderTop11() {
    if (!top11Container) return;
    top11Container.innerHTML = "";
    const rows = [1, 2, 3, 5];
    let currentIdx = 0;
    rows.forEach((count) => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "pyramid-row";
        for (let i = 0; i < count; i++) {
            const trainee = top11[currentIdx];
            const slot = document.createElement("div");
            slot.className = "top-card-slot";
            if (trainee) {
                slot.innerHTML = `
                    <div class="image-container">
                        <img src="${trainee.img}">
                        <div class="rank-badge">${currentIdx + 1}</div>
                        <button class="remove-btn" onclick="event.stopPropagation(); removeTrainee(${currentIdx})">×</button>
                    </div>
                    <p class="name">${trainee.name}</p>`;
            } else {
                slot.innerHTML = `<div class="image-container empty"><div class="rank-badge">${currentIdx + 1}</div></div><p class="name">-</p>`;
            }
            rowDiv.appendChild(slot);
            currentIdx++;
        }
        top11Container.appendChild(rowDiv);
    });
}

function removeTrainee(index) {
    top11.splice(index, 1);
    renderTop11();
}

// ✅ 이미지 저장 기능 (정사각형 및 폰트 최종 수정)
async function saveAsImage() {
    const exportPyramid = document.getElementById("exportPyramid");
    const exportArea = document.getElementById("exportArea");
    
    if (top11.length === 0) {
        alert("연습생을 선택해 주세요!");
        return;
    }

    exportPyramid.innerHTML = "";
    const rows = [1, 2, 3, 5];
    let currentIdx = 0;

    rows.forEach(count => {
        const rowDiv = document.createElement("div");
        rowDiv.style.cssText = "display: flex; justify-content: center; gap: 35px; width: 100%;";
        for (let i = 0; i < count; i++) {
            const trainee = top11[currentIdx];
            const slot = document.createElement("div");
            slot.style.cssText = "width: 125px; text-align: center;";
            if (trainee) {
                slot.innerHTML = `
                    <div style="width: 115px; height: 115px; border-radius: 50%; border: 5px solid #0080ff; overflow: hidden; background: #fff; margin: 0 auto; position: relative;">
                        <img src="${trainee.img}" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); background: #0080ff; color: #fff; border-radius: 999px; font-weight: 900; font-size: 11px; padding: 4px 10px;">${currentIdx + 1}</div>
                    </div>
                    <div style="margin-top: 12px; font-size: 17px; font-weight: 900; color: #111;">${trainee.name}</div>
                `;
            } else {
                slot.innerHTML = `<div style="width: 115px; height: 115px; border-radius: 50%; background: #f0f0f0; margin: 0 auto;"></div>`;
            }
            rowDiv.appendChild(slot);
            currentIdx++;
        }
        exportPyramid.appendChild(rowDiv);
    });

    try {
        // 폰트가 완전히 로딩되도록 충분한 시간(1.2초) 대기
        await document.fonts.ready;
        await new Promise(resolve => setTimeout(resolve, 1200));

const canvas = await html2canvas(exportArea, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    width: 1000,          // 가로 1000px 고정
    height: 1000,         // 세로 1000px 고정
    windowWidth: 1000,    // 가상 창 가로 고정
    windowHeight: 1000,   // 가상 창 세로 고정
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: 0,
    logging: false
});
});

        const link = document.createElement("a");
        link.download = "TOP11_PICK.png";
        link.href = canvas.toDataURL("image/png", 1.0);
        link.click();
    } catch (e) {
        alert("저장에 실패했습니다.");
        console.error(e);
    }
}
