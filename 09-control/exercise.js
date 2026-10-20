// 1. 나이 age에 따라서 요즘을 출력하세요.
// 7세 이하 "무료' , 8~19세 "청소면 5000원", 20세 이상 "성인 10000원"
//-------------------------
var age = 15;

if (age <= 7) {
    console.log("무료");
} else if (age <= 19) {
    console.log("5000");
} else {
    console.log("10000");
}

// 2. month(1~12)에 따라 계절을 출력하세요  (switch 이용)
// 3,4,5,봄 / 6,7,8, 여름 / 9, 10, 11 가을 / 12, 1, 2, 겨울
var month = 11;
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("봄");
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을");
        break;
    default:
        console.log("겨울");
}

// 3. 1부터 100까지의 수 중 3의 배수의 합을 구해 출력하세요 (결과 : 1683)

var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log(sum);

// 4. 구구단 5단을 출력하세요.

for (var j = 1; j <= 9; j++) {
    console.log(`5 * ${j}  = ${5* j}`);
}

// 5. 1부터 차례로 더하다가 합이 100을 넘는 순간의 숫자와 합을 구하세요 (whil + break 이용)

var k = 1;
var sum2 = 0;
while (true) {
    sum2 += k;
    if (sum > 100) {
        break;
    }
    k++;
}
console.log(k, sum2);

