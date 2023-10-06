const box = document.getElementById("box")
const startbtn = document.getElementById("startbtn")

let startTime;
let endTime;

function randomtime() {
    
    return Math.floor(Math.random()*3000) + 1000; // 2~5초 랜덤값
    

}


function startgame() {
    const delaytime = randomtime();
    box.style.backgroundColor = 'red';

    setTimeout(() => {
        box.style.backgroundColor = 'green';
        startTime = Date.now();
    }, delaytime);


}


box.addEventListener('click', ()=>{
    if (box.style.backgroundColor ==='red') {
        window.alert("땡!!");
    }
    
    for (let i = 1; i <=3; i++){

        if (box.style.backgroundColor === 'green' && count <= 3) {
            count++;
            endTime = Date.now();
            const reacttime = (endTime - startTime) / 1000;
            document.getElementById("result").textContent = `반응 시간 : ${reacttime.toFixed(3)} 초\n`
            box.style.backgroundColor = 'red';
        } 

    }
    
})


startbtn.addEventListener('click', ()=>{

    startgame();
})