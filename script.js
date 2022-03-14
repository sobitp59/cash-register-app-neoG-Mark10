const inputBillAmount = document.querySelector('.inputBillAmount');
const inputCashAmount = document.querySelector('.inputCashAmount');
const checkButton = document.querySelector('#cashCheckBtn');
const checkMessage = document.querySelector('.checkMessage');
const notesToGive = document.querySelectorAll('.numberOfNotesToGive');

checkButton.addEventListener('click', function(){
    if(inputBillAmount.value > inputCashAmount.value){
        checkMessage.textContent = 'I think you wanna wash dishes 🍽'
        console.log('wash dishes instead')
    }
})