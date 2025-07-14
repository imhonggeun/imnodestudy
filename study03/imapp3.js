var a =1;

for(a;a<10;a++){
    if(a%2==1)continue;
    //console.log(a,'단')
    console.log(`${a}단`)
    for(var b=1;b<10;b++){
        console.log(`${a} * ${b} = ${a*b}`)
    }
}