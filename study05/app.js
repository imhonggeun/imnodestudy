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
function view(){
    let html ="";
    for (const li of model){
        let str ="";
        for(const div of li){
            str += `<div class="${div === 1 ? 'bg1' : 'bg2'}"></div>`;
        }
        html += `<li>${str}</li>`
    }
    document.getElementsByTagName("ul")[0].innerHTML = html;
}

