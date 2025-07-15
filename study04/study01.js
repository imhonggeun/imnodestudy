//1번 완료

a=[1,1,1,1,1]

for (let y=0 ;y < a.length; y++){
    let l = "";
    for(let x=0; x<a.length; x++){
        //l += a[x]
        if( x<y ){
            l +="0";
        }else{
            l +="1";
        }
        
    }
    console.log(l)
}
    