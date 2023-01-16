// //string
// let str: string = "TS";

// str = 123
// str = true
// str = undefined

// let fullName: string = 'NBC';
// let age : number = 30;
// let sentenece : string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

// //Number

// let decimal: number = 6;
// let hex: number = 0xf00d;// 0x
// let binary: number = 0b1010;//0b
// let octal: number = 0o744;//0o

// //Boolean

// let isTrue: boolean = true;
// let isFalse: boolean = false;

// //ts boolean 값이고 참/거짓

// //Array

// let arr : number[] = [1,2,3];
// let arr1 : Array<number> = [1,2,3];
// let arr2 : string[] = ['a','b','c'];
// let arr3 :boolean[] = [true,false,true];

// //Tuple
// let x: [string, number];
// x = ["hi", 10];
// // x= [10, "hi"]; //Error
// console.log(x[0], x[1]);

// let Tuple: [string, number, boolean] = ["hi", 10, true]; //이렇게 길게 쓸수있음

// //any 어떤이든 타입없이 가능하다. (자바스크립트와 같음)
// let str: any = "hi";

// str = 123;
// str = true;
// str = undefined;
// str = "abc";
// let num: any = 123;
// let any: any = ["a", 2, true];

// //void 함수가 아무것도 리턴하지 않을때 사용

// function c(): void {
//     console.log("c");
// }

// //null, undefined (자바스크립트와 같음)

// let a: null = null;
// let b: undefined = undefined;

// let unionType: number | null = 10;

// //never (함수가 절대 리턴하지 않을때 사용)

// function a(): never { // 함수 a는 무한루프를 돌고있다.
//   while (true) {
//     //do something
//   }
// }
// function b(): never { // 함수 b는 에러를 던지고 있다.
//   throw new Error("error");
// }

// //object (자바스크립트와 같음)
