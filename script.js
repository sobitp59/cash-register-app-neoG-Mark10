const cashReturnCalculator = document.querySelector('.cashReturnCalc');
const inputBillAmount = document.querySelector('.inputBillAmount');
const inputCashAmount = document.querySelector('.inputCashAmount');
const nextButton = document.querySelector('#nextBtn');
const checkButton = document.querySelector('#cashCheckBtn');
const checkMessage1 = document.querySelector('.checkMessage1');
const checkMessage2 = document.querySelector('.checkMessage2');
const notesToGive = document.querySelectorAll('.numberOfNotesToGive');
const numberOfNotesToGive = document.querySelectorAll('.numberOfNotesToGive');

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
// console.log(availableNotes.length)

cashReturnCalculator.style.display = 'none';

nextButton.addEventListener('click', function(){
    if(inputBillAmount.value <= 0){
        checkMessage1.textContent = 'invalid bill amount';
    }else{
        checkMessage1.textContent = '';
        cashReturnCalculator.style.display = 'block';
    }
})

checkButton.addEventListener('click', function(){  
    if(inputCashAmount.value <= 0){
        checkMessage2.textContent = 'cash amount cannot be negative or zero';
    } else if(inputBillAmount.value > inputCashAmount.value){
        checkMessage2.textContent = 'would you like to wash some dishes';
    } else if(inputBillAmount.value == inputCashAmount.value){
        checkMessage2.textContent = 'nothing to return';
    } else{
        const amountToBeReturned = inputCashAmount.value - inputBillAmount.value;
        checkMessage2.textContent = `Amount to be return is : ${amountToBeReturned}`;
      }
});

function returnMoney(amountToBeReturned){
   console.log(amountToBeReturned);
}