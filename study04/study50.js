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
