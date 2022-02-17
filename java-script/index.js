
//calling Id here: 

const inputIncome = document.getElementById('income');
const inputFood = document.getElementById('food');
const inputRent = document.getElementById('rent');
const inputClothes = document.getElementById('clothes');
const inputSaving = document.getElementById('save');
const balance = document.getElementById('balance');


// calculate all input value:-

function calculateInput() {

    if (isNaN(parseInt(inputIncome.value))) {
       
        alert('Income input must be number...!');
        return;
    }
    else if (isNaN(parseInt(inputFood.value))) {
       
        alert('Food input must be number...!');
        return;
    }
    else if (isNaN(parseInt(inputRent.value))) {
        
        alert('Rent input must be number.!');
        return;
    }
    else if (isNaN(parseInt(inputClothes.value))) {
       
        alert('Clothes input must be number.!');
        return;
    }
    else if (parseInt(inputIncome.value) < 0) {
       
        alert('Income input must be a positive number...!')
    }
    else if (parseInt(inputFood.value) < 0) {
        
        alert('Food input must be a positive number...!');
    }

    else if (parseInt(inputRent.value) < 0) {
        
        alert('Rent input must be a positive number...!');
    }
    else if (parseInt(inputClothes.value) < 0) {
        
        alert('Clothes input must be a positive number...!');
    }
    else {
        const totalExpenses = parseInt(inputFood.value) + parseInt(inputRent.value) + parseInt(inputClothes.value);
    
        const balance = parseInt(inputIncome.value) - totalExpenses;

        
        document.getElementById('totalExpenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = balance;
    }

    
}



//calculate the saving value bonus

function savingInput() {
    if (isNaN(parseInt(inputSaving.value))) {
       
        alert('Save input must be number...!');
        return;
    }
    else if (!(parseInt(inputSaving.value) > 0 && parseInt(inputSaving.value) < 101)) {
       
        alert('Save input must be a between 1 to 100..!');
        return;
    }
    else {
        const savingAmount = (parseInt(inputIncome.value) / 100 ) * parseInt(inputSaving.value);
        
        const remainingBalance = parseInt(balance.innerText) - savingAmount; 
        console.log(remainingBalance);
        if (remainingBalance < 0) {
            alert(inputSaving.value + '% saving not possible..!');
            return;
        }
    
        document.getElementById('savingAmount').innerText = savingAmount;
        document.getElementById('remainingBalance').innerText = remainingBalance;
    }
}