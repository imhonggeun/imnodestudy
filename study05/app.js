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
//console.log(model);
//let data = model.model1; // data1.js 에서 받아옴

function view(data) {
    let html ="";
    for (const li of data) {
        let str ="";
        for(const div of li){
            str += `<div class="${div === 1 ? 'bg1' : 'bg2'}"></div>`;
        }
        html += `<li>${str}</li>`
    }
    document.getElementsByTagName("ul")[0].innerHTML = html;
}

function btn1() {
    view(model.model1)
}
function btn2() {
    view(model.model2)
}
function btn3() {
    view(model.model3)
}

// const btn1 = document.getElementById("1"); //index.htmldp 있는 버튼에 있는 ID 값 1번을호출
// btn1.addEventListener("click", view); //위에 view 함수를 적용한다

// const btn2 = document.getElementById("2"); //index.htmldp 있는 버튼에 있는 ID 값 2번을호출
// btn2.addEventListener("click", view); //위에 view 함수를 적용한다

// const btns = document.getElementsByTagName("button");
// for(const btn of btns) {
//     btn.addEventListener("click", view);
// }

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