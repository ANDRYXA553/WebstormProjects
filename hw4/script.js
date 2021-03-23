//
// // - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// let  hi ='hello';
// let  name ='owu';
// let   site='com1';
// let  type = 'ua';
// let  nb1 = 1;
// let  nb2 = 10;
// let  nb3 = -999;
// let  nb123 = 123;
// let  nbpi = 3.14;
// let  nb4 = 2.7;
// let  nb5 = 16;
// let valuef=false;
// let valuet=true;
// console.log(hi,name,site,type,nb1,nb2,nb3,nb123,nbpi,nb4,nb5,valuef,valuet);
// alert(hi +' ' + name +' ' + site +' ' + type +' ' + nb1 +' ' + nb2 +' ' + nb3 +' ' + nb123 +' ' + nbpi +' ' + nb4 +' ' + nb5 +' ' + valuef +' ' + valuet);
//
// document.write(hi +' ' + name +' ' + site +' ' + type +' ' + nb1 +' ' + nb2 +' ' + nb3 +' ' + nb123 +' ' + nbpi +' ' + nb4 +' ' + nb5 +' ' + valuef +' ' + valuet);
//
// //- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
//
//   hi ='hello1';
//   name ='owu1';
//    site='com11';
//   type = 'ua1';
//   nb1 = 11;
//   nb2 = 101;
//   nb3 = -9991;
//   nb123 = 1231;
//   nbpi = 3.141;
//   nb4 = 2.71;
//   nb5 = 161;
//  valuef=true;
//  valuet=false;
// console.log(hi,name,site,type,nb1,nb2,nb3,nb123,nbpi,nb4,nb5,valuef,valuet);
// alert(hi +' ' + name +' ' + site +' ' + type +' ' + nb1 +' ' + nb2 +' ' + nb3 +' ' + nb123 +' ' + nbpi +' ' + nb4 +' ' + nb5 +' ' + valuef +' ' + valuet);
//
// document.write(hi +' ' + name +' ' + site +' ' + type +' ' + nb1 +' ' + nb2 +' ' + nb3 +' ' + nb123 +' ' + nbpi +' ' + nb4 +' ' + nb5 +' ' + valuef +' ' + valuet);
// //Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const firstnumber= 1;
// const secondnumber= 2;
// const thirdnumber= 3;
// const string1= 'ewq';
// const string2= 'ewq';
// const string3= 'ewqe';
// console.log(firstnumber,secondnumber,thirdnumber,string1,string2,string3);
// alert(firstnumber)
// alert(secondnumber)
// alert(thirdnumber)
// alert(string1)
// alert(string2)
// alert(string3)
// document.write(firstnumber +' ' + secondnumber +' ' + thirdnumber +' ' + string1 +' ' + string2 +' ' + string3 );
// // - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// const myname =prompt();
// const mysurname =prompt();
// const mysurname2 =prompt();
// console.log(myname,mysurname,mysurname2);
// alert(myname);
// alert(mysurname);
// alert(mysurname2);
// document.write(myname +' ' + mysurname +' ' + mysurname2);
//
// //Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// const myfamname =prompt();
// const myfamsurname =prompt();
// const myfamsurname2 =prompt();
// console.log(myfamname,myfamsurname,myfamsurname2);
// alert(myfamname);
// alert(myfamsurname);
// alert(myfamsurname2);
// document.write(myfamname +' ' + myfamsurname +' ' + myfamsurname2);
//
// //при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// const mynumber1 =+prompt();
// const mynumber2 =+prompt();
// const  mynumber3 =+prompt();
//
// console.log(mynumber1,mynumber2,mynumber3);

// //при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// const a=parseInt(prompt('NUMBER a'));
// const b=parseInt(prompt('NUMBER b'));
// const c=parseInt(prompt('NUMBER c'));
// const d=parseInt(prompt('NUMBER d'));
//
//
// const result=(a+b+c+d);
// console.log(result);

//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// const a=parseFloat(prompt('NUMBER a(float)'));
// const b=parseFloat(prompt('NUMBER b(float)'));
// const c=parseFloat(prompt('NUMBER c(float)'));
// const d=parseFloat(prompt('NUMBER d(float)'));
//
//
// const result=(a+b+c+d);
// console.log(result);

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

const a=Math.round(parseFloat(prompt('NUMBER a(float)')));
const b=Math.round(parseFloat(prompt('NUMBER b(float)')));
const c=Math.round(parseFloat(prompt('NUMBER c(float)')));
const d=Math.round(parseFloat(prompt('NUMBER d(float)')));

const result=(a+b+c+d);
console.log(result);

//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// const a=Math.round(parseFloat(prompt('NUMBER a(float)')));
// const b=Math.round(parseFloat(prompt('NUMBER b(float)')));
//
//
//
//
// const result=(Math.pow(a,b));
// console.log(result);
