addEventListener('load',inic,false);

function inic(){
    document.getElementById('rate').addEventListener('change',rate_change,false);
}

function rate_change(){    
    document.getElementById('rate_value').innerHTML=document.getElementById('rate').value;
}

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}