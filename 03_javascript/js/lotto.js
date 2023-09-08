const btn = document.getElementById("btn1").addEventListener("click", () => {

    const arr = new Array(6);
    let randomnum = 0;
    const numbers = document.querySelectorAll("#container > div");
    
    
    while(arr.length < 6) {
        
        randomnum = Math.floor(Math.random() * 46)
        
        if ( arr.indexOf(randomnum) == -1) {
            arr.push(randomnum);
        } // 중복검사
        
    }
    arr.sort( function(a,b) {return a-b; } );

    for(let i = 0; i<arr.length; i++){
        numbers[i].innerText = arr[i];
    }


    
    

});