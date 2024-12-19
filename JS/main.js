//=================Destructuring Assignment==================


//===========================================================
//1-Mashq: Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.
//  let user = { name: "Ali", age: 25, lokation: "Toshkent" };
//  let { name, lokation, age } = user;
// console.log(name);
// console.log(age);
// console.log(lokation);


//===========================================================
//2-Mashq: Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.
//  const numbers = [10, 20, 30, 40, 50];
//  let [a,b,...others]=numbers;
//  console.log(a,b);
//  console.log(others);


//===========================================================
//3-Mashq: Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.
//  const product = { title: "Telefon", price: 300, brand: "Samsung" };
// function displayProduct({ title, price }) {
//      console.log(title,price);
// }
// displayProduct(product);


//==========================Scope============================


//===========================================================
//1-Mashq: Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.
//  let x = 10;
// function testScope() {
//   let x = 20; // Local scope
//   if (true) {
//     let x = 30; // Block scope
//     console.log("Block scope:", x);
//   }
//   console.log("Local scope:", x);
// }
// testScope();
// console.log("Global scope:", x);


//===========================================================
//2-Mashq: Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.
//  function calculate() {
//   if (true) {
//     result = 10;
//     console.log(result);
//   }
// }
// calculate();



//===========================================================
//3-Mashq: Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.
//tushunmadm
// let count = 5;
// function increment() {
//   count++;
//   console.log("Function scope:", count);
// }
// increment();
// if (true) {
//   count += 2;
//   console.log("Block scope:", count);
// }
// console.log("Global scope:", count);


//=====================Spread/Rest Operator=================


//===========================================================
//1-Mashq: Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.
//  const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// let res=[...arr1,...arr2];
// console.log(res);


//===========================================================
//2-Mashq: Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.
//  function squareNumbers(...numbers) {
//     return numbers.map(item=>item**2)
// }
// console.log(squareNumbers(2, 3, 4)); // [4, 9, 16]


//===========================================================
//3-Mashq: Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.
//  const user = { name: "Ali", age: 25 };
// const updatedUser = {
//    ...user,
//    location:"Farg'ona",
//    job:"Developer"
// };

// console.log(updatedUser);



//===========Hoisting va TDZ (Temporal Dead Zone)============


//===========================================================
//1-Mashq: Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.
// console.log(a); // 113 va 114-qatordagi elementlar o'rni almashib qolgan
// var a = 10; 

// console.log(b); // 116 va 117-qatordagi elementlar o'rni almashib qolgan
// let b = 20;

// test();
// function test() {
//   console.log("Test function called");
// }  // 119-qatordagi element 123-qotorda yozilishi kerak edi.


//===========================================================
//2-Mashq: TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.
//  console.log(x); // O'zgaruvchi va qiymatni konsolga elon qilishdan oldin yozish kerak.
// let x = 5;


//===========================================================
//3-Mashq: Quyidagi kodning ishlash tartibini tushuntiring.
//  var x = 10;
// function example() {
//   console.log(x); // ?
//   var x = 20;
//   console.log(x); // ?
// }
// example();



//============================Modul==========================


//===========================================================
//1-Mashq: Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.

// import { sum } from "./app.js";
// import { multiply } from "./app.js";


//===========================================================
//2-Mashq: Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.
// import greet from "./app.js";


//===========================================================
//3-Mashq: Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.
// import { divide } from "./app.js";
// let res=divide;
// console.log(res(9,3));




//===============Foydalanuvchilarga oid masalalar============

// Massiv va obyektlar namunasi:
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];

// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];




//===========================================================
//1- Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// let res=users.filter(value=>{
//    return value.isActive==true
// })
// console.log(res);


//===========================================================
//2-Yoshi bo‘yicha saralash:Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// let res=users.sort((a,b)=>a.age-b.age)
// console.log(res);


//===========================================================
//3-Ism bo‘yicha qidiruv:Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// function names(name){
//    return users.find(users=>users.name==name)
// }
// let res=names("Laylo")
// console.log(res);


//===========================================================
//4-Yosh o‘rtachasini hisoblash:Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.
// const users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Laylo", age: 30, isActive: false },
//   { id: 3, name: "Sardor", age: 22, isActive: true },
//   { id: 4, name: "Madina", age: 28, isActive: false },
// ];
// let sum=0
// for(let i=0;i<users.length;i++){
//    sum+=users[i].age
// }
// console.log(sum/4);


//===========================================================
//5-Foydalanuvchilarni yosh oralig‘ida qidirish:Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.
  // const users = [
  //   { id: 1, name: "Ali", age: 25, isActive: true },
  //   { id: 2, name: "Laylo", age: 30, isActive: false },
  //   { id: 3, name: "Sardor", age: 22, isActive: true },
  //   { id: 4, name: "Madina", age: 28, isActive: false },
  // ];



//================Mahsulotlarga oid masalalar================



//===========================================================
//6-Kategoriya bo‘yicha qidiruv:Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.
// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];
// function categories(category) {
//   return products.find((products) => products.category == category);
// }
// let res = categories("books");
// console.log(res);


//===========================================================
//7-Narxi eng yuqori mahsulot:Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.
//tushunmadm
// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];


//===========================================================
//8-Narxlar yig‘indisi:Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.
// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];
// function prices(priice){
//   let sum = 0;
//   for (let i = 0; i < priice.length; i++) {
//     sum += priice[i].price;
//   }
//   return sum
// }
// console.log(prices(products));


//===========================================================
//9-Narxi pasaytirilgan mahsulotlar:Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.
// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];
// let res=products.map(item=>{
//   return item.price*0.9
// })
//   console.log(res);


//===========================================================
//10-Muayyan narxdan yuqori mahsulotlar:Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.
// const products = [
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];
//tushunmadm


//=================Murakkab kombinatsiyalar==================


//===========================================================
//11-Foydalanuvchi va mahsulotlarni bog‘lash:Foydalanuvchilar va mahsulotlarni ulovchi funksiya yozing: har bir foydalanuvchiga tasodifiy mahsulot biriktiriladi va natija qaytariladi.


//===========================================================
//12-

//===========================================================
//13-Faol foydalanuvchilarning o‘rtacha yoshi:Faqat isActive: true qiymatiga ega foydalanuvchilarning yoshlarini o‘rtachasini qaytaradigan funksiya yozing.
//   const users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Laylo", age: 30, isActive: false },
//     { id: 3, name: "Sardor", age: 22, isActive: true },
//     { id: 4, name: "Madina", age: 28, isActive: false },
//   ];
//   let sum=0
//   let count=0
// for(let i=0;i<users.length;i++){
//   if(users[i].isActive==true){
//     count++
//     sum+=users[i].age
//   }
// }
// console.log(sum/count);


//===========================================================
//14-Maxsus mahsulot qidiruvi: Funksiya mahsulot nomining ichida ma’lum bir so‘z qatnashgan mahsulotlarni qaytarishi kerak.
//   { id: 1, name: "Telefon", price: 1200, category: "electronics" },
//   { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
//   { id: 3, name: "Stol", price: 150, category: "furniture" },
//   { id: 4, name: "Kitob", price: 50, category: "books" },
// ];

//===========================================================
// 15-Kombinatsiyalangan hisob-kitob:Foydalanuvchilarning sonini va mahsulotlarning umumiy narxini qaytaradigan funksiya yozing.
