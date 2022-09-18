
//função de calculo.

function calculateTip (event) {
    
    var ServiceQual= document.getElementById('ServiceQual').value;
    var People= document.getElementById('People').value;
    var Bill= document.getElementById('Bill').value;

   
    
//caso quantidade de pessoas esteja vazio deixar o nome cada sem aparecer.

    if(People == " "  | People <= 1){
        People = 1;
        document.getElementById('each').style.display="none";}
    
    else {
        document.getElementById('each').style.display="block";
    }

    

    var total = (Bill * ServiceQual) / People;

    total= total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTips').style.display="block";

    event.preventDefault();
    
}

document.getElementById('totalTips').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsform').addEventListener('submit' ,calculateTip);