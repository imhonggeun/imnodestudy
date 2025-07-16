const model1 = [
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,0,1,0]
];
const model2 = [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0]
];
const model3 = [
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,0]
];

const model = { model1,model2,model3 } // model1 : model1 이렇게 사용해야되지만 같은 값이면 하나로 사용가능

// CommonJS 방식
//module.exports = model;

// ES6 방식
export default model;
