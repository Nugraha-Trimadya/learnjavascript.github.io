// // Nilai rata rata
// let PPK = 84;
// let BING = 91;
// let MATH = 76;
// let SCIENCE = 52;
// let SUNDA = 17;
// let rata2 = (PPK + BING + MATH + SCIENCE + SUNDA) /5;
//  if(rata2 >= 90 && rata2 <= 100){
//     grade ="A"
//  } else if(rata2 >= 80 && rata2 <= 90){
//     grade ="B"
//  } else if(rata2 >= 75 && rata2 <= 80){
//     grade ="C"
//  } else if(rata2 >= 71 && rata2 <= 75){
//     grade ="D"
//  } else if(rata2 >= 60 && rata2 <= 71){
//     grade ="E"
//  }else{
//     grade ="Kurang Kompeten"
//  }
//  //menampilkan hasil
//  console.log(rata2)
//  console.log(grade)


//faktorial for

 //   let angka =5;
//   let faktorial =1;

//   for(let i = 1; i<= angka; i++){
//     faktorial*= i;
//   }

// menampilkan hasil
//   console.log("faktorial dari" + angka + "adalah:" + faktorial)
//   console.log('faktorial $ (angka) adalah $(faktorial)')


// let angka = 5;
// let faktorial = 1;
// let i= 1;

// do{
//   faktorial *= i;
//   i++
// }while (i <= angka)
// console.log ("faktorial dari" + angka + "adalah:" + faktorial)


// faktorial While
// let angka = 5;
// let faktorial = 1; 
// let i = 1;

// while(i <= angka){
//     faktorial *= i;
//     i++;
// }
// //menampilkan hasil
// console.log ("faktorial dari" + angka + "adalah:" + faktorial)



//Tahun Kabisat
for (let tahun = 1600; tahun <= 2024; tahun += 4) {
   if (tahun % 400 === 0) {
     console.log(tahun + ' adalah tahun kabisat.');
   } else if (tahun % 100 === 0) {
     console.log(tahun + ' bukan tahun kabisat.');
   } else if (tahun % 4 === 0) {
     console.log(tahun + ' adalah tahun kabisat.');
   } else {
     console.log(tahun + ' bukan tahun kabisat.');
   }
 }
