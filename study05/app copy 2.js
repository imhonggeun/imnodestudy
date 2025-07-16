// 모듈 사용하기
/***********************************************
 * 사용할 객체 : const model = {};
 ***********************************************/ 
//const model = {};

/***********************************************
 * CommonJS : 사용법
 * 내보내기 : module.exports = model;
 * 가져오기 : const model = require("경로 + 파일");
 * HTML 바로 사용 불가
 ***********************************************/ 
//const model = require("./data/data1.js");

/***********************************************
 * ES6 : 사용법
 * 내보내기 : export default model;
 * 가져오기 : import model from "경로 + 파일";
 * HTML 사용 : `type="module"` 속성 필요
 ***********************************************/
import model from "./data/data1.js"; 

// 데이터 확인
// console.log(model);

// 전역 변수 설정
let target = "";
let point = [2, 0];
const start = 0;
const end = 4;

// 화면 출력 함수
function view(data) {
    if(target === "") {
        return;
    } else {
        data = model[target];
    }
    let html = "";
    for (let y = 0; y < data.length; y++) {
        const li = data[y];
        let str = "";
        for (let x = 0; x < li.length; x++) {
            const div = li[x];
            let bg = div === 1 ? 'bg1' : 'bg2';
            if(point[0] === y && point[1] === x) {
                bg = 'bg3';
            }
            str += `<div class="${bg}"></div>`;
        }
        html += `<li>${str}</li>`;
    }
    document.getElementsByTagName("ul")[0].innerHTML = html;
}

// 버튼 이벤트 함수
function btn1() {
    target = "model1";
    view();
}
function btn2() {
    target = "model2";
    view();
}
function btn3() {
    target = "model3";
    view();
}

// const btn1 = document.getElementById('1');
// btn1.addEventListener("click", view);

// const btn2 = document.getElementById('2');
// btn2.addEventListener("click", view);

// 전체 버튼 이벤트 적용
const btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
    if(i === 0) {
        btns[i].addEventListener("click", btn1);
    } else if(i === 1) {
        btns[i].addEventListener("click", btn2);
    } else if(i === 2) {
        btns[i].addEventListener("click", btn3);
    }
}

// 키보드 이벤트 설정
window.onkeydown = function(e) {
    if (target === "") return; // 아무 모델도 선택하지 않았다면 무시

    const data = model[target];
    let [y, x] = point;

    switch (e.keyCode) {
        case 37: { // 왼쪽
            const newX = (x - 1 >= start) ? x - 1 : end;
            if (data[y][newX] !== 1) point = [y, newX];
            break;
        }
        case 38: { // 위
            const newY = (y - 1 >= start) ? y - 1 : end;
            if (data[newY][x] !== 1) point = [newY, x];
            break;
        }
        case 39: { // 오른쪽
            const newX = (x + 1 <= end) ? x + 1 : start;
            if (data[y][newX] !== 1) point = [y, newX];
            break;
        }
        case 40: { // 아래
            const newY = (y + 1 <= end) ? y + 1 : start;
            if (data[newY][x] !== 1) point = [newY, x];
            break;
        }
    }
    // 이동한 화면 출력
    view();
}
