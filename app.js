const bill = document.getElementById('bill');
const tips = document.querySelectorAll('#tip li');
const custom = document.querySelector('li#custom input');
const nop = document.getElementById('numberofpeople');
const nopLabel = document.getElementById('nop-label');
const tipcost = document.getElementById('tipcost');
const total = document.getElementById('total');
const reset = document.getElementById('btn');
let currentBill = 0;
let currentTip = 0;
let currentPeople = 0;

function checkInput(e){
    const key = e.keyCode;
    const val = e.target.value 
    console.log(key);
        if(key >= 65 && key <= 90){
            
        console.log('you are typing letters');
        return;
        } else{
            currentBill = val;
            selectTip();
        }
}

function selectedTip(tip){
    let selTip = +tip.id;
    currentTip = selTip;
    nop.addEventListener('keyup', (e) => numberOfPeople(e));
}

function calculateTip(bill, tip, nop){
console.log('running', bill, tip, nop);
    if(bill > 0 && tip > 0 && nop > 0){
        let totalCost = (bill / 100 ) * tip;
        console.log('all thing have something');
    let newTip = totalCost / nop;
    let totalPerPerson  = (bill / nop) + newTip
    tipcost.innerHTML = `<p>$${newTip.toFixed(2)}</p>`;
    total.innerHTML = `<p>$${totalPerPerson.toFixed(2)}</p>`;

    reset.removeAttribute('disabled');
    }
}

function resetInputs(){
    bill.value = '';
    custom.value = '';
    nop.value = '';
     currentBill = 0;
     currentTip = 0;
     currentPeople = 0;  

    tipcost.innerHTML = `<p>$0.00</p>`;
    total.innerHTML = `<p>$0.00</p>`;
    nopLabel.classList.remove('err');
    tips.forEach(tip => {
        tip.classList.remove('active');
    })

    reset.setAttribute('disabled', 'true');
}

function enterCustomVal(e){
    console.log(custom);
      let customSel = e.value;
      console.log(customSel);
    custom.addEventListener('keyup', (e) => {

        if(custom.value > 0){
            currentTip = custom.value;
        }
    })
    calculateTip(currentBill, currentTip, currentPeople);
}

function numberOfPeople(e){
    let people = e.target.value;
    console.log(people);
    
    if(people > 0){
        nopLabel.classList.remove('err');
        currentPeople = people;
        calculateTip(currentBill, currentTip, currentPeople);
        
    } else{
        nopLabel.classList.add('err');
    }
}

function selectTip(){
    tips.forEach(tip => {
        tip.addEventListener('click', (e) => {
            
                tips.forEach(newTip => {
                    if(tip !== newTip && tip.value !== 'Custom'){
                        newTip.classList.remove('active')
                        selectedTip(tip);
   
                    } else if(tip.value = 'Custom'){
                        console.log(newTip);
                        newTip.classList.remove('active')
                        currentTip = tip.value;
                        enterCustomVal(tip);
                    }
                })
                tip.classList.add('active');  
                calculateTip(currentBill, currentTip, currentPeople);
        });
    })
}

bill.addEventListener('keyup', (e) => checkInput(e));
reset.addEventListener('click', resetInputs);
window.addEventListener('DOMContentLoaded', resetInputs);

calculateTip(currentBill, currentTip, currentPeople);
