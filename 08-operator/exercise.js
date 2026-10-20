// 1. 숫자 num이 짝수면 "짝수", 홀수면 "홀수" 를 출력하세요
// (%, 상황 연산자를 사용해서)
var num = 17;
console.log(num % 2 === 0 ? "짝수" : "홀수");
// 2. 총 금액 total에 배송비 3000원을 +=로 더한 뒤 출력하세요
var total = 25000;
total+=3000
console.log(total);




// 3. 아래 비교 결과를예상해 주석으로 적은 뒤 확인 하세요.
// 1 == "1" /true   console.log(1 == "1");
// 1 === "1" /false    console.log(1 === "1");
// null == undefined  /true  (null == undefined);
// "b" > "a"    /true      ("b" > "a");

// 4. 나이 age가 14 이상 19 이라이면 true를 출력하세요 (&& 사용)
var age =16;
console.log(age >= 13 && age <= 19);   // true

//5. 아래 코드의 출력 결과를 순서대로 예상한 뒤 실행해서 확인하세요
//var x = 3;
//console.log(x++);
//console.log(++x);
//console.log(x)
// 예상 값 : 3.5.5

var x = 3;
console.log(x++);    // 1.화면 출력, 2,덧셈 ==>3 (x=4)
console.log(++x);    // 2. 화면 출력, 1 . 덧셈 ==> (x=5)  5
console.log(x)       // 화면 출력 => 5
// 예상 값 5