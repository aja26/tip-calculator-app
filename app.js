const bill = document.getElementById('bill');
const tips = document.querySelectorAll('#tip option');
const five = document.getElementById('5');
const ten = document.getElementById('10');
const fifteen = document.getElementById('15');
const twentyFive = document.getElementById('25');
const fifty = document.getElementById('50');
const custom = document.querySelector('#custom input');
const nop = document.getElementById('numberofpeople');

const tipcost = document.getElementById('tipcost');
const total = document.getElementById('total');

const reset = document.getElementById('btn');

let currentBill = 0;
let currentTip = 0;

function checkInput(e){
    
    const key = e.keyCode;
    const val = e.target.value
    // console.log(val); 


        if(key >= 65 && key <= 90){
            
        console.log('you are typing letters');
        return;
        } else{
            currentBill = val;
           // console.log(currentBill);
            selectTip();
            
        }
}

function selectedTip(tip){
   
    let selTip = tip.value;
    console.log(selTip);
    let newSelTip = selTip.slice(0, selTip.length -1);
    
    console.log(newSelTip);
    
    calculateTip(newSelTip);
    
}

function calculateTip(val){

    // check is bill is not empty with if statement before doing below calculation
    let tipAmount = (currentBill / 100 ) * val;
    console.log(currentBill, tipAmount);

    tipcost.innerHTML = `<p>$${tipAmount}</p>`;
}

function resetInputs(){

    // if(bill){
    //     removeAttribute('disabled');
    // }
    
    bill.value = '';
    custom.value = '';
    nop.value = '';

    tipcost.innerHTML = `<p>$0.00</p>`;
    total.innerHTML = `<p>$0.00</p>`;
}

function enterCustomVal(e){
    console.log(e.target.value);
    let customSel = e.target;
    customSel.addEventListener('keyup', (e) => {

        if(e.target.value){
            currentTip = e.target.value;
            
        }
    })
}

function numberOfPeople(e){
    let people = e.target.value;

    if(currentBill && currentTip && people){
        console.log('people chosen');
    }
}

bill.addEventListener('keyup', (e) => checkInput(e));


function selectTip(){

    tips.forEach(tip => {
        tip.addEventListener('click', (e) => {
                tips.forEach(newTip => {
                    if(tip !== newTip){
                        newTip.classList.remove('active')
                    } else if(newTip.value === 'Custom'){
                        console.log(1233252452452);
                        newTip.classList.remove('active')
                        currentTip = tip.value;
                        enterCustomVal(e);
                    }
                })
                tip.classList.add('active');     
        });
    })
}



nop.addEventListener('keyup', (e) => numberOfPeople(e));

reset.addEventListener('click', resetInputs);

window.addEventListener('DOMContentLoaded', resetInputs);