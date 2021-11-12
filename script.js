function calcBMI(){                 //function 1

    let weight=document.getElementById("weight").value;
    let height=document.getElementById('height').value;
   
    const convHeight=(height/100)*(height/100);
    let bmi=weight/convHeight;
    
    let finalBMI= bmi.toFixed(2);
   return finalBMI;
    // let finalBMI=bmi.toFixed(2);
    // return alert(finaBMI);
}

function setBMI(){            //function 2
    const ANS="Your BMI is: " + calcBMI();
    const OPTEXT=document.getElementById("result").innerHTML=ANS;
}

function clearFields(){
    var field_1=document.getElementById("weight").value= " ";
    var field_2=document.getElementById('height').value= " ";
    var bmiOP=document.getElementById("result").innerHTML=" ";
    
}




