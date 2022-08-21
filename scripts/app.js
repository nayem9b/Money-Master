document.getElementById("expense-calculate").addEventListener('click', function(){
    const currentIncome = document.getElementById("income").value;
    const incomeValue=parseFloat(currentIncome);
    currentIncome.value = '';
    
    if (isNaN(incomeValue)) {
        alert('Please provide a valid number for Income');
        return;
    }
    else if(incomeValue<0){
        alert('Income can not be a negative value');
        return;
    }
    
   else{
    
    const  foodString= document.getElementById("food").value;
    const foodValue= parseFloat(foodString);

    if (isNaN(foodValue)) {
        alert('Please provide a valid number for Food Cost');
        return;
    }
    else if(foodValue<0){
        alert('Food Cost can not be a negative value');
        return;
    }
    foodString.value = "";
    
    const rentString= document.getElementById("rent").value;
    const rentValue= parseFloat(rentString);

    if (isNaN(rentValue)) {
        alert('Please provide a valid number for Rent');
        return;
    }
    else if(rentValue<0){
        alert('Rent can not be a negative value');
        return;
    }
    rentString.value = "";

    const clothString= document.getElementById("cloth").value;
    const clothValue= parseFloat(clothString);

    if (isNaN(clothValue)) {
        alert('Please provide a valid number for Cloths Cost');
        return;
    }
    else if(clothValue<0){
        alert('Cost of Cloaths can not be a negative value');
        return;
    }
    clothString.value = "";

    

    const totalCost = foodValue+rentValue+clothValue;
    if(totalCost>incomeValue){
        alert('Cost can not be grater than income');
        return;
    }
    const previousExpense= document.getElementById('total-expense').innerText = totalCost;
    const currentBalance= document.getElementById('balance').innerText=(incomeValue-totalCost);
   
   }
    
})
document.getElementById('saving-calculate').addEventListener('click', function(){
    const currentIncome = document.getElementById("income").value;
    const incomeValue=parseFloat(currentIncome);

    const  foodString= document.getElementById("food").value;
    const foodValue= parseFloat(foodString);
    
    const rentString= document.getElementById("rent").value;
    const rentValue= parseFloat(rentString);

    const clothString= document.getElementById("cloth").value;
    const clothValue= parseFloat(clothString);

    const totalCost = foodValue+rentValue+clothValue;
    const currentBalance=(incomeValue-totalCost);
    console.log(currentBalance);
    
    const calculateSavings=document.getElementById('savings').value;
    if(calculateSavings>100){
        alert('Can not save greater than 100%');
        return;
    }
    else{
        const savingCalculation= (incomeValue*calculateSavings)/100
        const savingsAmount=document.getElementById('saving-amount').innerText= savingCalculation;
    
        const remainingBalance = document.getElementById('remaining-balance').innerText=(currentBalance-savingsAmount).toFixed(2);
    }
  

})