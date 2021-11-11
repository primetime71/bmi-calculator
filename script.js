function calcBMI(){

    let weight=document.getElementById("weight").value;
    let height=document.getElementById('height').value;
    const convHeight=(height/100)*(height/100);
    let bmi=weight/convHeight;
    let finalBMI=bmi.toFixed(2);
        return setBMI(finalBMI);
}

function setBMI(result){
    const ans=`Your BMI is: ` + result;
    const opText=document.getElementById("result").innerText=ans;
}




