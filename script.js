const cashReturnCalculator = document.querySelector('.cashReturnCalc');
const inputBillAmount = document.querySelector('.inputBillAmount');
const inputCashAmount = document.querySelector('.inputCashAmount');
const nextButton = document.querySelector('#nextBtn');
const checkButton = document.querySelector('#cashCheckBtn');
const checkMessage1 = document.querySelector('.checkMessage1');
const checkMessage2 = document.querySelector('.checkMessage2');
const notesToGive = document.querySelectorAll('.numberOfNotesToGive');
const numberOfNotesToGive = document.querySelectorAll('.numberOfNotesToGive');
const calculationTable = document.querySelector('.calcTable');


const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
// console.log(availableNotes.length)

cashReturnCalculator.style.display = 'none';
calculationTable.style.display = 'none';

nextButton.addEventListener('click', function(){
    console.log(typeof inputBillAmount.value);

    if(Number(inputBillAmount.value) <= 0){
        checkMessage1.textContent = 'invalid bill amount';
    }else{
        checkMessage1.textContent = '';
        cashReturnCalculator.style.display = 'block';
    }
})

checkButton.addEventListener('click', function(){  
    if((Number(inputCashAmount.value) > Number(inputBillAmount.value)) && (Number(inputBillAmount.value) > 0) ){
        const amountToBeReturned = Number(inputCashAmount.value) - Number(inputBillAmount.value);
        checkMessage2.textContent = `Amount to be return is : ${amountToBeReturned}`;
        returnMoney(amountToBeReturned);
        calculationTable.style.display = 'block';
    } else if(Number(inputCashAmount.value) === Number(inputBillAmount.value)){
        checkMessage2.textContent = 'nothing to return';
    } else if(Number(inputCashAmount.value) <= 0 || Number(inputCashAmount.value) < Number(inputBillAmount.value)){
        checkMessage2.textContent = 'would you like to wash some dishes';
        calculationTable.style.display = 'none';
    } else{
        checkMessage2.textContent = 'some error occurs'
    }
});

function returnMoney(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        // amountToBeReturned.style.backgroundColor = 'red';
        numberOfNotesToGive[i].textContent = `X ${numberOfNotes}`
    }
}