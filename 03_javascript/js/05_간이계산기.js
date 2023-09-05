const n1 = document.getElementById("input1");
const n2 = document.getElementById("input2");



function claculate(btn) {
    
    // btn에는 this(클릭된 버튼 요소)가 전달되어짐
    console.log(btn);
    
    const op = btn.innerText; // 버튼의 내용을 가지고옴
    
    // input 에 입력된 값을 얻어와 number 타입으로 변환

    const num1 = Number( document.getElementById("num1").value);
    const num2 = Number( document.getElementById("num2").value);

    // eval("코드 형식 문자열")
    // -> 작성된 문자열을 JS 코드로 해석하는 함수
    // -> 속도 + 보안 이슈가 있어서 사용 지양

    // -> 해결방법 : new Function() 사용
    document.getElementById("result")= new function("return " + num1 + op + num2)();
    
}

