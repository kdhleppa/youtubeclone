document.getElementById("inputId").addEventListener("keyup", function(){

    const regExp = /^[a-z][a-zA-Z0-9-_]{5,13}$/;
    
    if (this.value.length == 0) {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    } else if (regExp.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
       
    }
});

document.getElementById("inputPwConfirm").addEventListener("keyup", function(){
    const inputPw = document.getElementById("inputPw").value;
    if (inputPw == "") {
        this.value = '';
        alert("비밀번호를 입력해주세요.");
        pwMessage.innerText = "";
        
    }

    if (inputPw == this.value) {
        const pwMessage = document.getElementById("pwMessage");
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.style.color = "green";
    } else {
        
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.style.color = "red";
    }
});


document.getElementById("inputName").addEventListener("keyup", function(){

    const regExp = /^[가-힣]{2,5}$/;
    const nameMessage = document.getElementById("nameMessage");

    if (this.value.length == 0) {
        nameMessage.innerText = "";
    }else if (regExp.test(this.value)) {
        nameMessage.innerText = "정상입력";
        nameMessage.style.color = "green";
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.style.color = "red";
    }
});

document.getElementById("inputTel").addEventListener("keyup", function(){
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if (regExp.test(this.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
    }
});


/* submit 조건
    전화번호 if절 추가
    성별체크 되었는지 확인 validate()함수 사용

*/

function validate() {
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const inputTel = document.getElementById("inputTel");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    if (!male.checked && !male.checked) {
        alert("성별을 선택해주세요.");
        return false;
    }
    
    if (regExp.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }

    return true;
}

document.getElementById("form1").addEventListener("submit", function(event){
    if (!validate()) {
        event.preventDefault();
    }
});