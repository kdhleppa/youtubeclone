const checkObj = {
    "inputId" : false,
    "inputPw" : false,
    "inputPwConfirm" : false,
    "inputName" : false,
    "gender" : false,
    "inputTel" : false
}

document.getElementById("inputId").addEventListener("change", function(){

    const regExp = /^[a-z][\w0-9-_]{5,13}$/;
    
    if (this.value.length == 0) {
        this.style.backgroundColor = "white";
        this.style.color = "black";
        checkObj.inputId = false;
    } else if (regExp.test(this.value)){
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
        checkObj.inputId = true;
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        checkObj.inputId = false;
    }
});


/***
 * 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
 * "비밀번호" 를 미입력한 상태에서 "비밀번호 확인"을 작성할 경우
 * "비밀번호 확인"에 작성된 내용을 모두 삭제하고
 * '비밀번호를 입력해주세요' 경고창 출력 후
 * focus를 "비밀번호"입력창으로 이동
 */

const inputPw = document.getElementById("inputPw");
const pwMessage = document.getElementById("pwMessage");


document.getElementById("inputPwConfirm").addEventListener("keyup", function(){
    if (inputPw.value.length == 0) {
        this.value = '';
        alert("비밀번호를 입력해주세요.");
        inputPw.focus();
        checkObj.inputPw = false;
        pwMessage.innerText = "";
        
    }
});
inputPw.addEventListener("keyup", function(){
    if ( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm")
        pwMessage.classList.remove("error")
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error")
        pwMessage.classList.remove("confirm")
        checkObj.inputPwConfirm = false;
    }

});

inputPwConfirm.addEventListener("keyup",function(){
    if ( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPwConfirm = false;
    }
});

document.getElementById("inputName").addEventListener("keyup", function(){

    const regExp = /^[가-힣]{2,5}$/;
    const nameMessage = document.getElementById("nameMessage");

    if (this.value.length == 0) {
        nameMessage.innerText = "";
    }else if (regExp.test(this.value)) {
        nameMessage.innerText = "정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
        checkObj.inputName = true;
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
        checkObj.inputName = false;
    }
});

function validate() {
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const inputTel = document.getElementById("inputTel");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const gender = document.getElementsByName("gender");

    if (!gender[0].checked && !gender[1].checked) {
        alert("성별을 선택해주세요.");
        checkObj.gender = false;
        return false;
    } else {
        checkObj.gender = true;
    }
    
    if (!regExp.test(inputTel.value)){
        alert("전화번호의 형식이 올바르지 않습니다.");
        checkObj.inputTel = false;
        return false;
    } else {
        checkObj.inputTel = true;
    }

    for(let key in checkObj) {
        if ( !checkObj[key] ) {
            return false;
        }
    }
    
    alert("회원가입 완료");
    return true;
}



