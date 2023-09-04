const n1 = document.getElementById("input1");
const n2 = document.getElementById("input2");



function claculate(op) {
    // op에는 연산기호가 전달되어 옴
    // input 에 입력된 값을 얻어와 number 타입으로 변환

    const input1 = Number( document.getElementById("input1").value);
    const input2 = Number( document.getElementById("input2").value);

    // 결과 저장용 변수
    let res = 0;

    switch(op) {
        case '+' : res = input1 + input2; break;
        case '-' : res = input1 + input2; break;
        case '*' : res = input1 + input2; break;
        case '/' : res = input1 + input2; break;
        case '%' : res = input1 + input2; break;
    }
    // span 태그에 결과 출력
    document.getElementById("result").innerText = res;
}

