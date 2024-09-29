// 1-masala

// let num = +prompt("Sonni kiriting...")
// if(num > 0){
//     console.log("Musbat son");
// }else{
//     console.log("Manfiy son");
// }

// 2-masala

// let num = +prompt("Sonni kiriting ...")
// if(num % 2 == 0){
// console.log('Juft son');
// }else if(num % 2 ==1){
//     console.log('Toq son');
// }

// 3-masala
// let son1 = +prompt("1-soni kiriting ...");
// let son2 = +prompt("2-sonni kiriting ...");

// if (son1 > son2) {
//   console.log("Katta");
// } else if (son1 < son2) {
//   console.log("Kichik");
// } else {
//   console.log("Teng");
// }
// 4-masala
// let son1 =+prompt('1-sonni kiriting...')
// let son2 =+prompt('2-sonni kiriting...')
// if(son1 == son2){
//     console.log('Kvadrat ');
// }else{
//     console.log('Kvadrat emas');
// }

// 5-masala

// let harorat = +prompt('Haroratni kirirting...')

// if(harorat > 0){
//     console.log('Yozgi');
// }else{
//     console.log('Qishgi');
// }

// 6-masala
// let baho = +prompt('Bahoingizni kiriting ...')

// if(baho >= 5){
// console.log('Alo');
// }else if(baho >=4 ){
//     console.log('Yaxshi');
// }else if(baho >= 3){
//     console.log('Qoniqarli');
// }else if( baho >= 2){
//     console.log('Yomon');
// }

// 7-masala
// let son1 = +prompt('1-sonni kiriting ...')
// let son2 = +prompt('2-sonni kiriting ...')
// let son3 = +prompt('3-sonni kiriting ...')

// let max = son1;

// if(son2 > max){
//     max = son2
// } 
// if(son3 > max){
//     max = son3
// }
// console.log(max);

// 8-masala
// let son = prompt('Sonni kiriting...')
// if(son.length == 5){
//     console.log("Besh xonaliy");
// }else{
//     console.log("Besh xonali emas");
// }
// 9-masala

// let fasil = prompt('Fasillarni raqamini kiriting')
// if(fasil >=3 && fasil <=5){
//     console.log('Bahor');
// }
// if(fasil >=6 && fasil <= 8){
//     console.log('Yoz');
// }else if(fasil >= 9 && fasil<=11){
//     console.log('Kuz');
// } else if(fasil >= 12 ||fasil===1 || fasil <=2){
//     console.log('Qish');
// }

// 10-masala

// let kun = prompt('Kunni kiriting (1-7)')

// if(kun >=1 && kun <= 5){
//     console.log('Ishchi kun');
// }else if(kun <= 6 || kun <= 7){
//     console.log('Dam olish kuni');
// }

// 11- masala

// let yoshlik  = prompt('Tug`ulgan yilingizni kiriting')

// if(yoshlik >= 2005){
//     console.log('Yosh bola');
// }else if(yoshlik <= 2005){
//     console.log('Katta odam');
// }

// 12-masala

// let ishVaqti = prompt("Soat necchiligini kiriting (0-24)")

// if(ishVaqti >=8 && ishVaqti <=18){
//     console.log('Ish vaqti');
// }else{
//     console.log('Tanaffus');
// }

// 14-masala

// let maxMin = prompt('Sonni kirirting')
// if (maxMin >=100){
//     console.log('Katta son');
// }else{
//     console.log('Kichik son');
// }
 
// 15-masala
// let free = prompt('Yoshingizni kiriting')
// if(free >= 18){
//     console.log('Pul tolash kerak');
// }else{
//     console.log('Tekin kirish');
// }



// ////// ALISHER MASALASI

let sayohat = +prompt('ALisher sizda qancha pul bor (somda kiriritng)')
let dollor = 11000.34;
let euro = 12354.03 ;

let chipta = 500 * dollor;
let mehmonXona = 250 * euro;
let muzey = 120 * euro
let res = chipta + mehmonXona + muzey;
if(sayohat >= res){
    console.log("Oq yo'l, Alisher!");
}else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}