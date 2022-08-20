document.getElementById("expense-calculate").addEventListener('click', function(){
    const currentIncome = document.getElementById("income").value;
    const incomeValue=parseFloat(currentIncome);

    const  foodString= document.getElementById("food").value;
    const foodValue= parseFloat(foodString);
    
    const rentString= document.getElementById("rent").value;
    const rentValue= parseFloat(rentString);

    const clothString= document.getElementById("cloth").value;
    const clothValue= parseFloat(clothString);

    const totalCost = foodValue+rentValue+clothValue;
    const previousExpense= document.getElementById('total-expense').innerText = totalCost;
    const currentBalance= document.getElementById('balance').innerText=(incomeValue-totalCost);
   
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
    const savingCalculation= (incomeValue*calculateSavings)/100
    const savingsAmount=document.getElementById('saving-amount').innerText= savingCalculation;

    const remainingBalance = document.getElementById('remaining-balance').innerText=(currentBalance-savingsAmount);

})