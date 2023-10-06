// 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 반응속도
const box = document.getElementById("div4-1")
const startBtn = document.getElementById("startBtn")

let startTime;
let endTime;
let avgTime = 0;
let count = 1;

function randomtime() {
    
    return Math.floor(Math.random()*3000) + 1000; 
    

}


function startgame() {
    if (count <= 3) {
        const delaytime = randomtime();
        box.style.backgroundColor = 'red';

        setTimeout(() => {
            box.style.backgroundColor = 'green';
            startTime = Date.now();
            
        }, delaytime);
    }
    
    if (count > 3) {
        avgTime /= 3;
        document.getElementById("result4").textContent = `평균 반응 시간 : ${avgTime.toFixed(3)} 초`
        count = 1;
        avgTime = 0;
    }

}


box.addEventListener('click', ()=>{
    if (box.style.backgroundColor ==='red') {
        window.alert("땡!! 처음부터 다시 시작해주세요");
    }
    
    
        if (box.style.backgroundColor === 'green') {
            endTime = Date.now();
            const reacttime = (endTime - startTime) / 1000;
            avgTime += reacttime;
            
            document.getElementById(`result${count}`).textContent = `반응 시간${count} : ${reacttime.toFixed(3)} 초\n`
            box.style.backgroundColor = 'red';
            count++;
            startgame();
        } 
    
})


startBtn.addEventListener('click', ()=>{
    count = 1;
    startgame();
})


