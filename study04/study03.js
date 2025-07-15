//3번

a=[1,1,1,1,1]

for (let y=0 ;y < a.length; y++){
    let l = "";
    for(let x=0; x<a.length; x++){
        if( x>=(4-y)){
            l +="0";
        }else{
            l +="1";
        
        }
        //행 += 'O' if x <= (4 - y) else 'X'
    }
    console.log(l)
}
    