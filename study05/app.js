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
let key = 0;
const start = 0;
const end = 4;

// 화면 출력 함수
function view(data) {
  if(target === "") {
    return;
  } else {
    data = model[target];
  }
  if (block(data)) {
    let html = "";
    for (let y = 0; y < data.length; y++) {
      const li = data[y];
      let str = "";
      for (let x = 0; x < li.length; x++) {
        const div = li[x];
        let bg = div === 1 ? 'bg1' : 'bg2';
        bg = (point[0] === y && point[1] === x) ? 'bg3' : bg;
        str += `<div class="${bg}"></div>`;
      }
      html += `<li>${str}</li>`;
    }
    document.getElementsByTagName("ul")[0].innerHTML = html;
  }
}
// 화면 전환 시 위치값 초기화
function reset() {
  point = [2, 0];
  key = 0;
}
// 버튼 이벤트 함수
function btn1() {
  target = "model1";
  reset();
  view();
}
function btn2() {
  target = "model2";
  reset();
  view();
}
function btn3() {
  target = "model3";
  reset();
  view();
}
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
  key = e.keyCode;
  switch (key) {
    case 37: // 왼쪽 이동
      if(point[1] - 1 >= start) {
        point = [point[0], point[1] - 1];
      } else {
        point = [point[0], end];
      }
      break;
    case 38 : // 위쪽 이동
      if(point[0] - 1 >= start) {
        point = [point[0] - 1, point[1]];
      } else {
        point = [end, point[1]];
      }
      break;
    case 39 : // 오른쪽 이동
      if(point[1] + 1 <= end) {
        point = [point[0], point[1] + 1];
      } else {
        point = [point[0], start];
      }
      break;
    case 40 : // 아래쪽 이동
      if(point[0] + 1 <= end) {
        point = [point[0] + 1, point[1]];
      } else {
        point = [start, point[1]];
      }
      break;
  }
  // 이동한 화면 출력
  view();
}
// 벽 확인 함수
function block(data) {
  const y = point[0];
  const x = point[1];
  if(data[y][x] === 1) {
    switch (key) {
      case 37: // 왼쪽 이동
        point = [point[0], point[1] + 1];
        break;
      case 38 : // 위쪽 이동
        point = [point[0] + 1, point[1]];
        break;
      case 39 : // 오른쪽 이동
        point = [point[0], point[1] - 1];
        break;
      case 40 : // 아래쪽 이동
        point = [point[0] - 1, point[1]];
        break;
    }
    return false;
  } 
  return true;
}
