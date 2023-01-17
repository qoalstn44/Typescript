// //string
// let str: string = "TS";

// str = 123
// str = true
// str = undefined

// let fullName: string = 'NBC';
// let age : number = 30;
// let sentenece : string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Number

// let decimal: number = 6;
// let hex: number = 0xf00d;// 0x
// let binary: number = 0b1010;//0b
// let octal: number = 0o744;//0o

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Boolean

// let isTrue: boolean = true;
// let isFalse: boolean = false;

// //ts boolean 값이고 참/거짓

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Array

// let arr : number[] = [1,2,3];
// let arr1 : Array<number> = [1,2,3];
// let arr2 : string[] = ['a','b','c'];
// let arr3 :boolean[] = [true,false,true];

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Tuple
// let x: [string, number];
// x = ["hi", 10];
// // x= [10, "hi"]; //Error
// console.log(x[0], x[1]);

// let Tuple: [string, number, boolean] = ["hi", 10, true]; //이렇게 길게 쓸수있음

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //any 어떤이든 타입없이 가능하다. (자바스크립트와 같음)
// let str: any = "hi";

// str = 123;
// str = true;
// str = undefined;
// str = "abc";
// let num: any = 123;

// let any: any = ["a", 2, true];

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //void 함수가 아무것도 리턴하지 않을때 사용

// function c(): void {
//     console.log("c");
// }

// //null, undefined (자바스크립트와 같음)

// let a: null = null;
// let b: undefined = undefined;

// let unionType: number | null = 10;

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //never (함수가 절대 리턴하지 않을때 사용)

// function a(): never { // 함수 a는 무한루프를 돌고있다.
//   while (true) {
//     //do something
//   }
// }
// function b(): never { // 함수 b는 에러를 던지고 있다.
//   throw new Error("error");
// }

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Type Assertion (타입 단언)
// function add(n1: number, n2: number): number { //n1, n2는 number타입이다. : number는 생략 할수있다.
//   return n1 + n2;
// }

// const add = (n1: number, n2: number): number => { //화살표 함수예시
//   return n1 + n2;
// };

// const a = add(1, 2);
// const b = add("1", 2); //에러 '1'은 number타입이 아니다.
// const c = add(10, 20, 30); //에러 3개의 인자를 받는데 2개만 받았다. 30은 3개의 인자다 그럼으로 무시된다.
// const d = add(10); //에러 2개의 인자를 받는데 1개만 받았다. 10은 1개의 인자다 그럼으로 무시된다.

// //반환값이 없을때는 void를 쓴다.
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// printResult(5)

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//optional parameter (선택적 매개변수)

// function add2(n1: number, n2?: number, n3?: number): number {
//   if (!n2) return n1;
//   return n1 + n2;
// }

// const a2 = add2(1, 2); // 5
// const b2 = add2(10, 20, 30); // 2
// const c2 = add2(10); // 5

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 숫자형 이넘

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// console.log(Direction.Up, Direction.Down, Direction.Left); // 0

// const up: Direction = Direction.Up;
// // Direction = Direction.UP | Direction.Down | Direction.Left | Direction.Right
// const leftOrRight: Direction.Left | Direction.Right = Direction.Left;

// console.log(Direction[2]);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//문자형 이넘
// enum Direction { //위의 숫자형 이넘과 같은 결과를 낸다. 하지만  UP에 숫자를 넣고 실행하면 0, DOWN, LEFT 로 출력하게 된다.
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// console.log(Direction.Up, Direction.Down, Direction.Left); // 0

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// //복합형 이넘 (권고 하지않음)
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //유니온(Union) 타입 : (A || B)
// const printOut = (input: string | number) => {
//   console.log(input);
// };
// |//<=이것을 파이프 라고 부른다.유니온 타입은 매개변수의 타입을 두개 이상 받을 수 있다.
// printOut("문자열");
// printOut(20);
// printOut(true);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//유니온 타입의 장점
// function getAge(age: number | string) {
//   if (typeof age === "number") {
//     //any 타입은 어떤 타입이든 받을 수 있다. age는 any 타입이다.
//     age.toFixed(); // Error
//     //왜냐 age는 any 타입이기 때문에 toFixed()를 사용할 수 없다. 그리고 toFixed 소수점을 표현하는 함수이다.
//     return age;
//   }

//   if (typeof age === "string") {//age가 string 타입이라면
//     return age;
//   }
// }

// getAge("20");
// getAge(20);

// function padLeft(value: string, padding: string | number) {
//   //value는 string 타입이고 padding은 any 타입이다.
//   if (typeof padding === "number") {
//     //padding이 number 타입이라면
//     return Array(padding + 1).join(" ") + value; //padding에 숫자 1 만큼  빈공간을 만들어(' ') 추가를 한다. + value에 값을 붙처서 리턴한다.
//   }
//   if (typeof padding === "string") {
//     //만약 padding이 string 타입이라면
//     return padding + value; //padding에 value를 붙여서 리턴한다.
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`); //padding이 string이나 number가 아니라면 에러를 발생시킨다.
// }

// console.log(padLeft("Hello world", 4)); // "    Hello world"
// console.log(padLeft("Hello world", "!!!")); // "!!!Hello world"
// console.log(padLeft("Hello world", true)); // Error : Expected string or number, got 'true'.

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//Type Alias (사용자 정의 타입)

// type Hero = {
//   name: string;
//   power: number;
//   height: number;
//   gender: "남자" | "여자";
// };

// const hero1: Hero = {
//   name: "슈퍼맨",
//   power: 1000,
//   height: 190,
//   gender: "남자",
// };

// const printHero = (hero: Hero) => {
//   console.log(hero.name, hero.power, hero.height, hero.gender);
// };
// //만약 위와 같은 코드가 반복된다면?? 코드가 길어진다면??? 코드의 가독성이 떨어진다면???? 코드의 재사용성이 떨어진다면???? 코드의 유지보수가 어려워진다면???? 코드의 효율성이 떨어진다면????
// //이런 경우에는 Type Alias를 사용하면 된다. Type Alias는 사용자 정의 타입이다.
// //Type Alias는 interface와 비슷하다. interface와 Type Alias의 차이점은 interface는 extends를 사용할 수 있고 Type Alias는 extends를 사용할 수 없다.

// printHero(hero1);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //Interface  기본 정의

// interface 상세정보 {
//   name: string;
//   //   age?: number; //?는 선택적으로 사용할 수 있다는 뜻이다.
//   age: number;
// }

// const 사람1: 상세정보 = { name: "민수", age: 27 };
// const 사람2: 상세정보 = { name: "용현", age: "스물여섯" }; //에러 발생

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //선택속성

// interface 상세정보 {
//   name: string;
//   age?: number;
// }

// const 사람1: 상세정보 = { name: "js" };

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//Read only 속성

// interface 상세정보 {
//     readonly name: string;
//     age?: number;
//   }

//   const 사람1: 상세정보 = { name: 'js' };
//   사람1.name = 'ljs'; // Error

//   let readOnlyArr: ReadonlyArray<number> = [1,2,3];
//   readOnlyArr.splice(0,1); // error
//   readOnlyArr.push(4); // error
//   readOnlyArr[0] = 100; // error

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//index type 속성

// interface 상세정보 {
//   readonly name: string;
//   [key: string]: string | number; // key는 string이고 value는 string이거나 number이다.
//   //key는 string, number만 들어올수있다.
// }

// const 사람1: 상세정보 = { name: "민수", birthday: "6월24일", age: 27 };

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// //함수 타입

interface 상세정보함수 {
  (name: string, age: number): string;
}
// type Print = (name: string, age: number) => string;

const getNameAndAge: 상세정보함수 = function (name, age) {
  return `name: ${name}, age: ${age}`;
};
