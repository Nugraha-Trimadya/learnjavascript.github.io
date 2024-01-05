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

//Lampu on of
// let lampu = '';
    
// if(lampu == 'on'){
//     console.log("on")
// }else{
//     console.log("off")
// }

//Jalur Nilai
// let jalur = 'rapot'; //input
// let nilai = 80; //input
// let tes = 100; //input

// if (nilai >= 90 && nilai <= 100){
//   console.log("Anda lolos dengan nilai sempurna!")  
// } else if (nilai >= 75){
//     if (jalur == 'rapot'){
//         console.log("Anda lolos dengan jalur rapot!")
//     } else if(jalur == 'prestasi'){
//         console.log("Anda lulus dengan jalur prestasi!")
//     }
// }else{
//     if (tes >= 75){
//         console.log("anda lolos dari tes mandiri");
//     } else {
//         console.log("anda tidak lolos")
//      }
//         }

// Ganjil-Genap 1-100
// for 1-50 ganjil dan genap
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//       document.write("Genap: " + i);
//     } else {
//       document.write("Ganjil: " + i);
//     }
//   }


//while bilangan 1-100 munculnya angka genap
// i= 1;

// while(i <=100){
//     if(i %2 == 0){
//         document.write("<p>genap</p> " + i)
//     }else{
//         console.log(null)
//     }
// i++;
// }

//while 100-1 muncul angka genap
// i= 100;
// while(i >=1){
//     if(i %2 == 0){
//         console.log(null)
//     }else{
//         document.write("<p>genap</p> " + i)
//     }
// i++;
// }

// while 1-100 muncul angka ganjil

// i= 1;
// while(i <=100){
//     if(i %2 == 0){
//         document.write("<p>ganjil</p> " + i)
//     }else{
//         console.log(null)
//     }
// i++;
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       document.write("Genap: " + i);
//     } else {
//       document.write("Ganjil: " + i);
//     }
//   }

//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       document.write("Genap: " + i);
//     } else {
//       console.log(null)
//     }
//   }

//   for (let i = 100; i >= 1; i++) {
//     if (i % 2 === 0) {
//       document.write("Ganjil: " + i);
//     } else {
//       console.log(null)
//     }
//   }

  // i = 1;
  //       while (i <= 100) {
  //           if (i % 2 === 0) {
  //               console.log("Genap: " + i);
  //           } 
  //           i++;
  //       }

//         n = 100;
//         while (n >= 1) {
//             if (n % 2 == 1) {
//                 console.log("Ganjil: " + n);
//             } 
//             n--;
//         }

// // for
//         // 1-50
//         for (let i = 1; i <= 50; i++) {
//           if (i % 2 === 0) {
//                 console.log("Genap: " + i);
//           } else {
//                 console.log("Ganjil: " + i);
//              }
//           } 
//        // 1-100 genap
//        for (let i = 1; i <= 100; i++) {
//               if (i % 2 === 0) {
//               console.log("Genap:" + i);
//             }
//          }
//        // 100-1 ganjil
//          for (let i = 100; i >= 1; i--) {
//               if (i % 2 === 1) {
//               console.log("Ganjil: " + i);
//             }
//          }
//        // while
//        // genap 1-100
//        let i = 1;
//        while (i <= 100) {
//            if (i % 2 === 0) {
//                console.log("Genap: " + i);
//            } 
//            i++;
//        }
//        // ganjil 100-1
//        let n = 100;
//        while (n >= 1) {
//            if (n % 2 === 1) {
//                console.log("Ganjil: " + n);
//            } 
//            n--;
//        }



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

