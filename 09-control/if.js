var score =85;

if (score >= 90) {
    console.log("A");
} else if (score>= 80) {
    console.log("B");
} else if (score>= 70) {
    console.log("C");
}
else if (score>= 60) {
        console.log("D");
    }
    else if (score>= 80) {
        console.log("F");
    }


    if (score < 60) {
        console.log("F")
    } else  if (score < 70){
        console.log("D");
    } else  if (score < 80){
        console.log("C");
    }else  if (score < 90) {
        console.log("B")
    }else {
        console.log("A")
    }
// 삼항연산자 => 조선식 ? 참일 때 실행 : 거짓일 떄 실행
// if문일 때 if (조건식) {참일 떄 실행 } else {거짓일 때 실행}
// 보통 적으로, 식을 풀어서 그 결과를 변수에 할당해야 할 떄 삼항연산자를 쓰고
//실행만 해야되는 상황이라면 if를 씀