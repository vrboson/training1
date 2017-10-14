/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global setTime */
function verifyAnswer(){   
    
    if (document.getElementById("beach").checked){ 
        document.getElementById("correctAns").play();        
    }
    else{
        document.getElementById("wrongAns").play();
        setTimeout(refresh, 1000);
    }
}
function refresh(){
    location.reload();
}




