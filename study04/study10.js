//1번
const arr = [
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,0,0],
    [1,1,1,1,0],
    [1,1,1,1,1]
];

for (const row of arr) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

//2번
const arr = [
    [1,1,1,1,1],
    [1,1,1,1,0],
    [1,1,1,0,0],
    [1,1,0,0,0],
    [1,0,0,0,0]
];

for (const row of arr) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

//3번
const arr = [
    [0,0,0,0,1],
    [0,0,0,1,1],
    [0,0,1,1,1],
    [0,1,1,1,1],
    [1,1,1,1,1]
];

for (const row of arr) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}

//4번
const arr = [
    [1,1,1,1,1],
    [0,1,1,1,1],
    [0,0,1,1,1],
    [0,0,0,1,1],
    [0,0,0,0,1]
];

for (const row of arr) {
    let str = "";
    for (const value of row) {
        str += (value === 1) ? 'O' : 'X';
    }
    console.log(str)
}
//5번
