function randomBg() {
    
    // document.getElementById("items1").style=(`background-color:rgb(${char1},${char2},${char3});`)
    // document.getElementById("items2").style=(`background-color:rgb(${char2},${char1},${char3});`)
    // document.getElementById("items3").style=(`background-color:rgb(${char2},${char3},${char1});`)
    // document.getElementById("items4").style=(`background-color:rgb(${char3},${char2},${char1});`)
    // document.getElementById("items5").style=(`background-color:rgb(${char3},${char1},${char2});`)
    // document.getElementById("items6").style=(`background-color:rgb(${char1},${char2},${char3});`)
    // return document;
    for(let n=1; n<=6 ;n++){
        
        let char1=0
        let char2=0
        let char3=0
        
        char1+=Math.floor(Math.random()*256);
        char2+=Math.floor(Math.random()*256);
        char3+=Math.floor(Math.random()*256);
           

        if(char1!==char2&&char1!==char3&&char2!==char3){
        document.getElementById(`items${n}`).style=(`background-color:rgb(${char1},${char2},${char3});`);
        }   

    }
    return document;

      
};
randomBg();