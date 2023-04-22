let num1="";
let num2="";
let op="";
let total="";
let result=0;
let isop = false;

//create a function for taking the number or operator to num1, num2 or op 
function getValue(value){

    if(value=="/" || value == "x" || value=="-" || value=="+"){
        if(num1!="" && isop==false){
            isop = true;
            op = value;
            total+=value;
        }
    }
    else{
        if(isop==false){
            num1+=value;
        }
        else{
            num2+=value;
        }
        
        total+=value;
    }

    
    document.getElementById('output').innerHTML = total;
}

//create a function for calculation when user click on "=" button
function getResult(){
    switch(op){
        case "+" : result = parseInt(num1) + parseInt(num2);break;
        case "-" : result = parseInt(num1) - parseInt(num2);break;
        case "x" : result = parseInt(num1) * parseInt(num2);break;
        case "/" : result = parseInt(num1) / parseInt(num2);break;
    }
    total = result;
    num1 = result;
    num2 = "";
    op = "";
    isop = false;
    document.getElementById('output').innerHTML = total;
}

// create a function for clear all data when user click on "AC" button
function allClear(){
    num1="";
    num2="";
    op="";
    total="";
    result="";
    isop=false;
    document.getElementById('output').innerHTML = total;
}