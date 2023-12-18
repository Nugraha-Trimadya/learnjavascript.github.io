
let PPK = 84;
let BING = 91;
let MATH = 76;
let SCIENCE = 52;
let SUNDA = 17;
let rata2 = (PPK + BING + MATH + SCIENCE + SUNDA) /5;
 if(rata2 >= 90 && rata2 <= 100){
    grade ="A"
 } else if(rata2 >= 80 && rata2 <= 90){
    grade ="B"
 } else if(rata2 >= 75 && rata2 <= 80){
    grade ="C"
 } else if(rata2 >= 71 && rata2 <= 75){
    grade ="D"
 } else if(rata2 >= 60 && rata2 <= 71){
    grade ="E"
 }else{
    grade ="Kurang Kompeten"
 }
 console.log(rata2)
 console.log(grade)