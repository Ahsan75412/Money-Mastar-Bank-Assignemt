
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
        inputIncome.classList.toggle('border-red-600');
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
        inputRent.classList.toggle('border-red-600');
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



