// 1. 변수 선언과 할당

var score;   // 선언 : score라는 이름의 저장 공간을 만듦

// consle.log(score) -> sore 변수 안의 값을 화면에 출력하는 명령
console.log(score);   // undefined  (아직 초기화가 일어나지 않음)

score = 80;      // 할당 : 저장 공간에 값을 넣음
console.log(score);    //80

var name = "홍길동";   // 선언과 할당(초기화) 를 한번에
console.log(name);

// 2. 호이스팅(Hoisting)
//  var로 선언한 변수 선언부가 코드의 맨 위로 끌어올려진 것 처럼 동작되는 것

console.log(hoisting);       // undefined
var hoisting : string = "나중에 선언된 변수"
console.log(hoisting);     // 나중에 선언된변수


//3. 변수명 장명 규칙

var userName : string = "kim";  // 영문, 숫자, _, $ 사용 가능 / camelCase
var _count = 1;       // _ 시작 가능
var $price = 1000;    // $ 시작 가능

//var 1st = "x";          // 숫자로 시작 불가
// var user-name + "park";   // 하이픈(-) 사용 불가
// var var = 4;  // 시스템이 사용 중인 예약어는 변수명으로 사용 불가

var apple=  "사과";
var Apple = "대문자 사과"




// 4. 표기법

var myFirstName = '카멜케이스';  // 자바스크립트 변수나 함수에 사용
var MyComputerIsGood = "파스칼케이스";  // 자바스크립트 클래스나 타입에 사용
var my_first_name = "스네이크케이스";  // 파이썬에서 자주 사용
//  kebab-case 방식도 있음


// 5. 동적 타이핑
// 같은 변수에 다른 종류의 값을 넣으 수 있음
