
function Check(){
    let kilogram = document.getElementById("Kg").value;
    let height = document.getElementById("Cm").value;
    

    let BMI = 100 * (kilogram / ((height * height) / 100));
   
    if(BMI <= 18.4){
        
        document.getElementById("result").innerHTML="You are underweight";
        document.getElementById("result").style.color="red";
        
    }
    else if(BMI <= 24.9){
        
        document.getElementById("result").innerHTML="You are healthy.";
        document.getElementById("result").style.color="green";
    }
    else if(BMI <= 29.9){
        
        document.getElementById("result").innerHTML="You are over weight.";
        document.getElementById("result").style.color="red";
    }
    else if(BMI <= 34.9){
        
        document.getElementById("result").innerHTML="You are severely over weight.";
        document.getElementById("result").style.color="red";
    }
    else if(BMI<= 39.9){
        
        document.getElementById("result").innerHTML="You are obese..";
        document.getElementById("result").style.color="red";
    }else{document.getElementById("result").innerHTML="You are severely obese";document.getElementById("result").style.color="red";}


    
}




    