// //keyword let/const namaVariabel = value;
// //variabel adalah tempat menyimpan nialai/value;
// //nilai adalah isi dari variabel;
// let MATH = 90;
// let BING = 82;
// let DPK = 86;
// let mean = (MATH + BING + DPK) /3;
// console.log(mean)

// //codingan logika
// if(mean > 85){
//     grade ='A'
// }else if(mean > 70){
//     grade ='B'
// }else if(mean > 60){
//     grade ='C'
// }else if(mean > 40){
//     grade ='D'
// }else{
//     grade ='E'
// }
// console.log(grade)



//for 0-50
for(let i = 1 ; i <= 50 ; i++){
    document.write('<p>angka:'+i+'</p>')
}


//for 50-0
for(let i = 50 ; i > 0 ; i--){
    document.write('<p>angka:'+i+'</p>')
}


//while 0-50
 i = 0
while(i <= 50){
    console.log('angka' + i)
    i++
}

//while 10-0
 a = 50
while(a >= 0){
    console.log('angka' + a)
    a--
}
//do-while
p = 2023
do{
    p--
    console.log(p)
}while(p > 1999)