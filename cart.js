//1st product
var spinnerPlus = document.getElementById('plusBtn');
spinnerPlus.addEventListener ('click',function(){

    const fact = spinBox('money'); 
    console.log(fact);
    showText('phonePrice',fact);
    

//    const productValue =  document.getElementById('phonePrice').innerText;
//     var finalPrice = 1219 * totalValue;
//     document.getElementById('phonePrice').innerText= finalPrice;
//     console.log(productValue);
    


})

function spinBox(id) {
    var spinnerText = document.getElementById(id).value;
    var spinnerValue = parseFloat(spinnerText);
    var totalValue = spinnerValue - 1;
    document.getElementById(id).value =totalValue;
    return totalValue;
    
}
function showText(id,quantity){

        // const productValue =  document.getElementById('phonePrice').innerText;
        var finalPrice = 1219 * quantity;
        document.getElementById('phonePrice').innerText= finalPrice;
        
        
}